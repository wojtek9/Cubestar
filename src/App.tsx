import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeView from "./views/HomeView";
import ServicesView from "./views/ServicesView";
import ContactView from "./views/ContactView";
import Footer from "./components/Footer";
import "./css/styles.css";
import TermsOfServiceView from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomeView />} />
            <Route path={ROUTES.SERVICES} element={<ServicesView />} />
            <Route path={ROUTES.CONTACT} element={<ContactView />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
            <Route
              path={ROUTES.TERMS_OF_SERVICE}
              element={<TermsOfServiceView />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
