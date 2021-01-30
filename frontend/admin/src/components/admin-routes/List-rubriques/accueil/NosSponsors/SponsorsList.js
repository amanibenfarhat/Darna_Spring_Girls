import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchSponsors } from '../../../../../actions/rubriques.actions'
import Sponsor from './Sponsor'

function SponsorsList({sponsors, fetchSponsors}){
 
  useEffect(() => {
    fetchSponsors()
    console.log("liste", sponsors);
  }, [])
  
  const data = Array.from(sponsors);

  

  
    return(

        <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Intitulé Sponsor</th>
                        <th>Logo</th>
                        {/* <th>Path Logo</th> */}
                        <th>Modifier</th>
                        <th>Supprimer</th>
                        
                      </tr></thead>
                    <tbody>
                     
                     {
                                  
                        data && data.map( (sponsor) => {
                        return(
                            <Sponsor 
                              key={sponsor.id_Sponsor} 
                              sponsor={sponsor}
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
    sponsors : state.rubriqueData.data
    
  }
  // console.log("state", state);

};

const mapDispatchToProps = dispatch => {
  return {
    fetchSponsors : () => dispatch(fetchSponsors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsList);

