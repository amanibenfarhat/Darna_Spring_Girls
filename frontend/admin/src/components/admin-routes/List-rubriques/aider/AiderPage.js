import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import AiderList from "./AiderList"
import '../../List-members/Member.css'

export default function AiderPage() {
    
  
    return (
      <>
        <div className="wrapper ">
          
          <div className="main-panel">

            <div className="content">
            <Link to= {`/create_aider`}>
              <i className="material-icons create">add</i>
            </Link>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title ">Nous aider</h4>
                        <p className="card-category"> La rubrique nous aider </p>
                      </div>
                      <AiderList/>
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
