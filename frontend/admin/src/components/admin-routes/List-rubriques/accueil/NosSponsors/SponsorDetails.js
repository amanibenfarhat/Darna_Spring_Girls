import React , { useState,useRef, useEffect }from "react";
import { useParams} from "react-router-dom"
// import {  Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
import Input from "react-validation/build/input"
import {fetchSponsorById, editSponsor}  from '../../../../../actions/rubriques.actions'




function ActionDetails({sponsors, fetchSponsor}) {


  const {message} = useSelector(state => state.messageReducer)
  const dispatch = useDispatch()
  const { sponsorId } = useParams()
  const Addform = useRef();

  const [intituleToUpdate, setIntituleToUpdate] = useState(sponsors.intitule_sponsor)
  useEffect(() => { setIntituleToUpdate(sponsors.intitule_sponsor)}, [sponsors.intitule_sponsor] )

  

  const [photoToUpdate, setPhotoToUpdate] = useState(sponsors.path_logo)
  useEffect(() => { setPhotoToUpdate(sponsors.path_logo)}, [sponsors.path_logo] )

  // const [photo, setPhoto] = useState(sponsors.path_logo)
  // useEffect(() => { setPhoto(sponsors.path_logo)}, [sponsors.path_logo] )




  
  const [successful,setSuccessful] = useState(false);
 


  useEffect(() => {
    fetchSponsor(sponsorId)
    // const fetchData = async () => {
    //   const result = await fetchSponsorById(sponsorId)
    //   setaction(result)
    //   console.log("result: ",result);
    //   debugger;
    // }
    // fetchData()
  }, [sponsorId])

  const photoHandler = (e) => {
    setPhotoToUpdate(e.target.files[0])
    // const reader = new FileReader();
    // reader.onload = () =>{
    //   if (reader.readyState === 2){
    //     setPhoto(reader.result)
    //   }
    // }
    // reader.readAsDataURL(e.target.files[0])
  }
  


  


  const handleUpdate = (e) => {
    e.preventDefault();
        setSuccessful(false);
        let formData = new FormData()
        let data = {
          "intitule_sponsor": intituleToUpdate,
        }
        formData.append('data', JSON.stringify(data));
        formData.append('logo', photoToUpdate);

        // form.current.validateAll();
            dispatch(
                editSponsor(formData, data, sponsorId)
              )
              .then(() => {
                // console.log("message",message)
                // debugger
              })
              .catch(() => {
                setSuccessful(false)
              });
     
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
                    <h4 className="card-title">Le Sponsor {intituleToUpdate}</h4>
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
                            <label >Intitulé du sponsor</label>
                            <input type="text" className="form-control" value={intituleToUpdate}
                                                onChange={(e) => setIntituleToUpdate(e.target.value)} />
                          </div>
                        </div>

                        <div className="col-md-4">
                              <div className="form-group">
                                </div>
                                <div className="card-image ">
                                <img
                                  alt="..."
                                  className="image"
                                  src={`C:/wamp64/www/darna_app/sponsors/${sponsors.path_logo}`}

                                />
                                {/* <Input  type="file" name="file" onChange={photoHandler} aria-label="file" /> */}
                                <input type="file" onChange={(e) => {setPhotoToUpdate(e.target.files[0])}} />
                                {/* <img src={logo} />  */}

                                </div>
                                  
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
      sponsors : state.rubriqueData.data
      
      
    }
    // console.log("state", state);
  
}

  
const mapDispatchToProps = dispatch => {
    return {
        fetchSponsor : (sponsorId) => dispatch(fetchSponsorById(sponsorId)), 
    }
};
export default connect(mapStateToProps , mapDispatchToProps)(ActionDetails);