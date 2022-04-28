import React from "react";
import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <footer className="footer">
                <img className="footer__logo" src="assets/kmin-logo.png" alt="KMIN logo" />
            </footer>
        )
    }
}
export default Footer