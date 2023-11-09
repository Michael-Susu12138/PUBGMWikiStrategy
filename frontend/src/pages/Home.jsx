import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import videoPath from "../assets/trailer.mp4";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <div className="flex-grow-1">
        <div className="video-container">
          <video className="bg-video" loop muted autoPlay>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content-overlay">
            <h1> PUBG Mobile</h1>
            <p>
              TBDxxx.com is the wikipedia of PUBG Mobile and a platform for all
              PUBGM ethusiasts to communicate
            </p>
          </div>
        </div>
        <NewsList></NewsList>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
