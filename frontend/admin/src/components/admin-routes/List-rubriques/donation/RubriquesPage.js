import React,{useState,useEffect}from 'react';
import {  Link } from 'react-router-dom';
import RubriquesList from "./RubriquesList"
import './Member.css'

export default function MembersPage() {

    return (
  <div class="wrapper ">
    
  <div className="main-panel">
    
    <div className="content">
        <Link to= {`/create_rubrique`}>
          <i className="material-icons create">content_paste<b>+</b></i>
        </Link>
      <div className="container-fluid">
              
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title ">Liste des rubriques</h4>
                <p className="card-category"> La liste des rubriques</p>
              </div>
              <RubriquesList/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
  </div>
</div>
       
    );
}
