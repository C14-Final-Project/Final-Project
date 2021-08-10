import * as React from 'react';




function Footer() {
  return (
    <>


      <footer style={{ margin: 0 }} className="row bg-black text-center text-lg-start ">
        {/* <!-- Grid container --> */}
        <div className="container">
          {/* <!--Grid row--> */}
          <div className="row p-1">
            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-uppercase text-white">™︁<i><b>Performance</b></i> Venues</h5>

              <ul className="list-unstyled mb-1">
                <li>
                  <a href="#!" className="text-white">Book A <i>™︁Performance</i> Venue</a>
                </li>
                            
                <li>
                  <a href="#!" className="text-white"><i>™︁Performance</i> Artist collaborations</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-uppercase  text-white"><i>™︁<b>Performance</b></i> Artists</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Book A <i>™︁Performance</i> Artist</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Merchandise Sales</a>
                </li>
                        
                <li>
                  <a href="#!" className="text-white">Payment</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-uppercase mb-0 text-white">Careers with ™︁<i><b>Performance</b></i></h5>

              <ul className="list-unstyled">
              <li>
                  <a href="#!" className="text-white">Vendors</a>
                </li>  
                <li>
                  <a href="#!" className="text-white">Jobs</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 ">

              <h5 className="text-uppercase text-white mb-0 py-0">Subscribe to the ™︁<i><b>Performance</b></i> newsletter!</h5>
              <button type="submit" className="btn btn-bg-primary btn-block mt-0 py-0">Subscribe</button>
               

              <div className="form-outline form-white ">
                <input type="email" id="form5Example2" className="form-control" placeholder="Email address"/>
              </div>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center border-top text-white ">
          © 2021 ™︁<i><b>Performance</b></i>, LLC. All rights reserved.
          <a className="text-white" href=""></a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>


    </>
  );
}

export default Footer;