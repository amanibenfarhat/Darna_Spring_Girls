import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchProjets } from '../../../../actions/rubriques.actions'
import Projet from './Projet'

function ProjetsList({projets, fetchProjets}){
 
  useEffect(() => {
    fetchProjets()
    console.log("liste", projets);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Type de projet</th>
                        <th>Description</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        projets && projets.map( (projet) => {
                        return(
                            <Projet 
                              key={projet.id_Publication} 
                              projet={projet}
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
    projets : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjets : () => dispatch(fetchProjets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjetsList);

