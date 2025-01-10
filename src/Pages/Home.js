import "../PagesCss/Home.css";
import logo from "../Logo/logo.png";

function Home() {
  return (
    <>
      <div className="main-home-1">
        <div className="Fst-home">
          <div className="logo-box">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
            <div>
              <h1
                style={{
                  color: "white",
                  margin: "20px 0 10px",
                  textAlign: "center",
                }}
              >
                webService
              </h1>
            </div>
          </div>
          <div className="Fsttxt-box">
            <h1 className="Fst-hng">
              Your Dream Website, Designed for Your Business
            </h1>
            <h3 className="Sec-hng">
              Responsive, user-friendly, and designed to drive results.
            </h3>
          </div>
        </div>
        <div className="para-main">
          <div className="para-hm">
            <p className="para-hm-1">
              At Webservice, we specialize in building high-quality, responsive
              websites that cater to your unique business requirements. Whether
              you're looking for a powerful content management system (CMS) to
              manage your site easily, or a fully custom-coded solution, we
              provide tailored web services that ensure your online presence is
              top-notch.
            </p>
          </div>
          <div className="Btns">
            <button className="btn-hm-1">View More</button>
            <button className="btn-hm-2">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
