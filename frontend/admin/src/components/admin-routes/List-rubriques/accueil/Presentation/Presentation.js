import React, { useState } from  'react'
import '../../../List-members/Member.css'
import {connect } from 'react-redux'
import { editPresentation, deletePresentation } from '../../../../../actions/rubriques.actions'
import PresentationList from './PresentationList'




function Presentation(props){

    // console.log("hhhhhhhhhhhhhhhhhh",props.presentation)
    const [updateMode, setUpdateMode] = useState(false)
    const [descriptionToUpdate, setDescriptionToUpdate] = useState(props.presentation.description_presentation)
   
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                idPresentation: props.presentation.idPresentation,
                description_presentation: descriptionToUpdate,
                   
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.presentation.idPresentation}
                        </td>
                        <td>
                            {props.presentation.description_presentation}
                        </td>
                       
                        
                       
                        
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.presentation.idPresentation)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                    <td>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="id" value={props.presentation.idPresentation}
                                        disabled />
                            </div>
                        </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="titre" value={descriptionToUpdate}
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
    // return {
    //   presentation : state.rubriqueData.data
      
    // }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (presentation) => dispatch(editPresentation(presentation)), 
        onDelete : (idPresentation) => dispatch(deletePresentation(idPresentation))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Presentation);