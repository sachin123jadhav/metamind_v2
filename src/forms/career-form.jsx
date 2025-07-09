import React, { useRef, useState } from "react";

const CareerForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    position: "", // Position as a text field
  });
  const [alert, setAlert] = useState({ status: null, text: null });
  const [file, setFile] = useState(null);

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];
    const maxSize = 2 * 1024 * 1024; // Max file size: 2MB

    if (!allowedTypes.includes(file.type)) {
      setAlert({
        status: "danger",
        text: "Invalid file type. Please upload a PDF, DOC, DOCX, JPG, or PNG.",
      });
      return false;
    }

    if (file.size > maxSize) {
      setAlert({
        status: "danger",
        text: "File is too large. Please upload a file under 2MB.",
      });
      return false;
    }

    setFile(file); // Set the file if valid
    return true;
  };

  const validatePhone = (value) => {
    // Allow only numbers and limit to 10 characters
    const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (numericValue.length > 10) {
      setAlert({
        status: "danger",
        text: "Phone number cannot exceed 10 digits.",
      });
      return numericValue.slice(0, 10); // Return the first 10 digits
    }
    return numericValue;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("from", data?.email);
    formData.append("name", data?.name);
    formData.append("phone", data?.phone);
    formData.append("text", data?.message);
    formData.append("position", data?.position);
    formData.append("subject", "Career Form Submission");

    if (file) {
      formData.append("attachment", file); // Attach the file
    }

    try {
      console.log("formData", [...formData]);
      const response = await fetch("/api/career-email", {
        method: "POST",
        body: formData, // Send the formData directly
      });

      const result = await response.json();
      setLoading(false);

      setAlert({
        status: result?.status === 200 ? "success" : "danger",
        text: result?.message,
      });

      if (result?.status === 200) {
        setData({
          name: "",
          email: "",
          message: "",
          phone: "",
          position: "",
        });
        setFile(null); // Reset file
      }
    } catch (error) {
      console.log("catch error", error);
      setAlert({ status: "danger", text: "Something went wrong" });
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setAlert({ status: null, text: null });
    }, 5000); // Show alert for 5 seconds
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Apply phone validation
      const validatedPhone = validatePhone(value);
      setData({ ...data, phone: validatedPhone });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="box">
      <div className="row gx-20">
        {/* Full Name Input */}
        <div className="col-md-6">
          <div className="postbox__comment-input mb-30">
            <input
              type="text"
              name="name"
              className="inputText"
              value={data.name}
              required
              onChange={handleInputChange}
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="col-md-6">
          <div className="postbox__comment-input mb-30">
            <input
              type="email"
              name="email"
              className="inputText"
              value={data.email}
              onChange={handleInputChange}
              required
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="col-md-6">
          <div className="postbox__comment-input mb-35">
            <input
              type="text"
              name="phone"
              className="inputText"
              value={data.phone}
              onChange={handleInputChange}
              required
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>

        {/* Position Input */}
        <div className="col-md-6">
          <div className="postbox__comment-input mb-30">
            <input
              type="text"
              name="position"
              className="inputText"
              value={data.position}
              onChange={handleInputChange}
              required
            />
            <span className="floating-label">Position</span>
          </div>
        </div>

        {/* Message Input */}
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea
              name="message"
              className="textareaText"
              value={data.message}
              onChange={handleInputChange}
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>

        {/* Resume File Input */}
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-15">
            <p>Upload Resume</p>
            <input
              type="file"
              name="resume"
              className="inputFile"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={(e) => validateFile(e.target.files[0])}
              required
            />
            <p className="sub-text">
              Maximum upload file size is 2 MB. Accepted file types: .pdf, .doc,
              .docx, .jpg, .png.
            </p>
          </div>
          {/* Alert Message */}
          {alert && (
            <div className="d-flex mb-15">
              <p className={`text-${alert.status} m-auto`}>{alert.text}</p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button
              type="submit"
              className="submit-btn w-100"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
