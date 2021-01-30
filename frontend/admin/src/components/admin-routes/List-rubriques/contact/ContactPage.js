import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import ContactList from "./ContactList"
import '../../List-members/Member.css'

export default function ContactPage() {
    
  
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
                        <h4 className="card-title ">Contact</h4>
                        <p className="card-category"> Les informations de la rubrique contact </p>
                      </div>
                      <ContactList/>
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
