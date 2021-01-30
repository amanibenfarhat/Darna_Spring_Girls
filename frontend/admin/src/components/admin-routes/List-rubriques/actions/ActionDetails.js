import React , { useState,useRef, useEffect }from "react";
import { useParams} from "react-router-dom"
// import {  Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
// import Input from "react-validation/build/input"
import {fetchActionById, editAction}  from '../../../../actions/rubriques.actions'




function ActionDetails({actions, fetchAction}) {


  const {message} = useSelector(state => state.messageReducer)
  const dispatch = useDispatch()
  const { actionId } = useParams()
  const Addform = useRef();

  const [nomToUpdate, setNomToUpdate] = useState(actions.nom_action)
  useEffect(() => { setNomToUpdate(actions.nom_action)}, [actions.nom_action] )

  const [descriptionToUpdate, setDescriptionToUpdate] = useState(actions.description_action)
  useEffect(() => { setDescriptionToUpdate(actions.description_action)}, [actions.description_action] )

  const [photoToUpdate, setPhotoToUpdate] = useState(actions.photo)
  useEffect(() => { setPhotoToUpdate(actions.photo)}, [actions.photo] )

  const [lieuToUpdate, setLieuToUpdate] = useState(actions.lieu_action)
  useEffect(() => { setLieuToUpdate(actions.lieu_action)}, [actions.lieu_action] )

  const [dateDToUpdate, setDateDToUpdate] = useState(actions.datedebut_action)
  useEffect(() => { setDateDToUpdate(actions.datedebut_action)}, [actions.datedebut_action] )

  const [dateFToUpdate, setDateFToUpdate] = useState(actions.datefin_action)
  useEffect(() => { setDateFToUpdate(actions.datefin_action)}, [actions.datefin_action] )

  const [dateDInsToUpdate, setDateTDInsoUpdate] = useState(actions.datedebut_inscrit)
  useEffect(() => { setDateTDInsoUpdate(actions.datedebut_inscrit)}, [actions.datedebut_inscrit] )

  const [dateFInsToUpdate, setDateFInsToUpdate] = useState(actions.datefin_inscrit)
  useEffect(() => { setDateFInsToUpdate(actions.datefin_inscrit)}, [actions.datefin_inscrit] )

  const [nbMToUpdate, setNbMToUpdate] = useState(actions.nbmembre_action)
  useEffect(() => { setNbMToUpdate(actions.nbmembre_action)}, [actions.nbmembre_action] )

  const [etat_action, setEtatToUpdate] = useState(actions.etat_action)
  const [successful,setSuccessful] = useState(false);
 


  useEffect(() => {
    fetchAction(actionId)
    // const fetchData = async () => {
    //   const result = await fetchactionById(actionId)
    //   setaction(result)
    //   console.log("result: ",result);
    //   debugger;
    // }
    // fetchData()
  }, [actionId])

  


  


  const handleUpdate = (e) => {
    e.preventDefault();
    setSuccessful(false);
    // Addform.current.validateAll();
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
        "etat_action": etat_action
    }
    // console.log("dataaaaaaaaaa", data)
    // debugger
    formData.append('data', JSON.stringify(data));
    formData.append('photo', photoToUpdate);

  //   for(var pair of formData.entries()) {
  //     console.log(pair[0]+ ', '+ pair[1]);
  //  }
    
  //   debugger
    // console.log("object", formData.entries()[0][1],formData.entries()[1])
    // debugger
    dispatch(
        editAction(formData,actions.id_Action, data)
      )
      .then(() => {
         
        setSuccessful(true);
        
      })
      .catch(() => {
        setSuccessful(false)
      });
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
                    <h4 className="card-title">L'action {nomToUpdate}</h4>
                    <p className="card-category">{lieuToUpdate}</p>
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
                    <form ref={Addform}>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label >Nom de l'action</label>
                            <input type="text" className="form-control" value={nomToUpdate}
                                                onChange={(e) => setNomToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label >Lieu</label>
                            <input type="text" className="form-control" value={lieuToUpdate}
                                                onChange={(e) => setLieuToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label >Date début de l'action</label>
                            <input type="text" className="form-control" value={dateDToUpdate}
                                                onChange={(e) => setDateDToUpdate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Date fin de l'action</label>
                            <input type="text" className="form-control" value={dateFToUpdate}
                                                onChange={(e) => setDateFToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label >Date début d'inscription</label>
                            <input type="text" className="form-control" value={dateDInsToUpdate} 
                            onChange={(e) => setDateTDInsoUpdate(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label >Date fin d'inscription</label>
                            <input type="text" className="form-control" value={dateFInsToUpdate}
                            onChange={(e) => setDateFInsToUpdate(e.target.value)} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label >Nombre des membres </label>
                            <input type="text" className="form-control" value={nbMToUpdate}
                            onChange={(e) => setNbMToUpdate(e.target.value)} />
                          </div>
                        </div>
                        
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Description</label>
                            <div className="form-group">
                              
                              <input className="form-control"  Value={descriptionToUpdate} onChange={(e) => setDescriptionToUpdate(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label>Photo</label>
                            <div className="form-group">
                            </div>
                            <input  type="file" name="file" onChange={(e) => setPhotoToUpdate(e.target.files[0])} />
                        </div>
                      </div>
                      <button type="submit" onClick={handleUpdate} className="btn btn-round ">Modifier</button>
                      <div className="clearfix" />
                    </form>
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
const mapStateToProps = state => {
    return {
      actions : state.rubriqueData.data
      
      
    }
    // console.log("state", state);
  
}

  
const mapDispatchToProps = dispatch => {
    return {
        fetchAction : (actionId) => dispatch(fetchActionById(actionId)), 
    }
};
export default connect(mapStateToProps , mapDispatchToProps)(ActionDetails);