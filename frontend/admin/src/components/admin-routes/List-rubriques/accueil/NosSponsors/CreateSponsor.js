import React , { useState,useRef }from "react";
import { useSelector,useDispatch } from 'react-redux'
import {  useHistory} from "react-router-dom"


import { connect } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input"

import { addSponsor } from "../../../../../actions/rubriques.actions";

function CreateSponsor(){
    const [intitule_sponsor, setIntitule] = useState("")
    const [photoToUpdate, setPhotoToUpdate] = useState(null)
    const [photo, setPhoto] = useState(null)

    // const [loading, setLoading] = useState(false)
    
    const [successful,setSuccessful]=useState(false);

    const history = useHistory()
    // const {message} = useSelector(state => state.messageReducer)
    const message = "Ajout avec succès"
    const dispatch = useDispatch()
    const form = useRef();

    
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


    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              Ce champ est obligatoire !
            </div>
          );
        }
      };

     
      
   
      
      const handleAdd=(e) =>{
        e.preventDefault();
        setSuccessful(false);
        let formData = new FormData()
        let data = {
          "intitule_sponsor": intitule_sponsor,
        }
        formData.append('data', JSON.stringify(data));
        formData.append('logo', photoToUpdate);

        // form.current.validateAll();
            dispatch(
                addSponsor(formData)
              )
              .then(() => {
               history.push('/nos_sponsors')
                // console.log("message",message)
                // debugger
              })
              .catch(() => {
                setSuccessful(false)
              });
     
      }


      return (
        <>
         <div className="wrapper ">
    
            <div className="main-panel">
    
           
          
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-profile">
                        <div className="card-header card-header-primary">
                          <h4 className="card-title">Ajouter un sponsor</h4>
                        </div>
                    <div className="card-body">
                        
                    {successful && message && (
                          <div className="form-group">
                            <div className={successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
                              {message}
                            </div>
                          </div>
                            )}
                      <Form  ref={form}>
                       
                          <div>
                          
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                <Input
                                    aria-label="intitule"
                                    type="text"
                                    className="form-control"
                                    name="intitule"
                                    placeholder="Intitulé sponsor"
                                    value={intitule_sponsor}
                                    onChange={(e) => setIntitule(e.target.value)}
                                    required
                                  />
                                  
                                </div>
                              </div>
                           
                          
                              <div className="col-md-4">
                              <div className="form-group">
                                </div>
                                <div className="card-image ">
                                <img
                                  alt="..."
                                  className="image"
                                  src={photo}

                                />
                                <Input  type="file" name="file" onChange={photoHandler} aria-label="file" />
                                {/* <img src={logo} />  */}

                                </div>
                                  
                              </div>
                            </div>
                            <br/>
                            <button 
                            data-testid="signupbtn" 
                            type="submit"
                            className="btn btn-round" 
                            onClick={handleAdd}>
                              Créer
                            </button>
                           
                          </div>
                        
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </>
      );      
  }

 
export default CreateSponsor;