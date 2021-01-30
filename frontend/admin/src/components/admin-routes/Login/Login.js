import { React, Component } from "react";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { connect } from "react-redux";
import { login } from "../../../actions/authAction";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.form.validateAll();
    const { dispatch, history } = this.props;
    dispatch(login(this.state.username, this.state.password))
      .then(() => {
        // history.push("/members");
        window.location.reload();
      });
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/members" />;
    }

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
                    <h3 className="card-title">Se connecter</h3>
                    <Form
                      onSubmit={this.handleLogin}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <Input
                              aria-label="username"
                              type="text"
                              className="form-control"
                              name="username"
                              placeholder="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[required]}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <Input
                              aria-label="password"
                              type="password"
                              className="form-control"
                              placeholder="mot de passe"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required]}
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        data-testid="submit"
                        type="submit"
                        className="btn  btn-round"
                      >
                        Se connecter
                      </button>
                      <p>
                        Vous n'avez pas de compte ?{" "}
                        <Link to={`/signup`}>Créer un</Link>
                      </p>
                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
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
  const { isLoggedIn } = state.authReducer;
  const { message } = state.messageReducer;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
