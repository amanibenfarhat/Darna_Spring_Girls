import React from 'react';
import {  Link } from 'react-router-dom';
import ObjectifsList from "./ObjectifsList"
import '../../../List-members/Member.css'

export default function PresentationPage() {
    
  
    return (
      <>
        <div class="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_objectif`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Objectifs</h4>
                        <p className="card-category">Les objectifs de la rubrique Accueil</p>
                      </div>
                      <ObjectifsList/>
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
