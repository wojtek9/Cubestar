import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Cubestar</p>
        <p className="email-text">
          <a href="mailto:email@email.com">email@email.com</a>
        </p>
        <nav className="footer-links">
          {/* <Link to={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
          <span>|</span>
          <Link to={ROUTES.TERMS_OF_SERVICE}>Terms of Service</Link>
          <span>|</span>
          <Link to={ROUTES.CONTACT}>Contact Us</Link> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
