import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import Topbar from "../topbar";
import "./login.css";

function LoginButton () {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();   
    
    const redirect = () => {
        window.location.href = "/admin";
        loginWithRedirect();
    }

    if(!isAuthenticated) {
        return(
            <>
                <Button
                    variant="dark"
                    id="login-button"
                    className="fs-bold"                    
                    onClick={redirect}
                >
                    <b> Login </b>
                </Button>
            </> 
        );
    } else {
        return(
            <>             
            <Router>
                <Route exact path="/">
                <Redirect to="/admin" />     
                </Route>
                <Button
                    variant="dark"
                    id="login-button"
                    className="fs-bold"
                    onClick={() => logout()}
                >
                    <b> LogOut </b>
                </Button>           
            </Router>                     
            </> 
        );

    }
}

export default LoginButton;


