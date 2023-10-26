import {Groupe} from "./Groupe.jsx"
import {Age} from "./Age.jsx"

export function Contact(props){

    return(
        <div className="card m-3" style={{width: "10rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.contact.lastname} {props.contact.firstname}</h5>
                <Groupe groupe={props.contact.grp}/>
                <Age date={props.contact.birthdate}/>
            </div>
        </div>
        
    
    )
}

