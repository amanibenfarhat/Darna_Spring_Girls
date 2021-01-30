import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import PresentationList from "./PresentationList"
import '../../../List-members/Member.css'

export default function PresentationPage() {
    
  
    return (
      <>
        <div className="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_presentation`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Présentation</h4>
                        <p className="card-category"> La description de la rubrique Présentation</p>
                      </div>
                      <PresentationList/>
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
