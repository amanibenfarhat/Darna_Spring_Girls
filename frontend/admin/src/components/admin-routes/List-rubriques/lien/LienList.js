import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchLiens } from '../../../../actions/rubriques.actions'
import Lien from './Lien'

function LienList({liens, fetchLiens}){

  const data = Array.from(liens);

 
  useEffect(() => {
    fetchLiens()
    console.log("liste", liens);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Titre </th>
                        <th>Détails</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                      data && data.map( (lien) => {
                        return(
                            <Lien 
                              key={lien.idliendoc} 
                              lien={lien}
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
    liens : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchLiens : () => dispatch(fetchLiens())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LienList);

