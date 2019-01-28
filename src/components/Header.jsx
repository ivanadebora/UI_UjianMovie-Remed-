import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';



class HeaderMovie extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar style={{color: 'white', backgroundColor:'#9da7b7'}} light expand="md">
                    <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/movie"><NavLink>Manage Movies</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/category"><NavLink>Manage Categories</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/connect"><NavLink >Connect Movie & Category</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            );}
}

   
export default HeaderMovie;
