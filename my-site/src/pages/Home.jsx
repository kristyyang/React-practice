import React, { Component } from "react";
// import Navbar from '../components/Navbar.jsx';
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
  DropdownItem
} from "reactstrap";

class Home extends Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Cutie Kristy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/kristyyang">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <h2>Welcome</h2>
        <p>
          Let's face it: We, the internet-using public, are constantly bombarded
          with prompts to sign up for and subscribe to all sorts of email
          communications. So as a brand, when someone takes the time to sift
          through all the chaos in order to intentionally sign up for your email
          communications, it's a big deal.
        </p>
        <p>
          {" "}
          In order to acknowledge how grateful they are to the folks who
          actually take the time to subscribe, Kate Spade uses a simple -- but
          effective -- tactic with their welcome emails: They say "Thank You" in
          big, bold lettering. And by placing that "Thank You" on an envelope,
          Kate Spade recreates the feeling of receiving an actual thank-you
          letter in the mail. (The 15% off discount code doesn't hurt either.)
        </p>
      </div>
    );
  }
}

export default Home;
