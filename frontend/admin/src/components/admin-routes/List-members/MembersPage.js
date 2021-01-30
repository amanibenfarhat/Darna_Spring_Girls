import React,{useState,useEffect}from 'react';
import {  Link } from 'react-router-dom';
import MembersList from "./MembersList"
import './Member.css'

export default function MembersPage() {

    return (
  <div class="wrapper ">
    
  <div className="main-panel">
    
    <div className="content">
        <Link to= {`/create_member`}>
          <i className="material-icons create">person_add</i>
        </Link>
      <div className="container-fluid">
              
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title ">Liste des membres</h4>
                <p className="card-category"> La liste des membres inscrits</p>
              </div>
              <MembersList/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
  </div>
</div>
       
    );
}
