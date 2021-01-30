import React , { useState,useRef }from "react";
import { useSelector,useDispatch } from 'react-redux'
import { Link,BrowserRouter } from "react-router-dom";
import { isEmail } from "validator";
import { connect } from "react-redux";
import { useHistory} from "react-router-dom"


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { register } from "../../../actions/authAction";

function CreateMember(){
    const [username, setUsername] = useState("");
    const [nom,setNom]= useState("");
    const [prenom,setPrenom]=useState("");
    const [email,setEmail]=useState("");
    const [dateNaissance,setDateNaissance]=useState("");
    const [fonction,setFonction]=useState("");
    const [password,setPassword]=useState("");
    const [successful,setSuccessful]=useState(false);

    const {message} = useSelector(state => state.messageReducer)
    const dispatch = useDispatch()
    const Registerform = useRef();
    const history = useHistory();


    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              Ce champ est obligatoire !
            </div>
          );
        }
      };
      const vusername = (value) => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert alert-danger" role="alert">
             username doit avoir 3 à 20 caractère !
            </div>
          );
        }
      };
      const vnom = (value) => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert alert-danger" role="alert">
              Le nom doit avoir 3 à 20 caractère !
            </div>
          );
        }
      };
      const vprenom = (value) => {
        if (value.length < 3 || value.length > 20) {
          return (
            <div className="alert alert-danger" role="alert">
              Le prénom doit avoir 3 à 20 caractère !
            </div>
          );
        }
      };
      const vemail = (value) => {
        if (!isEmail(value)) {
          return (
            <div className="alert alert-danger" role="alert">
              Cet email est invalide.
            </div>
          );
        }
      };
      const vpassword = (value) => {
        if (value.length < 6 || value.length > 40) {
          return (
            <div className="alert alert-danger" role="alert">
              le mot de passe doit être au minimum de 6 caractère.
            </div>
          );
        }
      };

      const handleRegister=(e) =>{
        e.preventDefault();
        setSuccessful(false);
        Registerform.current.validateAll();
            dispatch(
                register(username,nom,prenom,email,password,fonction,dateNaissance)
              )
              .then(() => {
                setSuccessful(true);
              })
              .catch(() => {
                setSuccessful(false)
              });
        history.push('/members')

      
       
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
                          <h4 className="card-title">Ajouter un membre</h4>
                        </div>
                    <div className="card-body">
                      {message && (
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
                                  <Input
                                    aria-label="username"
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    validations={[required, vusername]}
                                    
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="nomuser"
                                    type="text"
                                    className="form-control"
                                    name="nom"
                                    placeholder="nom"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    validations={[required, vnom]}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="prenom"
                                    type="text"
                                    className="form-control"
                                    name="prenom"
                                    placeholder="Prénom"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    validations={[required, vprenom]}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="email"
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    validations={[required, vemail]}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="fonction"
                                    type="text"
                                    className="form-control"
                                    name="fonction"
                                    placeholder="Fonction: Employé, étudiant,etc."
                                    value={fonction}
                                    onChange={(e) => setFonction(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="dateNaissance"
                                    type="text"
                                    className="form-control"
                                    name="dateNaissance"
                                    placeholder="date de naissance"
                                    value={dateNaissance}
                                    onChange={(e) => setDateNaissance(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <Input
                                    aria-label="password"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    validations={[required, vpassword]}
                                  />
                                </div>
                              </div>
                            </div>
                            <button 
                            data-testid="signupbtn" 
                            type="submit"
                            className="btn btn-round" 
                            onClick={handleRegister}>
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
export default connect(mapStateToProps)(CreateMember)