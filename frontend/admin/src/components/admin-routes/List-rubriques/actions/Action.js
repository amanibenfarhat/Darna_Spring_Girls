import React, { useState } from  'react'
import {Link, BrowserRouter} from 'react-router-dom'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
import { editAction, deleteAction,PublierAction } from '../../../../actions/rubriques.actions'




function Action(props){

    const [updateMode, setUpdateMode] = useState(false)
    const [nomToUpdate, setNomToUpdate] = useState(props.action.nom_action)
    // const [descriptionToUpdate, setDescriptionToUpdate] = useState(props.action.description_action)
    const [photoToUpdate, setPhotoToUpdate] = useState(props.action.path_photo)
    const [lieuToUpdate, setLieuToUpdate] = useState(props.action.lieu_action)
    // const [dateDToUpdate, setDateDToUpdate] = useState(props.action.dateD)
    // const [dateFToUpdate, setDateFToUpdate] = useState(props.action.dateF)
    // const [dateDInsToUpdate, setDateTDInsoUpdate] = useState(props.action.dateDIns)
    // const [dateFInsToUpdate, setDateFInsToUpdate] = useState(props.action.dateFIns)
    // const [nbMToUpdate, setNbMToUpdate] = useState(props.action.nbM)
    const [etat_action, setEtatToUpdate] = useState(props.action.etat_action)


    
    const handlePublier = () => {
        props.onPublie({
            id_Action: props.action.id_Action,
            nom_action :nomToUpdate,
            lieu_action: lieuToUpdate,
            photo: photoToUpdate,
            etat_action: etat_action
        })
      
    //    props.onUpdate({
    //         id_Action: props.action.id_Action,
    //         etat_action: !etat_action,
    //    })
        
    }
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }

    const handleUpdate = () => {
        // props.onUpdate(
        //     {
        //         id: props.action.id,
        //         nom: nomToUpdate,
        //         pnom: pnomToUpdate,
        //         email:  emailToUpdate ,
        //         date: dateToUpdate,
        //         enabled: props.action.enabled
        //     })
        setUpdateMode(false)
        
    }
    

    return(
       
       
            <>
        
            
                <tr>
                        <td>
                            {props.action.id_Action}
                        </td>
                        <td>
                            {props.action.nom_action}
                        </td>
                        <td>
                            {/* <img src={`C:/wamp64/www/darna_app/actions/${props.action.path_photo}`} alt="image" width="100" height="50" /> */}
                            <img src="https://i.pinimg.com/236x/6b/4f/a7/6b4fa7fb5e417e6fcb041a57d31d3015--teaching-french-aide.jpg" alt="image" width="50" height="100" />

                            
                        </td>
                        
                        <td>
                            {props.action.lieu_action}
                        </td>
                                                
                        <td>
                            { props.action.etat_action ? (
                                <i className="material-icons button" onClick={handlePublier} >block</i>
                                ) : (
                                <i className="material-icons button" onClick={handlePublier} >checked</i>
                                )}
                           
                        </td>
                        <td>
                            <Link to= {`/rubriques_actions/${props.action.id_Action}`}>
                                <i className="material-icons button">read_more</i>
                            </Link>
                        </td>
                        <td>
                            <Link to= {`/rubriques_actions/${props.action.id_Action}/participants`}>
                                <i className="material-icons button">read_more</i>
                            </Link>
                        </td>
                        
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.action.id_Action)} >delete</i>
                        </td>
                        
                </tr>
            </>
            

                     
    )


}

// const mapStateToProps = state => {
//     return {
//       actions : state.actions
      
//     }
//     console.log("state", state);
  
//   };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (action) => dispatch(editAction(action)), 
        onDelete : (id) => dispatch(deleteAction(id)),
        onPublie : (data) => dispatch(PublierAction(data)),

    }
  };
  
export default connect("",mapDispatchToProps)(Action);