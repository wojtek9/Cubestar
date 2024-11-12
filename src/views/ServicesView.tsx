import "../css/ServicesView.css";

const ServicesView = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At Cubestar, we are committed to advancing the field of UAV payload
        testing. Here's a look at some of the services we're working on:
      </p>

      <div className="service-list">
        <div className="service-item">
          <h2>Environmental Testing</h2>
          <p>
            Ensuring UAV payloads are prepared for diverse environments,
            including temperature and humidity extremes.
          </p>
        </div>

        <div className="service-item">
          <h2>Sensor Calibration</h2>
          <p>
            Precision calibration services to enhance sensor accuracy and
            performance under various conditions.
          </p>
        </div>

        <div className="service-item">
          <h2>Payload Integrity Testing</h2>
          <p>
            Testing payload durability and integrity to ensure high performance
            and resilience in the field.
          </p>
        </div>

        <div className="service-item">
          <h2>Custom Testing Solutions</h2>
          <p>
            Partnering with clients to develop tailored testing services to meet
            specific project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
