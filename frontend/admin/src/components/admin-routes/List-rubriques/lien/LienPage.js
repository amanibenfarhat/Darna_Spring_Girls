import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import LienList from "./LienList"
import '../../List-members/Member.css'

export default function LienPage() {
    
  
    return (
      <>
        <div className="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_document`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Lien/Document</h4>
                        <p className="card-category"> Les informations de la rubrique Lien/Document </p>
                      </div>
                      <LienList/>
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
