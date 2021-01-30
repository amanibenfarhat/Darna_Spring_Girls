import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchObjectifs } from '../../../../../actions/rubriques.actions'
import Objectif from './Objectif'

function ObjectifsList({objectifs, fetchObjectifs}){
 
  useEffect(() => {
    fetchObjectifs()
    console.log("liste", objectifs);
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
                                  
                        objectifs && objectifs.map( (objectif) => {
                        return(
                            <Objectif 
                              key={objectif.idobjectif} 
                              objectif={objectif}
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
    objectifs : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchObjectifs : () => dispatch(fetchObjectifs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectifsList);

