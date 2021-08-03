import * as React from 'react';
import Image from 'react-bootstrap/Image'


function Home() {
  return(
   <>
<div>
 <Image src="https://tinyurl.com/5byketvw" fluid />

  <div className="mask" >
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>


  </>
  );
}

export default Home;