import React, { useState } from 'react'
import {  Link } from 'react-router-dom';


import { addHelp } from '../../../../actions/rubriques.actions';
import {connect} from 'react-redux';

function CreateAider(help) {

    
    const [comment, setComment] = useState("")
    const [pk, setpk] = useState("")
    const [volontariat, setvolontariat] = useState("")
    

    const handleAddHelp = (e) => {
        e.preventDefault();
        help.onAdd(
          {
            comment_aider: comment,
                pk_aider : pk,
                volontariat : volontariat

            
        })
      
    }


    return (
        <div className="wrapper ">
    
            <div className="main-panel">
            
                <div className="content">
                   
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Ajouter une aide</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                <div className="row">
                                <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" placeholder="Comment" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} />
                                        </div>
                                  
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" placeholder="Pourquoi" className="form-control" value={pk} onChange={(e) => setpk(e.target.value)} />
                                        </div>
                                  
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" placeholder="Volontariat" className="form-control" value={volontariat} onChange={(e) => setvolontariat(e.target.value)} />
                                        </div>
                                  
                                    </div>
                                    
                                </div>
                                
                                <button onClick={handleAddHelp} className="btn btn-primary pull-right">Ajouter</button>
                                <div className="clearfix" />
                                </form>
                            </div>  
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>


    )
}


  const  mapDispatchToProps = (dispatch) => {
    return {
      onAdd: (help) => dispatch(addHelp(help))
      
    };
  };
    


export default connect("", mapDispatchToProps)(CreateAider);