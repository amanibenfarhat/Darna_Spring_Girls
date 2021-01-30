import React , { useState,useRef }from "react";
import {  Link, Redirect } from 'react-router-dom';

import Input from "react-validation/build/input"
import Form from "react-validation/build/form";
import { useSelector,useDispatch } from 'react-redux'
import { addAction } from '../../../../actions/rubriques.actions';
import {connect} from 'react-redux';

function CreateAction() {

    

    
  const [nomToUpdate, setNomToUpdate] = useState("")
  const [descriptionToUpdate, setDescriptionToUpdate] = useState("")
  const [photoToUpdate, setPhotoToUpdate] = useState(null)
  const [lieuToUpdate, setLieuToUpdate] = useState("")
  const [dateDToUpdate, setDateDToUpdate] = useState("")
  const [dateFToUpdate, setDateFToUpdate] = useState("")
  const [dateDInsToUpdate, setDateTDInsoUpdate] = useState("")
  const [dateFInsToUpdate, setDateFInsToUpdate] = useState("")
  const [nbMToUpdate, setNbMToUpdate] = useState("")
  const [etat_action, setEtatToUpdate] = useState(false)
  const [successful,setSuccessful] = useState(false);



  const {message} = useSelector(state => state.messageReducer)
  const dispatch = useDispatch()
  const Addform = useRef();

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Ce champ est obligatoire !
        </div>
      );
    }
  };


    

    const handleAddAction = (e) => {
        e.preventDefault();
        setSuccessful(false);
        Addform.current.validateAll();
        let formData = new FormData()
        let data = {
            "nom_action": nomToUpdate,
            "description_action": descriptionToUpdate,
            "lieu_action" : lieuToUpdate,
            "datedebut_action" : dateDToUpdate,
            "datefin_action" : dateFToUpdate,
            "datedebut_inscrit" : dateDInsToUpdate,
            "datefin_inscrit" : dateFInsToUpdate,
            "nbmembre_action" : nbMToUpdate,
            "etat_action": false
        }
        formData.append('data', JSON.stringify(data));
        formData.append('photo', photoToUpdate);

        // console.log("object", data)
        // debugger
        dispatch(
            addAction(formData)
          )
          .then(() => {
             
            setSuccessful(true);
            
          })
          .catch(() => {
            setSuccessful(false)
          });
          <Redirect to="/rubriques_actions" />
    //   console.log("ssss",successful)
    }


    return (
        <div className="wrapper ">
        <div className="main-panel">
        <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Créer une action</h4>
              </div>
              <div className="card-body">
                {message && (
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
                )}
              <Form ref={Addform} >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="bmd-label-floating">Nom de l'action</label>
                        <Input type="text"
                            className="form-control"
                            aria-label="name"
                            value={nomToUpdate}
                            onChange={(e) => setNomToUpdate(e.target.value)} validation={required} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="bmd-label-floating">Lieu</label>
                        <Input type="text" className="form-control"
                               value={lieuToUpdate} validations={[required]}
                               aria-label="lieu"
                               onChange={(e) => setLieuToUpdate(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="bmd-label-floating">Date début de l'action</label>
                        <Input type="text" className="form-control" value={dateDToUpdate} validations={[required]} aria-label="dateD"
                                            onChange={(e) => setDateDToUpdate(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Date fin de l'action</label>
                        <Input type="text" className="form-control" value={dateFToUpdate} validations={[required]} aria-label="dateF"
                                            onChange={(e) => setDateFToUpdate(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Date début d'inscription</label>
                        <Input type="text" className="form-control" value={dateDInsToUpdate} validations={[required]} aria-label="dateDI"
                        onChange={(e) => setDateTDInsoUpdate(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="bmd-label-floating">Date fin d'inscription</label>
                        <Input type="text" className="form-control" value={dateFInsToUpdate} validations={[required]} aria-label="dateFI"
                        onChange={(e) => setDateFInsToUpdate(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="bmd-label-floating">Nombre des membres </label>
                        <Input type="text" className="form-control" value={nbMToUpdate} validations={[required]} aria-label="nbreM"
                        onChange={(e) => setNbMToUpdate(e.target.value)} />
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Description</label>
                        <div className="form-group">
                          
                          <input className="form-control"  Value={descriptionToUpdate} validations={[required]} aria-label="desciption"
                        onChange={(e) => setDescriptionToUpdate(e.target.value)}  />
                        </div>
                      </div>
                    </div>
                    
                        <div className="col-md-6">
                            <label>Photo</label>
                            <div className="form-group">
                            </div>
                            <Input  type="file" name="file" onChange={(e) => setPhotoToUpdate(e.target.files[0])} aria-label="file" />
                        </div>
                    
                  </div>
                  <button data-testid="addbtn" type="submit" onClick={handleAddAction} className="btn btn-round ">Créer</button>
                  <div className="clearfix" />
                </Form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
            </div>
        </div>
    
    
    
    
    
    
    
    
    
      )
}


function mapStateToProps(state) {
    
    const { message } = state.messageReducer;
    return {
      message,
    };
  }


export default connect(mapStateToProps)(CreateAction);