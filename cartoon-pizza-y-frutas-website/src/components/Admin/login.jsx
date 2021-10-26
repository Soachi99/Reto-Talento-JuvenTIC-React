import React from "react";
import { Button } from "react-bootstrap";
import { Login, Logout } from "../../js/login";
import "./login.css";

class LoginButton extends React.Component {
    render() {

        if (localStorage.getItem('admin_view') == null || localStorage.getItem('admin_view') === false) {
            return (
                <>
                    <Button
                        variant="dark"
                        id="login-button"
                        className="fs-bold"
                        onClick={() => Login()}
                    >
                        <b> Login </b>
                    </Button>
                </>
            );
        }
        else {
            return (
                <>
                    <Button
                        variant="dark"
                        id="login-button"
                        className="fs-bold"
                        onClick={() => Logout()}
                    >
                        <b> Log out </b>
                    </Button>
                </>
            );
        }
    }
}

export default LoginButton;