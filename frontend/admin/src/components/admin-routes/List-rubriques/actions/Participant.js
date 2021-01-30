import React, { useState } from  'react'
import {Link, BrowserRouter} from 'react-router-dom'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
// import { editMember } from '../../../../actions/rubriques.actions'




function Participant(props){

    
    

    // console.log("prrrrrrrrrrrrrops", props.member.user.nom)
    // debugger

    


    
    const handleActivate = () => {
      
    //    props.onUpdate(
    //     {
    //         id: props.member.id,
    //         nom: nomToUpdate,
    //         pnom: pnomToUpdate,
    //         email:  emailToUpdate ,
    //         date: dateToUpdate,
    //         enabled: true
    //     }
    //    )
        
    }
    const handleBlock = () => {
        // props.onUpdate(
        //     {
        //         id: props.member.id,
        //         nom: nomToUpdate,
        //         pnom: pnomToUpdate,
        //         email:  emailToUpdate ,
        //         date: dateToUpdate,
        //         enabled: false
        //     })
        
    }
   
    

    return(
        <>
       
            
                <tr>

                        <td>
                            
                            {props && props.member && props.member.action && props.member.action.nom_action}
                        </td>
                        <td>
                            
                            {props && props.member && props.member.action && props.member.user.nom}
                        </td>
                        <td>
                            
                            {props && props.member && props.member.action && props.member.user.prenom}
                        </td>
                        
                        <td>
                            
                            {props && props.member && props.member.action && props.member.user.email}
                        </td>
                       
                        
                        {/* <td>
                            { props.member.enabled ? (
                                <i className="material-icons button" onClick={handleBlock} >block</i>
                                ) : (
                                <i className="material-icons button" onClick={handleActivate} >checked</i>
                                )}
                           
                        </td> */}
                      
                        
                        
                </tr>
            </>
         
                     
    )


}

// const mapStateToProps = state => {
//     return {
//       members : state.members
      
//     }
//     console.log("state", state);
  
//   };
  
  const mapDispatchToProps = dispatch => {
    return {
        // onUpdate : (member) => dispatch(editMember(member))
        
    }
  };
  
export default connect("",mapDispatchToProps)(Participant);