import React, { useState } from  'react'
import '../../../List-members/Member.css'
import {connect } from 'react-redux'
import { editObjectif, deleteObjectif } from '../../../../../actions/rubriques.actions'
import '../../../List-members/Member.css'




function Objectif(props){
    console.log("props", props.objectif.description_objectif)

    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.objectif.idObjectif)
    const [DescriptionToUpdate, setDescriptionToUpdate] = useState(props.objectif.description_objectif)
  


    
   
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                idObjectif: props.objectif.idObjectif,
                description_objectif: DescriptionToUpdate,
                
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.objectif.idObjectif}
                        </td>
                        <td>
                            {props.objectif.description_objectif}
                        </td>
                       
                        
                       
                        
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.objectif.idObjectif)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                    <td>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="id" value={props.objectif.idObjectif}
                                        disabled />
                            </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={DescriptionToUpdate}
                                        onChange={(e) => setDescriptionToUpdate(e.target.value)}  />
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
        // objectifs : state.rubriqueData.data
      
    }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (objectif) => dispatch(editObjectif(objectif)), 
        onDelete : (idObjectif) => dispatch(deleteObjectif(idObjectif))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Objectif);