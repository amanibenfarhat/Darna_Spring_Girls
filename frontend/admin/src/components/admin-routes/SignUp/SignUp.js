import React, { Component } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import { connect } from "react-redux";
import { register } from "../../../actions/authAction";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est obligatoire !
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vnom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Le nom doit avoir 3 à 20 caractère !
      </div>
    );
  }
};
const vprenom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Le prénom doit avoir 3 à 20 caractère !
      </div>
    );
  }
};
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Cet email est invalide.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFonction = this.onChangeFonction.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      username: "",
      nom:"",
      prenom:"",
      email: "",
      password: "",
      fonction:"",
      dateNaissance: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeNom(e) {
    this.setState({
      nom: e.target.value,
    });
  }
  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeFonction(e) {
    this.setState({
      fonction: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      dateNaissance: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();
    this.props
      .dispatch(
        register(
          this.state.username,
          this.state.nom,
          this.state.prenom,
          this.state.email,
          this.state.password,
          this.state.fonction,
          this.state.dateNaissance
        )
      )
      .then(() => {
        this.setState({
          successful: true,
        });
      })
      .catch(() => {
        this.setState({
          successful: false,
        });
      });
  }

  render() {
    const { message } = this.props;

    return (
      <>
        <div className="content login">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-profile">
                  <div className="card-avatar">
                    <a href="javascript:;">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI1NiAwLTE2MC4zOTggMjU2IDE2MC4zOTggMjU2YzE0MS4zODUgMCAyNTYtMTE0LjYxNSAyNTYtMjU2cy0xMTQuNjE1LTI1Ni0yNTYtMjU2eiIgZmlsbD0iIzIxNjA2ZSIgZGF0YS1vcmlnaW5hbD0iIzI4YWJmYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0wIDI1NmMwIDE0MS4zODUgMTE0LjYxNSAyNTYgMjU2IDI1NnYtNTEyYy0xNDEuMzg1IDAtMjU2IDExNC42MTUtMjU2IDI1NnoiIGZpbGw9IiMxYzcwODIiIGRhdGEtb3JpZ2luYWw9IiMxNGNmZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjU2IDYwLTY1Ljc4OCAxMDUgNjUuNzg4IDEwNWM1Ny45OSAwIDEwNS00Ny4wMSAxMDUtMTA1cy00Ny4wMS0xMDUtMTA1LTEwNXoiIGZpbGw9IiMxZTkyYWIiIGRhdGEtb3JpZ2luYWw9IiMzNzNlOWYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTUxIDE2NWMwIDU3Ljk5IDQ3LjAxIDEwNSAxMDUgMTA1di0yMTBjLTU3Ljk5IDAtMTA1IDQ3LjAxLTEwNSAxMDV6IiBmaWxsPSIjMjQ5ZWI4IiBkYXRhLW9yaWdpbmFsPSIjNjI0MWVhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQyNC42NDkgMzM1LjQ0M2MtMTkuOTMzLTIyLjUyNS00OC42LTM1LjQ0My03OC42NDktMzUuNDQzaC05MGwtNjAgNzYgNjAgNzZjNzAuMzIyIDAgMTM1LjYzNi0zOC4wMSAxNzAuNDU0LTk5LjE5OGw1LjMwNi05LjMyNXoiIGZpbGw9IiMxZTkyYWIiIGRhdGEtb3JpZ2luYWw9IiMzNzNlOWYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTY2IDMwMGMtMzAuMDQ5IDAtNTguNzE2IDEyLjkxOC03OC42NDkgMzUuNDQzbC03LjExIDguMDM1IDUuMzA2IDkuMzI1YzM0LjgxNyA2MS4xODcgMTAwLjEzMSA5OS4xOTcgMTcwLjQ1MyA5OS4xOTd2LTE1MnoiIGZpbGw9IiMyNDllYjgiIGRhdGEtb3JpZ2luYWw9IiM2MjQxZWEiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />{" "}
                    </a>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Créer un compte</h3>
                    <Form
                      onSubmit={this.handleRegister}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      {!this.state.successful && (
                        <div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="username"
                                  placeholder="username"
                                  value={this.state.username}
                                  onChange={this.onChangeUsername}
                                  validations={[required, vusername]}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="nom"
                                  placeholder="nom"
                                  value={this.state.nom}
                                  onChange={this.onChangeNom}
                                  validations={[required, vnom]}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="prenom"
                                  placeholder="Prénom"
                                  value={this.state.prenom}
                                  onChange={this.onChangePrenom}
                                  validations={[required, vprenom]}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  placeholder="email"
                                  value={this.state.email}
                                  onChange={this.onChangeEmail}
                                  validations={[required, email]}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="fonction"
                                  placeholder="Fonction: Employé, étudiant,etc."
                                  value={this.state.date}
                                  onChange={this.onChangeFonction}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="text"
                                  className="form-control"
                                  name="dateNaissance"
                                  placeholder="date de naissance"
                                  value={this.state.dateNaissance}
                                  onChange={this.onChangeDate}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <Input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  placeholder="mot de passe"
                                  value={this.state.password}
                                  onChange={this.onChangePassword}
                                  validations={[required, vpassword]}
                                />
                              </div>
                            </div>
                          </div>
                          {/*<div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <input type="password" className="form-control" placeholder="Retapez le Mot de passe" />
                        </div>
                    </div>
            </div>*/}

                          <button className="btn  btn-round">
                            Créer
                          </button>
                          <p>
                            Vous avez un compte ?{" "}
                            <Link to={`/login`}>Se connecter</Link>
                          </p>
                        </div>
                      )}
                      {message && (
                        <div className="form-group">
                          <div
                            className={
                              this.state.successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {message}
                          </div>
                        </div>
                      )}
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.messageReducer;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
