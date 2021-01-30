import React, { useState } from  'react'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
import { editProjet, deleteProjet } from '../../../../actions/rubriques.actions'




function Projet(props){

    // console.log("hhhhhhhhhhhhhhhhhh",props.presentation)
    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.projet.id_Publication)
    const [descriptionToUpdate, setDescriptionToUpdate] = useState(props.projet.description_publication)
    const [typeToUpdate, setTypeToUpdate] = useState(props.projet.type_publication)

   
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id_Publication: props.projet.id_Publication,
                description_publication: descriptionToUpdate,
                type_publication : typeToUpdate
                   
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.projet.id_Publication}
                        </td>
                        <td>
                            {props.projet.type_publication}
                        </td>
                        <td>
                            {props.projet.description_publication}
                        </td>
                       
                        
                       
                        
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.projet.id_Publication)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="id" value={props.projet.id_Publication}
                                            disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="type" value={typeToUpdate}
                                        onChange={(e) => setTypeToUpdate(e.target.value)}  />
                                </div>
                            </div>
                            
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={descriptionToUpdate}
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
        onUpdate : (projet) => dispatch(editProjet(projet)), 
        onDelete : (id_Publication) => dispatch(deleteProjet(id_Publication))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Projet);