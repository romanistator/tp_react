import {useState, useEffect} from "react"

export function Groupe(props){
    const [Group, setGroup] = useState([])
  
        fetch('http://localhost:8000'+props.groupe)
        .then((response)=>response.json())
        .then(data => setGroup(data['name']))
   
    
    return (
        <p>{Group}</p>
    )
}
