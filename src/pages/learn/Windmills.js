import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../../config/supabaseClient"

const Windmills = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [project, setProject] = useState('')
  const [comment, setComment] = useState('')
  const [postname, setPostname] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !comment || !postname) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('ecoops_webform')
      .insert([{  postname, title, comment, project, location }])

    if (error) {
      console.log(error)
      setFormError('Please check that your data connection is configured correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  return (
    <div className="page about">


<h1>How to use Eco Ops</h1>


          <div className="disciplines">
            <p>Learn:</p>
            <button href='/biodiversity'>Biodiversity</button>
            <button href='/planet_regen'>Plant Regeneration</button>
            <button href='/soildev'>Soil Development</button>
            <button href='/wildplaces'>Wild Places</button>
            <button href='/site_remediation'>Site Remediation</button>
            <button href='/rivers'>River renewal</button>
            <button href='/wasterq'>Water Quality</button>
            <button href='/pumps'>Pumps</button>
            <button href='/solar'>Solar</button>
            <button href='/filters'>Filters</button>
            <button href='/stoves'>Stoves</button>
            <button href='/upcycling'>Upcycling</button>
          </div>


          <div className="ecoregions">
            <p>Regions:</p>
            <button href='/frotrange_co'>Front Range, CO</button>
            <button href='/west_co'>Western, CO</button>
            <button href='/manitees'>Florida Manitee</button>
            <button href='/location'>Amani's E.African Giraffes</button>
            <button href='/kiras_corner'>Emergent Eco Tech w/ Kira</button>
            <button href='/tag'>Recyclers to upcyclers</button>
            <button href='/rating'>Urban Rivers</button>
            <button href='/status'>Eco School Nurseries</button>
          </div>


          <p>
          
          
          
          Eco Ops provides an interface for checkins that is designed to be 
      automatically generate a log for 
      projects particpants, volunteers, and eco groups.    

            
          
          
          </p>


      




      <h2>Carpentry</h2>


      Please drop us a note about the essential usage of eco ops app.




      <p>

      Our goal, on behalf of <a href="https://scdhub.org" title="Sustainable Community Development Hub">SCD Hub</a> is to provide a useful activity and training        
        
      </p>


      <form onSubmit={handleSubmit}>



      <label htmlFor="postname">Name:</label>
       <input 
          type="text" 
          id="postname"
          value={postname}
          onChange={(e) => setPostname(e.target.value)}
        />





        <label htmlFor="title">Interest: </label>
        <select 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option> sustainable solutions discussion</option>
          <option> projects</option>
          <option> media</option>
          <option> Ecological Sustainability Model NFTs </option>
          <option> Biodiversity credit market</option>

          <option> software question</option>
          <option> mapping/ data</option>
          <option> sponsoring a project</option>
          <option> verifier certification</option>
          <option> Donate</option>
        </select>
       <p></p>




       <label htmlFor="comment">Comment:</label>
        <textarea 
          type="text" 
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

<label htmlFor="project">Project:</label>
       <input 
          type="text" 
          id="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />


<label htmlFor="name">Location:</label>
       <input 
          type="text" 
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button>Send</button>
        {formError && <p className="error">{formError}</p>}

      </form>
    </div>
  )
}

export default Windmills