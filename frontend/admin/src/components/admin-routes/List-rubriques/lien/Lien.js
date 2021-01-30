import React, { useState } from  'react'
import {Link, BrowserRouter} from 'react-router-dom'
import '../../List-members/Member.css'
import {connect } from 'react-redux'
import {  deleteLien } from '../../../../actions/rubriques.actions'




function Lien(props){

    const [updateMode, setUpdateMode] = useState(false)
    // const [titleToUpdate, settitleToUpdate] = useState(props.action.nom_action)
    


    
   
    
    const handleDelete = (id) => {
        props.onDelete(id)     
    }

    

    return(
       
       
            <>
        
            
                <tr>
                        <td>
                            {props.lien.idliendoc}
                        </td>
                        <td>
                            {props.lien.titre_liendoc}
                        </td>
                        
                        
                                        
                        
                        <td>
                            <Link to= {`/rubriques_lien/${props.lien.idliendoc}`}>
                                <i className="material-icons button">read_more</i>
                            </Link>
                        </td>
                        
                        
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.lien.idliendoc)} >delete</i>
                        </td>
                        
                </tr>
            </>
            

                     
    )


}

// const mapStateToProps = state => {
//     return {
//       actions : state.actions
      
//     }
//     console.log("state", state);
  
//   };
  
  const mapDispatchToProps = dispatch => {
    return {
        onDelete : (id) => dispatch(deleteLien(id)),

    }
  };
  
export default connect("",mapDispatchToProps)(Lien);