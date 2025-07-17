import React from "react";

function MapUSA() {
  return (
    <>
      <div className="container">
        <div className="row mt-0">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.480279274938!2d-95.65733060530359!3d29.60108650386567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e1383ce24715%3A0xe2d258fef0ad0677!2s6850%20Fitzgerald%20Ct%2C%20Sugar%20Land%2C%20TX%2077479%2C%20USA!5e0!3m2!1sen!2sin!4v1752741550029!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapUSA;
