import { Link } from "react-router-dom";
import "../css/HomeView.css";
import { ROUTES } from "../routes";

const HomeView = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Cubestar</h1>
        <p>Pioneering the Next Generation of UAV Payload Testing Solutions</p>
        <Link to={ROUTES.SERVICES} className="cta-button">
          Learn More
        </Link>
      </header>
      <section className="home-content">
        <div id="about" className="section">
          <h2>TITLE</h2>
          <p>TEXT</p>
          <p>TEXT</p>
        </div>
        <div id="services" className="section">
          <h2>TITLE</h2>
          <p>TEXT</p>
          <p>TEXT</p>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
