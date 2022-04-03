import { useRef, useState } from "react";
import LoadingSpinner from "../screens/LoadingSpinner";

const Footer = () => {
  const newemail = useRef(null);
  const [msg, setmsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addEmail = () => {
    setIsLoading(true);
    const data = { email: newemail.current.value };

    fetch("https://www.wp-course.site/wp-json/youthink/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsLoading(false);

        setmsg(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <footer className="py-2">
      <div className="container py-2 pt-4">
        <div className="row d-flex justify-content-right">
          <div className="col-md-2 col-sm-12">
            <h5>Section</h5>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-12">
            <h5>Section</h5>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-12">
            <h5>Section</h5>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
          </div>

          <div className="col-md-6 col-sm-12">
            <h5>Subscribe to our Newsletter</h5>
            <form>
              <div id="emailHelp" className="form-text">
                Monthly digest of whats new and exciting from us.
              </div>
              <span className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  ref={newemail}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                />
              </span>
              {isLoading ? <LoadingSpinner /> : ""}
              <button
                type="button"
                value="Subscribe"
                onClick={addEmail}
                disabled={isLoading}
                className="btn btn-primary my-2"
              >
                Subscribe
              </button>
              <p className="msg"> {msg}</p>
            </form>
          </div>
        </div>
        {"\u00a9"}2021 company, Inc.All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
