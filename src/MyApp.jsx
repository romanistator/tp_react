import {useState, useEffect} from "react"
import {Contact} from "./components/Contact.jsx"

function MyApp(){
    //useState déclare une variable qui va provoquer un re-render de composant lorsqu'elle change
    //useEffect déclenche une fonction quand le composant est rendu
    const [listContacts, setListContacts] = useState([])   
    function getContact(){
        fetch('http://localhost:8000/api/contacts')
        .then((response)=>response.json())
        .then(data => setListContacts(data['hydra:member']))
    }
    return (
        <div className="row">
            <h1>Repertoire</h1>
            <button onClick={getContact}>Récupérer la liste de contacts</button>
            {listContacts.map((contact, index)=>       
                <Contact 
                    key={index} 
                    contact={contact} 
                /> 
            )}
        </div>
    )
}




export default MyApp