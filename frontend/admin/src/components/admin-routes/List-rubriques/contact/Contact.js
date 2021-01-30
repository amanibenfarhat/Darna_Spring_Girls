import React, { useState } from  'react'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
import { editContact, deleteContact } from '../../../../actions/rubriques.actions'




function Contact(props){

    // console.log("hhhhhhhhhhhhhhhhhh",props.presentation)
    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.contact.id)
    const [adresseToUpdate, setAdresseToUpdate] = useState(props.contact.adresse)
    const [emailToUpdate, setEmailToUpdate] = useState(props.contact.email)
    const [telToUpdate, setTelToUpdate] = useState(props.contact.tél)
    const [presidentToUpdate, setPresidentToUpdate] = useState(props.contact.président)
    const [emailpToUpdate, setEmailpToUpdate] = useState(props.contact.email_P)
    const [vpToUpdate, setVpToUpdate] = useState(props.contact.vice_Président)
    const [emailvpToUpdate, setEmailvpToUpdate] = useState(props.contact.email_V)
    const [secretaireToUpdate, setSecretaireToUpdate] = useState(props.contact.s_génerale)
    const [emailsToUpdate, setEmailsToUpdate] = useState(props.contact.email_S)
    const [tresorierToUpdate, setTresorierToUpdate] = useState(props.contact.trésorie)
    const [emailtToUpdate, setEmailtToUpdate] = useState(props.contact.email_T)


   
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id: props.contact.id,
                adresse: adresseToUpdate,
                email: emailToUpdate,
                tél: telToUpdate,
                président: presidentToUpdate,
                email_P : emailpToUpdate,
                vice_Président : vpToUpdate,
                email_V: emailvpToUpdate,
                s_génerale: secretaireToUpdate,
                email_S: emailsToUpdate,
                trésorie: tresorierToUpdate,
                email_T: emailtToUpdate


            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.contact.id}
                        </td>
                        <td>
                            {props.contact.adresse}
                        </td>
                        <td>
                            {props.contact.email}
                        </td>
                        <td>
                            {props.contact.tél} 
                        </td>
                        <td>
                            {props.contact.président} 
                        </td>
                        <td>
                            {props.contact.email_P} 
                        </td>
                        <td>
                            {props.contact.vice_Président} 
                        </td>
                        <td>
                            {props.contact.email_V} 
                        </td>
                        <td>
                            {props.contact.trésorie}
                             
                        </td>
                        <td>
                            {props.contact.email_T}
                        </td>
                        <td>
                            {props.contact.s_génerale} 
                        </td>
                        <td>
                            {props.contact.email_S} 
                        </td>
                       
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.contact.id)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                        <td>
                            <div className="form-group">
                                <div className="col-md-10">
                                    <input type="text" className="form-control"  name="id" value={props.contact.id}
                                            disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-md-10">
                                    <input type="text" className="form-control"  name="type" value={adresseToUpdate}
                                        onChange={(e) => setAdresseToUpdate(e.target.value)}  />
                                </div>
                            </div>
                            
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={emailToUpdate}
                                        onChange={(e) => setEmailToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={telToUpdate}
                                        onChange={(e) => setTelToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={presidentToUpdate}
                                        onChange={(e) => setPresidentToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={emailpToUpdate}
                                        onChange={(e) => setEmailpToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>

                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={vpToUpdate}
                                        onChange={(e) => setVpToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={emailvpToUpdate}
                                        onChange={(e) => setEmailvpToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={tresorierToUpdate}
                                        onChange={(e) => setTresorierToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={emailtToUpdate}
                                        onChange={(e) => setEmailtToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>

                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={secretaireToUpdate}
                                        onChange={(e) => setSecretaireToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>

                        <td>
                        <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="description" value={emailsToUpdate}
                                        onChange={(e) => setEmailsToUpdate(e.target.value)}  />
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
        onUpdate : (contact) => dispatch(editContact(contact)), 
        onDelete : (id) => dispatch(deleteContact(id))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Contact);