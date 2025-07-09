import React from "react";

function Map() {
  return (
    <>
      <div className="container">
        <div className="row mt-0">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.46196982419744!2d73.80053554935675!3d18.51120146169766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf00529e5193%3A0x7c8146d6f7d0e747!2sMetamind%20Systems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1734581338130!5m2!1sen!2sus"
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

export default Map;
