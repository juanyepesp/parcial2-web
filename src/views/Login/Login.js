import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../shared/helpers";
import "./Login.css";

function Login() {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const jsonData = {
            "email": username,
            "password": password
        };

        postAuth(jsonData).then(data => {
            if (data.rol === 'Administrador') {
                navigate("/home-admin");
            }
            else if (data.rol === 'Invitado' || data.rol === 'Usuario' || data.rol === 'Mantenimiento'){
                navigate("/home");
            }
        });
    }

    return (
        <div className="container" id = "login-container">
            <div className="row">
                <div className="col-sm" >
                    <img src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="img-fluid" alt="Login" width={'700px'}/>
                </div>
                <div className="col-sm" id = "home1">
                    <div className="title-login">
                        <h1><FormattedMessage id="login.title" /></h1>
                    </div>
                    <div className="form-login">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username"><FormattedMessage id="login.username" /></label>
                                <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" ref = {usernameRef}/>
                                <small id="usernameHelp" className="form-text text-muted"><FormattedMessage id="login.usernameHelp" /></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><FormattedMessage id="login.password" /></label>
                                <input type="password" className="form-control" id="password" ref = {passwordRef} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit} id='button-submit'><FormattedMessage id="login.submit" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Login;