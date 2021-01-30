import React,{useState,useEffect}from 'react';
import {  Link } from 'react-router-dom';
import '../../List-members/Member.css'

export default function RubriquesAccueil() {

    return (
      <div class="wrapper ">
    
      <div className="main-panel">
        
        <div className="content">
            {/* <Link to= {`/create_rubrique`}>
              <i className="material-icons create">content_paste<b>+</b></i>
            </Link> */}
          <div className="container-fluid">
                  
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title ">Liste des Rubriques</h4>
                    <p className="card-category"> La liste des rubriques de l'Accueil</p>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <tr>
                            <th>ID</th>
                            <th>Titre</th>
                            <th>Détails</th>
                            
                            
                          </tr></thead>
                        <tbody>
                       
                          <tr>
                            <td>1</td>
                            <td> Présentaion </td>
                            <td>
                              <Link to= {`/presentation`}>
                                  <i className="material-icons button">read_more</i>
                              </Link>
                            </td>
                            
                          </tr>
                          
                          <tr>
                            <td>2</td>
                            <td>Objectifs</td>
                            <td>
                              <Link to= {`/objectifs`}>
                                  <i className="material-icons button">read_more</i>
                              </Link>
                            </td>
                           
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Nos sponsors</td>
                            <td>
                              <Link to= {`/nos_sponsors`}>
                                  <i className="material-icons button">read_more</i>
                              </Link>
                            </td>
                           
                          </tr>
                          
                          
                         
                        </tbody>
                      </table>
                    </div>
            </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        
      </div>
    </div>
       
    );
}
