import React, {useEffect, useState} from 'react'
import {connect } from 'react-redux'
import { fetchContacts, editContact } from '../../../../actions/rubriques.actions'
import Contact from './Contact'

function ContactDetails({contacts, fetchContacts, editContact}){

  
    // const [idToUpdate, setidToUpdate] = useState(contacts.id)
    // const [adresseToUpdate, setAdresseToUpdate] = useState(contacts.adresse)
    // const [emailToUpdate, setEmailToUpdate] = useState(contacts.email)
    // const [telToUpdate, setTelToUpdate] = useState(contacts.tél)
    // const [presidentToUpdate, setPresidentToUpdate] = useState(contacts.président)
    // const [emailpToUpdate, setEmailpToUpdate] = useState(contacts.email_P)
    // const [vpToUpdate, setVpToUpdate] = useState(contacts.vice_Président)
    // const [emailvpToUpdate, setEmailvpToUpdate] = useState(contacts.email_V)
    // const [secretaireToUpdate, setSecretaireToUpdate] = useState(contacts.s_génerale)
    // const [emailsToUpdate, setEmailsToUpdate] = useState(contacts.email_S)
    // const [tresorierToUpdate, setTresorierToUpdate] = useState(contacts.trésorie)
    // const [emailtToUpdate, setEmailtToUpdate] = useState(contacts.email_T)
    // const [lienfb, setLienFbToUpdate] = useState(contacts.lien_FB)
    // const [lienInsta, setLienInstaToUpdate] = useState(contacts.lien_Insta)
    // const [lienYt, setLienYtToUpdate] = useState(contacts.lien_Youtube)
    // const [lienTw, setLienTwToUpdate] = useState(contacts.lien_Twitter)


  console.log("contacts", contacts)

 
  useEffect(() => {
    fetchContacts()
    
  }, [])
  
  const handleUpdate = () => {
    // editContact(
    //     {
    //         id: idToUpdate,
    //         adresse: adresseToUpdate,
    //         email : emailToUpdate,
    //         email_P: emailpToUpdate,
    //         email_S: emailsToUpdate,
    //         email_T: emailtToUpdate,
    //         email_V: emailvpToUpdate,
    //         lien_FB: lienfb,
    //         lien_Insta: lienInsta,
    //         lien_Twitter: lienTw,
    //         lien_Youtube: lienYt,
    //         président: presidentToUpdate,
    //         s_génerale: secretaireToUpdate,
    //         trésorie: tresorierToUpdate,
    //         vice_Président: vpToUpdate,
    //         tél: telToUpdate

    //     })
    
}


  
    return(
      

                  
                  <div className="card-body">
                  {/* {message && (
                    <div className="form-group">
                        {successful ?
                        <div className="alert alert-success"
                          
                         role="alert"
                        >
                            {"Ajout avec Succé"}
                        </div>
                        : <div className="alert alert-danger"
                          
                        role="alert"
                       >
                           {message}
                       </div>
                        }
                    </div>
                )} */}
                    {/* <form >
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label >Adresse</label>
                            <input type="text" className="form-control" value={adresseToUpdate}
                                                onChange={(e) => setAdresseToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label >Tél</label>
                            <input type="text" className="form-control" value={telToUpdate}
                                                onChange={(e) => setTelToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label >Email</label>
                            <input type="text" className="form-control" value={emailToUpdate}
                                                onChange={(e) => setEmailToUpdate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Président </label>
                            <input type="text" className="form-control" value={presidentToUpdate}
                                                onChange={(e) => setPresidentToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Email Président </label>
                            <input type="text" className="form-control" value={emailpToUpdate} 
                            onChange={(e) => setEmailpToUpdate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Vice-président</label>
                            <input type="text" className="form-control" value={vpToUpdate}
                            onChange={(e) => setVpToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Email Vice-président</label>
                            <input type="text" className="form-control" value={emailvpToUpdate}
                            onChange={(e) => setEmailvpToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Secrétaire général</label>
                            <input type="text" className="form-control" value={secretaireToUpdate}
                            onChange={(e) => setSecretaireToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Email Secrétaire général</label>
                            <input type="text" className="form-control" value={emailsToUpdate}
                            onChange={(e) => setEmailsToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Trésorier </label>
                            <input type="text" className="form-control" value={tresorierToUpdate}
                            onChange={(e) => setTresorierToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Email Trésorier </label>
                            <input type="text" className="form-control" value={emailtToUpdate}
                            onChange={(e) => setEmailtToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Lien Facebook </label>
                            <input type="text" className="form-control" value={lienfb}
                            onChange={(e) => setLienFbToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Lien Instagram </label>
                            <input type="text" className="form-control" value={lienInsta}
                            onChange={(e) => setLienInstaToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Trésorier </label>
                            <input type="text" className="form-control" value={lienYt}
                            onChange={(e) => setLienYtToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Lien Twitter </label>
                            <input type="text" className="form-control" value={lienTw}
                            onChange={(e) => setLienTwToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>
                      <button type="submit" onClick={handleUpdate} className="btn btn-round ">Modifier</button>
                      <div className="clearfix" />
                    </form> */}
                  </div>
               
    )
  }
   


const mapStateToProps = state => {
  return {
    contacts : state.rubriqueData.data[0]
    
  }
  // console.log("state", state.rubriqueData.data[0]);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts : () => dispatch(fetchContacts()),
    editContact : () => dispatch(editContact())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);

