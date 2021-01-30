import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import ProjetsList from "./ProjetsList"
import '../../List-members/Member.css'

export default function ProjetsPage() {
    
  
    return (
      <>
        <div className="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_projet`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Projets</h4>
                        <p className="card-category"> Les projets En cours et les projets futurs </p>
                      </div>
                      <ProjetsList/>
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
