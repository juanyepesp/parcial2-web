import React from "react";
import { FormattedMessage } from "react-intl";


function Login() {
    // This login window has to receive password and username, and authenticate connecting to this API
    // localhost:3000/login
    // This API will return a token, that will be used to authenticate the user in the app

    const usernameRef = React.useRef();
    const passwordRef = React.useRef();

    const [token, setToken] = React.useState(null);

    function handleSubmit (e) {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const jsonData = {
            "email": username,
            "password": password
        };

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => setToken(data.token));

        console.log(jsonData);
        console.log(token);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <img src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="img-fluid" alt="Login" width={'500px'}/>
                </div>
                <div className="col-sm">
                    <h1><FormattedMessage id="login.title" /></h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username"><FormattedMessage id="login.username" /></label>
                            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" ref = {usernameRef}/>
                            <small id="usernameHelp" className="form-text text-muted"><FormattedMessage id="login.usernameHelp" /></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><FormattedMessage id="login.password" /></label>
                            <input type="password" className="form-control" id="password" placeholder="Password" ref = {passwordRef} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}><FormattedMessage id="login.submit" /></button>
                    </form>
                </div>
            </div>
        </div>
    );


    
}

export default Login;