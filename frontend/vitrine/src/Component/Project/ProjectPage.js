
import React ,{useEffect  } from "react";

import {connect } from 'react-redux'


import { fetchProjects } from '../../actions/Project.action'

import Project from "./Project";


function ProjectPage({projects,fetchProjects}) {
    
  useEffect(() => {
    fetchProjects()
   
  }, [])

  return (

    <section id="project" class="portfolio section-bg">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="section-title">
        <h2>Nos Projects</h2>
        <p>Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
            
              <li data-filter=".filter-card">Encours</li>
              <li data-filter=".filter-web">Futur</li>
          </ul>
          
        </div>
      </div>

      <div class="row portfolio-container">

        
        {
                                  
                                  projects && projects.map( (project) => {
                                   
                                    return(
                                      
                                      <Project 
                                        key={project.id_projet} 
                                        project={project} />
                                        
                                    )
                                    
                                                    
                                 }) 
                                } 



       
      </div>

    </div>
  </section>
  );
}


const mapStateToProps = state => {
    return {
      projects : state.projectData.data
      
    }
    
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchProjects : () => dispatch(fetchProjects())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
  