import React , { useState,useRef, useEffect }from "react";
import { useParams} from "react-router-dom"
// import {  Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
// import Input from "react-validation/build/input"
import {fetchLienById, fetchDocByLienId}  from '../../../../actions/rubriques.actions'




function LienDetails({liens, fetchLien, documents, fetchDoc}) {


  const {message} = useSelector(state => state.messageReducer)
  const dispatch = useDispatch()
  const { lienId } = useParams()
  
  const Addform = useRef();

 
 


  useEffect(() => {
    fetchLien(lienId)
    // const fetchData = async () => {
    //   const result = await fetchactionById(actionId)
    //   setaction(result)
    //   console.log("result: ",result);
    //   debugger;
    // }
    // fetchData()
  }, [lienId])

  useEffect(() => {
    fetchDoc(lienId)

  }, [lienId])
  
  const [titleToUpdate, setTitleToUpdate] = useState(liens.titre_liendoc)
  useEffect(() => { setTitleToUpdate(liens.titre_liendoc)}, [liens.titre_liendoc] )

  
  const [successful,setSuccessful] = useState(false);

  


  


  const handleUpdate = (e) => {
  //   e.preventDefault();
  //   setSuccessful(false);
  //   // Addform.current.validateAll();
  //   let formData = new FormData()
  //   let data = {
  //       "nom_action": nomToUpdate,
  //       "description_action": descriptionToUpdate,
  //       "lieu_action" : lieuToUpdate,
  //       "datedebut_action" : dateDToUpdate,
  //       "datefin_action" : dateFToUpdate,
  //       "datedebut_inscrit" : dateDInsToUpdate,
  //       "datefin_inscrit" : dateFInsToUpdate,
  //       "nbmembre_action" : nbMToUpdate,
  //       "etat_action": etat_action
  //   }
  //   // console.log("dataaaaaaaaaa", data)
  //   // debugger
  //   formData.append('data', JSON.stringify(data));
  //   formData.append('photo', photoToUpdate);

  // //   for(var pair of formData.entries()) {
  // //     console.log(pair[0]+ ', '+ pair[1]);
  // //  }
    
  // //   debugger
  //   // console.log("object", formData.entries()[0][1],formData.entries()[1])
  //   // debugger
  //   dispatch(
  //       editAction(formData,actions.id_Action, data)
  //     )
  //     .then(() => {
         
  //       setSuccessful(true);
        
  //     })
  //     .catch(() => {
  //       setSuccessful(false)
  //     });
//   console.log("ssss",successful)
}

  
  
  


  return (
    <div className="wrapper ">
      {/* {liens.idliendoc}
      {liens.titre_liendoc} */}
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title">Le lien {titleToUpdate}</h4>
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
                            <label >Titre du lien</label>
                            <input type="text" className="form-control" value={titleToUpdate}
                                                onChange={(e) => setTitleToUpdate(e.target.value)} />
                          </div>
                        </div>
                        {
                          documents && documents.map( (document) => {
                            return(
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="tim-typo">
                                    <h4>Nom </h4>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="tim-typo">
                                    <h4>{document.path_doc} </h4>
                                  </div>
                                </div>
                              
                              
                            </div>
                            )
                                    
                                    
                          })
                        }
             

                                      
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
      liens : state.rubriqueData.data,
      documents : state.documentData.data
      
      
    }
    // console.log("state", state);
  
}

  
const mapDispatchToProps = dispatch => {
    return {
        fetchLien : (lienId) => dispatch(fetchLienById(lienId)), 
        fetchDoc : (lienId) => dispatch (fetchDocByLienId(lienId))
    }
};
export default connect(mapStateToProps , mapDispatchToProps)(LienDetails);