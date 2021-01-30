import React, { useState } from  'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './Member.css'
import {connect } from 'react-redux'
import { editRubrique, deleteRubrique } from '../../../actions/rubriques.actions'




function Rubrique(props){

    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.rubrique.id)
    const [titreToUpdate, setTitreToUpdate] = useState(props.rubrique.titre)
    // const [pnomToUpdate, setPnomToUpdate] = useState(props.rubrique.prenom)
    // const [emailToUpdate, setEmailToUpdate] = useState(props.member.email)
    // const [dateToUpdate, setDateToUpdate] = useState(props.member.dateNaissance)


    
    const handleActivate = () => {
      
       props.onUpdate(
        {
            id: props.rubrique.id,
            nom: titreToUpdate,
            // pnom: pnomToUpdate,
            // email:  emailToUpdate ,
            // date: dateToUpdate,
            // enabled: true
        }
       )
        
    }
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id: props.rubrique.id,
                titre: titreToUpdate,
                
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.rubrique.id}
                        </td>
                        <td>
                            {props.rubrique.titre}
                        </td>
                       
                        
                       
                        
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.rubrique.id)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                    <td>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="id" value={props.rubrique.id}
                                        disabled />
                            </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="titre" value={titreToUpdate}
                                        onChange={(e) => setTitreToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <button className="btn btn-success" onClick={handleUpdate}>Mettre à jour</button>
                        </td>
                        <td>
                        <button  className="btn btn-default" onClick={()=>setUpdateMode(false)}>Cancel</button>
                        </td>
                 </tr>
                </>
        
        
        
               )}
                </>

                     
    )


}

const mapStateToProps = state => {
    return {
        rubriques : state.rubriques
      
    }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (rubrique) => dispatch(editRubrique(rubrique)), 
        onDelete : (id) => dispatch(deleteRubrique(id))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Rubrique);