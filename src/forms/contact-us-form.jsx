import React, { useRef, useState } from "react";

const ContactUsForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [alert, setAlert] = useState({ status: null, text: null });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailData = {
      from: data?.email,
      name: data?.name,
      phone: data?.phone,
      text: data?.message,

      html: `
      <p>Name: ${data?.name}</p>
      <p>Phone: <a href="tel:${data?.phone}">${data?.phone}</a></p>
      <p>Email:<a href="mailto:${data?.email}">${data?.email}</a></p>
      <p>Message: ${data?.message}</p>`,
      subject: "Enquiry Form",
    };
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      setLoading(false);
      setAlert({
        status: result?.status === 200 ? "success" : "danger",
        text: result?.message,
      });
    } catch (error) {
      setAlert({ status: "danger", text: "Something went wrong" });
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setAlert({ status: null, text: null });
    }, 2000);
  };

  const handleInputChnage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="box">
      <div className="row gx-20">
        {/* Full Name Input */}
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="text"
              name="name"
              className="inputText"
              required
              onChange={handleInputChnage}
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="email"
              name="email"
              className="inputText"
              onChange={handleInputChnage}
              required
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="col-12">
          <div className="postbox__comment-input mb-35">
            <input
              type="text"
              name="phone"
              className="inputText"
              onChange={handleInputChnage}
              required
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>

        {/* Message Input */}
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea
              name="message"
              className="textareaText"
              onChange={handleInputChnage}
              required
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button
              type="submit"
              className="submit-btn w-100"
              disabled={loading}
            >
              {loading ? "loading.." : "Submit"}
            </button>
          </div>
        </div>
        {alert && (
          <div className="d-flex ">
            <p className={`text-${alert.status} m-auto`}>{alert.text}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactUsForm;
