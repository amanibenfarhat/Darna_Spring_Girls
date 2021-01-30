import React, { useState } from  'react'
import '../../../List-members/Member.css'
import {connect, useDispatch } from 'react-redux'
import { editSponsor, deleteSponsor } from '../../../../../actions/rubriques.actions'
import Input from "react-validation/build/input"
import {Link } from 'react-router-dom'








function Sponsor(props){

    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.sponsor.id_Sponsor)
    const [IntituléToUpdate, setIntituléToUpdate] = useState(props.sponsor.intitule_sponsor)
    const [photoToUpdate, setPhotoToUpdate] = useState(null)
    const [photo, setPhoto] = useState(null)

  

    const photoHandler = (e) => {
        setPhotoToUpdate(e.target.files[0])
        const reader = new FileReader();
       reader.onload = () =>{
         if (reader.readyState === 2){
           setPhoto(reader.result)
         }
       }
       reader.readAsDataURL(e.target.files[0])
    }

    const dispatch = useDispatch()
    const [successful,setSuccessful]=useState(false);

    
   
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    
    

    return(

            <>
        
            
                <tr>
                        <td>
                            {props.sponsor.id_Sponsor}
                        </td>
                        <td>
                            {props.sponsor.intitule_sponsor}
                        </td>
                        <td>
                            {/* {props.sponsor.logo} */}
                            <img  src={`C:/wamp64/www/darna_app/sponsors/${props.sponsor.path_logo}`}
                                   ></img>
                        </td>
                        {/* <td>
                            {props.sponsor.path_logo}
                        </td> */}
                       
                        
                       
                        
                        <td>
                            <Link to= {`/nos_sponsors/${props.sponsor.id_Sponsor}`}>
                                    <i className="material-icons button">edit</i>
                            </Link>
                           {/* <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i> */}
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.sponsor.id_Sponsor)} >delete</i>
                        </td>
                        
                </tr>
            </>
          
                     
    )


}

const mapStateToProps = state => {
    return {
        sponsors : state.data
      
    }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (sponsor) => dispatch(editSponsor(sponsor)), 
        onDelete : (id_Sponsor) => dispatch(deleteSponsor(id_Sponsor))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Sponsor);