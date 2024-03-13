import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {    
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
      fetch("jobs.json").then(res => res.json()).then(data =>{
        console.log(data);
      })
    },[])

    const [query, setQuery] = useState("")
    const handleInputChange = (event) =>{         
        setQuery(event.target.value)
    }
    console.log(query);
  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/> {/* passing state as a porp*/ }
        
    </div>
  )
}

export default Home
