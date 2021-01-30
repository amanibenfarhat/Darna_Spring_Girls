import React, { useState } from  'react'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
import { editHelp, deleteHelp } from '../../../../actions/rubriques.actions'




function Aider(props){

    // console.log("hhhhhhhhhhhhhhhhhh",props.presentation)
    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.help.id)
    const [commentToUpdate, setCommentToUpdate] = useState(props.help.comment_aider)
    const [pkToUpdate, setpkToUpdate] = useState(props.help.pk_aider)
    const [volontariatToUpdate, setvolontariatToUpdate] = useState(props.help.volontariat)


   
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id: props.help.id,
                comment_aider: commentToUpdate,
                pk_aider : pkToUpdate,
                volontariat : volontariatToUpdate
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.help.id}
                        </td>
                        <td>
                            {props.help.comment_aider}
                        </td>
                        <td>
                            {props.help.pk_aider}
                        </td>
                        <td>
                            {props.help.volontariat}
                        </td>
                       
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.help.id)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="id" value={props.help.id}
                                            disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="type" value={commentToUpdate}
                                        onChange={(e) => setCommentToUpdate(e.target.value)}  />
                                </div>
                            </div>
                            
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={pkToUpdate}
                                        onChange={(e) => setpkToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={volontariatToUpdate}
                                        onChange={(e) => setvolontariatToUpdate(e.target.value)}  />
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
        onUpdate : (help) => dispatch(editHelp(help)), 
        onDelete : (id) => dispatch(deleteHelp(id))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Aider);