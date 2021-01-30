import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import history from 'react-dom'
import { fetchRubriques } from '../../../actions/rubriques.actions'
import Rubrique from './Rubrique'

function RubriquesList({rubriques, fetchRubriques}){
 
  useEffect(() => {
    fetchRubriques()
    console.log("liste", rubriques);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                      rubriques && rubriques.map( (rubrique) => {
                        return(
                            <Rubrique 
                              key={rubrique.id} 
                              rubrique={rubrique}
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
    rubriques : state.rubriques
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchRubriques : () => dispatch(fetchRubriques())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RubriquesList);

