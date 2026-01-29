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
    let formData = new FormData();
    formData.append("email", data?.email);
    formData.append("name", data?.name);
    formData.append("message", data?.message);
    formData.append("subject", "Contact Us Form");
    formData.append("phone", data?.phone);
    formData.append(
      "html",
      `
      <p>Name: ${data?.name}</p>
      <p>Phone: <a href="tel:${data?.phone}">${data?.phone}</a></p>
      <p>Email:<a href="mailto:${data?.email}">${data?.email}</a></p>
      <p>Message: ${data?.message}</p>`,
    );

    try {
      const response = await fetch(
        "https://metamindsystem.com/sendEmailwithAttachment.php",
        {
          method: "POST",
          headers: {
            Authorization: `${process.env.NEXT_PUBLIC_TOKEN}`,
          },
          body: formData,
        },
      );

      const result = await response.json();

      setLoading(false);
      setData({ name: "", email: "", message: "", phone: "" });
      setAlert({
        status: result?.status === "success" ? "success" : "danger",
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

  const handleInputChange = (e) => {
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
              value={data?.name}
              className="inputText"
              required
              onChange={handleInputChange}
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
              value={data?.email}
              onChange={handleInputChange}
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
              value={data?.phone}
              className="inputText"
              onChange={handleInputChange}
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
              value={data?.message}
              onChange={handleInputChange}
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
          <div className="d-flex mt--1">
            <p className={`text-${alert.status} m-auto`}>{alert.text}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactUsForm;
