import React from 'react';
import {  Link } from 'react-router-dom';
import SponsorsList from "./SponsorsList"
import '../../../List-members/Member.css'

export default function SponsorsPage() {
    
  
    return (
      <>
        <div class="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_sponsor`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Nos Sponsors</h4>
                        <p className="card-category">La liste des sponsors de la rubrique Accueil</p>
                      </div>
                      <SponsorsList/>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </>
       
    );
}
