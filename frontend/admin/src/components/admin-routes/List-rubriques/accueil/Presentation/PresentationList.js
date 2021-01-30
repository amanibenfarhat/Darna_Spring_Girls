import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import history from 'react-dom'
import { fetchPresentation } from '../../../../../actions/rubriques.actions'
import Presentation from './Presentation'

function PresentationList({presentation, fetchPresentation}){
 
  useEffect(() => {
    fetchPresentation()
    console.log("liste", presentation);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        presentation && presentation.map( (presentation) => {
                        return(
                            <Presentation 
                              key={presentation.idPresentation} 
                              presentation={presentation}
                              />
                        )
                      
                        }) } 
                    </tbody>
                  </table>
                </div>
        </div>
    )
  }
   


const mapStateToProps = state => {
  return {
    presentation : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchPresentation : () => dispatch(fetchPresentation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationList);

