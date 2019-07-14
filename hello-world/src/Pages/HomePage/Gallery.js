import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
// import { MDBRow, MDBCol, MDBIcon, MDBView, MDBMask, MDBNavbar, MDBNavLink, MDBNavItem, MDBCollapse, MDBCarousel, MDBDropdown, MDBContainer, MDBScrollbar, MDBNavbarNav, MDBAnimation, MDBFormInline, MDBNavbarBrand, MDBDropdownItem, MDBCarouselItem, MDBDropdownMenu} from 'mdbreact';
class Gallery extends Component {



  render() {

      return (
        <MDBContainer className="mt-5">
          <MDBRow center>
            <MDBAnimation type="bounce" infinite>
              <img
                alt=""
                className="img-fluid"
                src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
              />
            </MDBAnimation>
            <br />
          </MDBRow>

          <MDBRow center className="mt-5">
            <h4>&#8659; Scroll down &#8659;</h4>
          </MDBRow>

          <MDBRow className="mb-4" style={{ marginTop: "100vh" }}>
            <MDBCol md="4">
              <MDBAnimation reveal type="bounceInUp">
                <img
                  alt="A view on mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="tada">
                <img
                  alt="Cottage on a lake surrounded by mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <img
                  alt="A boat floating on an ocean"
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="View on mountains from mountain top."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation
                reveal
                type="fadeInUp"
                onAnimationEnd={() =>
                  console.log("The last picture has been revealed")
                }
              >
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
}

export default Gallery;
