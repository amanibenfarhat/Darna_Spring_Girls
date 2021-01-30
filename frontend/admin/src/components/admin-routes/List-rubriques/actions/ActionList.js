import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchActions } from '../../../../actions/rubriques.actions'
import Action from './Action'

function ActionList({actions, fetchActions}){

  const data = Array.from(actions);

 
  useEffect(() => {
    fetchActions()
    console.log("liste", actions);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Nom d'action </th>
                        <th>Photo</th>
                        <th>Lieu</th>
                        <th>Publication</th>
                        <th>Détails</th>
                        <th>Participants</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                      data && data.map( (action) => {
                        return(
                            <Action 
                              key={action.id} 
                              action={action}
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
    actions : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchActions : () => dispatch(fetchActions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);

