import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {    
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
      fetch("jobs.json").then(res => res.json()).then(data =>{
        // console.log(data);
        setJobs(data)
      })
    },[])

    //handle input change
    const [query, setQuery] = useState("")
    const handleInputChange = (event) =>{         
        setQuery(event.target.value)
    }

    //filter jobs by title
    const filteredItem = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    // console.log(filteredItem);
    

    // ------radio filtering---------
    const handleChange = (event)=>{
      setSelectedCategory(event.target.value)
    }


    // -------button based filtering---
    const handleClick =(event)=>{
      setSelectedCategory(event.target.value)
    }

    //main function
    const filteredData = (jobs,selected,query) =>{
      let filteredJobs = jobs;
      
      // filtering input item 
      if(query){
        filteredJobs=filteredItem
      }

      //  category  filtering 
      if(selected){
        filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel,salaryType ,
          employmentType, postingDate})=>(
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) || 
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ))
        console.log(filteredJobs);
      }
      return filteredJobs.map((data, i) => <Card key={i} data={data}/>) //  this is the prop that in the card component  the data and the input is passed 
      // sending the data into the card component  

    }

    const result = filteredData(jobs, selectedCategory, query);

    

  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/> {/* passing state as a prop*/ }
        {/* main context*/}
        <div>
          <Jobs result={result}/>
        </div>
    </div>
  )
}

export default Home
