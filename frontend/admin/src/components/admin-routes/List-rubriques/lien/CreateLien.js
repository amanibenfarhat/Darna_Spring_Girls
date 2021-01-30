import React , { useState,useRef }from "react";
import {  Link, Redirect } from 'react-router-dom';

import Input from "react-validation/build/input"
import Form from "react-validation/build/form";
import { useSelector,useDispatch } from 'react-redux'
import { addLien } from '../../../../actions/rubriques.actions';
import {connect} from 'react-redux';

function CreateLien() {

    

    
  const [title, setTitle] = useState("")
  const [file, setFile] = useState(null)
  
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


    

    const handleAddLien = (e) => {
        e.preventDefault();
        setSuccessful(false);
        Addform.current.validateAll();
        let formData = new FormData()
        let data = {
            "titre_liendoc": title,
            
        }
        formData.append('data', JSON.stringify(data));
        formData.append('phofile[]to', file);

        // console.log("object", data)
        // debugger
        dispatch(
            addLien(formData)
          )
          .then(() => {
             
            setSuccessful(true);
            
          })
          .catch(() => {
            setSuccessful(false)
          });
          // <Redirect to="/rubriques_actions" />
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
                        <label className="bmd-label-floating">Titre du lien</label>
                        <Input type="text"
                            className="form-control"
                            aria-label="name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} validation={required} />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="bmd-label-floating">Document</label>
                        <Input type="text"
                            className="form-control"
                            aria-label="name"
                            value={file}
                            onChange={(e) => setFile(e.target.value)} validation={required} />
                      </div>
                    </div>
                    </div>
                   
                  
                  <button data-testid="addbtn" type="submit" onClick={handleAddLien} className="btn btn-round ">Créer</button>
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


export default connect(mapStateToProps)(CreateLien);