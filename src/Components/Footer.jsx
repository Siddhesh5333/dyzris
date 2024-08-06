import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div id="contact-us">
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/dzyris/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up to get in touch</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-white'>Our Services</h5>

              <ul className='list-unstyled mb-0' style={{ textAlign: 'left' }}>
                <li>
                  <a href='https://www.facebook.com/dzyris/!' className='text-white' >
                    Dzyris Infotech
                  </a>
                </li>
                <li>
                  <a href='https://www.justdial.com/Mumbai/Dzyris-Frozen-Foods-Pvt-Ltd-Near-Ganesh-Visarjan-Ghat-Vasai-East/022PXX22-XX22-181005112023-A5V7_BZDET' className='text-white'>
                    Dzyris Frozen Foods
                  </a>
                </li>
                <li>
                  <a href='https://www.tofler.in/dzyris-pharmaceuticals-private-limited/company/U51909MH2021PTC360043' className='text-white'>
                    Dzyris Pharmaceuticals
                  </a>
                </li>
                <li>
                  <a href='https://firangiburgers.com/' className='text-white'>
                    Firangi Burgers
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-white'>Quick Links</h5>

              <ul className='list-unstyled mb-0' style={{ textAlign: 'left' }}>
                <li>
                  <a href='#!' className='text-white'>
                    Partner Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Products
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Our Blog
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-white'>Services</h5>

              <ul className='list-unstyled mb-0' style={{ textAlign: 'left' }}>
                <li>
                  <a href='#!' className='text-white'>
                    It Solutins
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Frozen Foods
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Pharmaceuticals
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Burgers & Snacks
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-white fw-bold mb-6'>Contact Us</h6>
              <div className='d-flex flex-column align-items-start'>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Vasai East, Palghar, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                infotechdzyris@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 7864529185
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 8763540925
              </p>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </MDBFooter>
    </div>
  );
}