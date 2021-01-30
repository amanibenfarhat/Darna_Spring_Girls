
import React ,{useEffect} from "react";



import Sponsor from './Sponsor'
import {connect } from 'react-redux'

import {   } from '../../actions/Sponsor.action'

import { fetchSponsors } from '../../actions/Sponsor.action'


function SponsorPage({sponsors, fetchSponsors}){
    
       
  useEffect(() => {
    fetchSponsors()
    // console.log("liste", objectifs);
  }, [])


    return(
      <section id="sponsor" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Nos Sponsor</h2>
          
        </div>
    <div class="containerClient">
      <div class="our-clients">
      <ul>
             
      {sponsors && sponsors.map( (sponsor) => {
                                   
                                   return(
                                   <Sponsor 
                                       key={sponsor.id_Sponsor} 
                                       sponsor={sponsor} />
                                       )
                                                                           
                                   }) 
                                   } 

       </ul>
      </div>
    </div>
    </div>
    </section>

        
           

      

          

          

        
    )
}


const mapStateToProps = state => {


    return {
      sponsors : state.sponsorData.data
      
    }
    
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchSponsors : () => dispatch(fetchSponsors())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SponsorPage);
  