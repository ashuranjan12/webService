import "../PagesCss/Home.css";
import logo from "../Logo/logo.png";

function Home() {
  return (
    <div className="main-home">
      <div className="Fst-home">
        <div className="logo-box">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
          <div>
            <h1 style={{ color: 'white', margin: '20px 0 10px', textAlign: 'center' }}>webService</h1>
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
    </div>
  );
}

export default Home;
