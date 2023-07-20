import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [location, setLocation] = useState('')
  const [tag, setTag] = useState('')
  const [rating, setRating] = useState('')
  const [poststatus, setPoststatus] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields.')
      return
    }

    const { data, error } = await supabase
      .from('smoothies')
      .update({ title, method, location, tag, rating })
      .eq('id', id)

    if (error) {
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      setFormError(null)
      navigate('/')
    }
  }

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
        navigate('/', { replace: true })
      }
      if (data) {
        setTitle(data.title)
        setMethod(data.method)
        setLocation(data.location)
        setTag(data.tag)
        setRating(data.rating)
      }
    }

    fetchSmoothie()
  }, [id, navigate])

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name of Item:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Description:</label>
        <textarea 
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="location">Location:</label>
        <textarea 
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="method">Tag(s):</label>
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


        <label htmlFor="poststatus">Usefulness:</label>
        <input 
          type="number"
          id="poststatus"
          value={poststatus}
          onChange={(e) => setPoststatus(e.target.value)}
        />

        <button>Update Checkin</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update