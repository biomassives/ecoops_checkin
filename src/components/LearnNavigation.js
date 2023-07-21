import supabase from "../config/supabaseClient"
import { Link } from 'react-router-dom'

const LearnNavigation = ({ smoothie, onDelete }) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('smoothies')
      .delete()
      .eq('id', smoothie.id)
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      onDelete(smoothie.id)
    }
  }

  return (

        <div className="disciplines">
            <p>Learn:</p>

                <Link to="/biodiversity">Biodiversity</Link>
                <Link to="/planet_regen">Plant Regeneration</Link>
                <Link to="/soildev">Soil Development</Link>
                <Link to="/wildplaces">Wild Places</Link>
                <Link to="/site_remediation">Site Remediation</Link>
                <Link to="/rivers">River renewal</Link>
                <Link to="/wasterq"><button>Water Quality</button></Link>
                <Link to="/pumps"><button>Pumps</button></Link>
                <Link to="/solar"><button>Solar</button></Link>
                <Link to="/filters"><button>Filters</button></Link>
                <Link to="/stoves"><button>Stoves</button></Link>
                <Link to="/upcycling"><button>Upcycling</button></Link>
        </div>

 
  )
}

export default LearnNavigation
