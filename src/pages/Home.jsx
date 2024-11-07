import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import A from "../images/img1.jpg";
import B from "../images/img2.jpg";
import C from "../images/bg2.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={A} width="1400" height="600" alt="Slide 1" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Restaurant Booking Website..</h3>
            <p>Your Taste and Health is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={B} width="1400" height="600" alt="Slide 2" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Restaurant Booking Website..</h3>
            <p>Your Taste and Health is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={C} width="1400" height="600" alt="Slide 3" />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Our Restaurant Booking Website..</h3>
            <p>Your Taste and Health is our priority.</p>
            <Link to="/booknow">
              <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                Book Now
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
