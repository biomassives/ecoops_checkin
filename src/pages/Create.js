import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js"




const Create = () => {


  const [browserFingerprint, setBrowserFingerPrint] = useState("");
  const getBrowserFingerPrint = () => {
    getCurrentBrowserFingerPrint().then((res) => {
      setBrowserFingerPrint(res)
    }).catch((err) => {
      setBrowserFingerPrint(JSON.stringify(err))
    })
 }
  


  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [location, setLocation] = useState('')
  const [tag, setTag] = useState('')
  const [fingerprint, setFingerprint] = useState( '' )
  console.log("fingerprint:" + fingerprint)
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

      <label htmlFor="title">Id:</label>

      <section className="id-container">
        <textarea rows={3} cols={100} placeholder="This browser's fingerprint" value={browserFingerprint} onChange={() => {}}></textarea>
        <p><button onClick={() => {getBrowserFingerPrint()}}>Generate FingerPrint</button></p>
        <p style={{marginTop: 20}}>You must try this window in incognito, with vpn and check if Id remains same. It will never change. <sub>[no brave support]</sub></p>
        <p>

        <img src="https://avatars.dicebear.com/api/human/{ browserFingerprint }.svg" />
          </p>
      </section>


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