import React from "react";
import './Header.css';

class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <h3 className="header">
                <span className="header__title">My Todos</span>
            </h3>
        )
    }
}
export default Header