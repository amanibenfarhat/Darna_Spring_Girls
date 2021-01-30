import React , { useState,useRef }from "react";
import { useSelector,useDispatch } from 'react-redux'

import { connect } from "react-redux";

import Form from "react-validation/build/form";
import Textearea from "react-validation/build/textarea"
import Select from "react-validation/build/select"

import { addProjet } from "../../../../actions/rubriques.actions";

function CreateProjet(){
    const [description_publication, setDescription] = useState("")
    const [type_publication, setType] = useState("")
    const [successful,setSuccessful]=useState(false);


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
      
      const handleAdd=(e) =>{
        e.preventDefault();
        setSuccessful(false);
        Registerform.current.validateAll();
            dispatch(
                addProjet(type_publication,description_publication)
              )
              .then(() => {
                setSuccessful(true);
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
                          <h4 className="card-title">Ajouter un projet</h4>
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
                                    <Select className="form-control" required value={type_publication} onChange={(e) => setType(e.target.value)}>
                                        <option hidden> Choisissez le type </option>
                                        <option disabled default>Choisissez le type</option>
                                        <option value="Projets futurs">Projets futurs</option>
                                        <option value="Projets en cours">Projets en cours</option>
                                    </Select>
                                  
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                    <Textearea required className="form-control" value={description_publication} onChange={(e) => setDescription(e.target.value)} />
                                  
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

  function mapStateToProps(state) {
    
    const { message } = state.messageReducer;
    return {
      message,
    };
  }
export default connect(mapStateToProps)(CreateProjet)