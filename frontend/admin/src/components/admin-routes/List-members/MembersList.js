import React, {useEffect} from 'react'
import Member from './Member'
import {connect } from 'react-redux'
import history from 'react-dom'
import { fetchMembers } from '../../../actions/member.actions'

function MembersList({members, fetchMembers}){
 
   const data = Array.from(members);
 
  useEffect(() => {
    fetchMembers()
    console.log("liste", members);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Date de naissance</th>
                        <th>Activer/Désactiver</th>
                        <th>Renouvellement</th>
                        <th>Détails</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        data && data.map( (member) => {
                          if (member.username !== "admin"){
                        return(
                            <Member 
                              key={member.id} 
                              member={member}
                              />
                        )
                      }
                      
                        }) } 
                    </tbody>
                  </table>
                </div>
              </div>
    )
  }
   


const mapStateToProps = state => {
  console.log("aaaaaaa",state)
  return {
    members : state.memberData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchMembers : () => dispatch(fetchMembers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);

// export default MembersList;