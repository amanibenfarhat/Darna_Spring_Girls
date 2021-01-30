import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchContacts } from '../../../../actions/rubriques.actions'
import Contact from './Contact'

function ContactList({contacts, fetchContacts}){
 
  useEffect(() => {
    fetchContacts()
    console.log("liste", contacts);
  }, [])
  
  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Adresse </th>
                        <th>Email</th>
                        <th>Tél</th>
                        <th>Président</th>
                        <th>Email Président</th>
                        <th>Vice Président</th>
                        <th>Email Vice Président</th>
                        <th>Trésorier</th>
                        <th>Email Trésorie</th>
                        <th>Secrétaire générale </th>
                        <th>Email Secrétaire générale </th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        contacts && contacts.map( (contact) => {
                        return(
                            <Contact 
                              key={contact.id} 
                              contact={contact}
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
    contacts : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts : () => dispatch(fetchContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

