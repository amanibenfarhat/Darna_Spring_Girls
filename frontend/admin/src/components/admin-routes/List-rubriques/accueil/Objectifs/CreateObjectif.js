import React , { useState,useRef }from "react";
import { useSelector,useDispatch } from 'react-redux'

import { connect } from "react-redux";

import Form from "react-validation/build/form";
import Textearea from "react-validation/build/textarea"

import { addObjectif } from "../../../../../actions/rubriques.actions";

function CreateObjectif(){
    const [description_objectif, setDescription] = useState("")
    const [successful,setSuccessful]=useState(false);


    // const {message} = useSelector(state => state.messageReducer)
    const message = "Ajout avec succès"
    const dispatch = useDispatch()
    const Registerform = useRef();
    


    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              Ce champ est obligatoire !
            </div>
          );
        }
      };

      const vdescription = (value) => {
        if (value.length < 10 ) {
          return (
            <div className="alert alert-danger" role="alert">
             La description doit avoir au moins 10 caractères !
            </div>
          );
        }
      };
   
      
      const handleAdd=(e) =>{
        e.preventDefault();
        setSuccessful(false);
        Registerform.current.validateAll();
            dispatch(
                addObjectif(description_objectif)
              )
              .then(() => {
                setSuccessful(true);
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
                          <h4 className="card-title">Ajouter un objectif</h4>
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
                      <Form  ref={Registerform}>
                       
                          <div>
                          
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                    <Textearea required validations={[required, vdescription]} className="form-control" value={description_objectif} onChange={(e) => setDescription(e.target.value)} />
                                  
                                </div>
                              </div>
                            </div>
                            
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

 
export default CreateObjectif;