import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class TopNavbar extends Component {

  state = { isOpen: false };

  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const postLink = (
      <NavItem>
        <NavLink tag={Link} to="/posts">Posts</NavLink>
      </NavItem>
    );

    // this is utilizing fragments
    const authLinks = (
      <ul className="navbar-nav">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{ width: 25, marginRight: 5 }}
            />
            {user.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={ this.onLogout }>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <NavItem>
          <NavLink tag={Link} to="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">Login</NavLink>
        </NavItem>
      </ul>
    );

    return (
      <Navbar color='dark' dark expand='lg' className="mb-4">
        <NavbarBrand tag={Link} to="/">JS Cheats</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isAuthenticated ? postLink: null}
          </Nav>
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

TopNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(TopNavbar));