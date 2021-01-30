import React, {useEffect} from 'react'
import { useParams} from "react-router-dom"

import Participant from './Participant'
import {connect } from 'react-redux'
import history from 'react-dom'
import { fetchMembers } from '../../../../actions/rubriques.actions'

function ParticipantsList({members, fetchMembers}){
 
   const data = Array.from(members);
   const { actionId } = useParams()

  //  useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchMembers(actionId)
  //     //console.log("result: ",result)
  //   }
  //   fetchData()
  // }, [actionId])

  useEffect(() => {
    fetchMembers(actionId)
    // console.log("liste", members);
  }, [actionId])
  
  


  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>Nom de l'action</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        {/* <th>Valider</th> */}
                        
                        
                      </tr>
                    </thead>
                    <tbody>
                     
                     {
                                  
                        data && data.map( (member) => {
                        return(
                            <Participant 
                              key={actionId} 
                              member={member}
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
  // console.log("aaaaaaa",state)
  return {
    members : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchMembers : (actionId) => dispatch(fetchMembers(actionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList);

// export default MembersList;