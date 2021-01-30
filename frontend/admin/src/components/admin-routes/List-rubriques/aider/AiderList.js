import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchHelps } from '../../../../actions/rubriques.actions'
import Aider from './Aider'

function AiderList({helps, fetchHelps}){
 
  useEffect(() => {
    fetchHelps()
    console.log("liste", helps);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Pourquoi nous aider </th>
                        <th>Comment nous aider</th>
                        <th>Volantariat</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        helps && helps.map( (help) => {
                        return(
                            <Aider 
                              key={help.id} 
                              help={help}
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
    helps : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchHelps : () => dispatch(fetchHelps())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AiderList);

