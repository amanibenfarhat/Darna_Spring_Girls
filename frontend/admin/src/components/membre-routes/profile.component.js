import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <h2><strong>Mon profile</strong></h2>
        <h3><strong>Mes informations</strong></h3>
        <p>
          <strong>Nom:</strong> {currentUser.nom}
        </p>
        <p>
          <strong>Prénom:</strong> {currentUser.prenom}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Photo:</strong> 
        </p>
        <p>
          <strong>Date de naissance:</strong> {currentUser.dateNaissance}
        </p>
        <p>
          <strong>Fonction:</strong> {currentUser.fonction}
        </p>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authReducer;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
