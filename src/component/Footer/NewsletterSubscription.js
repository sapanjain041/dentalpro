import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setemail] = useState("");
  const handleSubmit = (e) => {
    e.prevenDefault();
    console.log(email);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="mailchimp-subscription-form-footer"
        className="newsletter-form"
      >
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            name="EMAIL"
            placeholder="Your Email"
            className="form-control input-lg font-16"
            data-height="45px"
            id="mce-EMAIL-footer"
            style={{ height: "45px" }}
          />
          <span className="input-group-btn">
            <button
              data-height="45px"
              className="btn btn-colored btn-theme-colored btn-xs m-0 font-14"
              type="submit"
              style={{ height: "45px" }}
            >
              Subscribe
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
