import React from "react";

function MapUSA() {
  return (
    <>
      <div className="container">
        <div className="row mt-0">
          <div className="col-md-12">
            <iframe
              src="https://maps.google.com/maps?q=Texas%2C%20USA&z=5&output=embed"
              title="Metamind Systems USA office: Texas, USA"
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapUSA;
