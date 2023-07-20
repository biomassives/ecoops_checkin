import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js"



const Create = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [location, setLocation] = useState('')
  const [tag, setTag] = useState('')
  const [fingerprint, setFingerprint] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, location, rating, tag, fingerprint }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page create">
      <h2>Post a checkin</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

       <label htmlFor="method">Description:</label>
        <textarea 
          type="text" 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

       <label htmlFor="location">Location:</label>
       <input 
          type="text" 
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

      <label htmlFor="tag">Tag(s):</label>
       <input 
          type="text" 
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />


        <label htmlFor="rating">Usefulness:</label>
        <input
        type="hidden"
        id="fingerprint"
        value={ getCurrentBrowserFingerPrint() }
        onChange={(e) => setFingerprint(e.target.value)}
        />
        <input 
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Post checkin</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create