import React, { Component } from "react";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBIcon, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBNavbarNav, MDBNavbarBrand, MDBDropdownMenu, MDBDropdownItem, MDBNavbarToggler, MDBDropdownToggle} from 'mdbreact';
import Routes from "./Routes";

class App extends Component {
  state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

closeCollapse = collapseID => () => {
  window.scrollTo(0, 0);
  this.state.collapseID === collapseID && this.setState({ collapseID: "" });
};

render() {
  const overlay = (
  <div
    id="sidenav-overlay"
    style={{ backgroundColor: "transparent" }}
    onClick={this.toggleCollapse("mainNavbarCollapse")}
  />
);

const { collapseID } = this.state;
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <MDBNavbar color="secondary-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Cây Bàng</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle  nav caret>
                  <div className="d-none d-md-inline">MDBDropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default"right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!"><MDBIcon brand icon="twitter" /></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!"><MDBIcon brand icon="google-plus" /></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </header>
      <main className="scrollbar">
  <Routes />
</main>

    </div>
    </Router>
  );
}
}

export default App;
