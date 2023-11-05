import "./Home.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import videoPath from "../assets/trailer.mp4";
import Test from "../components/Test";

const Home = () => {
  const newsArray = [
    {
      imgSrc: "/path/to/image1.jpg",
      title: "News Title 1",
      description: "Brief description of the news or update.",
      link: "/link-to-full-news-1",
    },
    {
      imgSrc: "/path/to/image2.jpg",
      title: "News Title 2",
      description: "Brief description of the news or update.",
      link: "/link-to-full-news-2",
    },
    // ... more news items
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <Test></Test>
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

        <div className="news-section">
          <h2 className="text-center my-5">News</h2>
          <div className="container">
            <div className="row">
              {newsArray.map((newsItem, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100">
                    <img
                      src={newsItem.imgSrc}
                      className="card-img-top"
                      alt="News Thumbnail"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{newsItem.title}</h5>
                      <p className="card-text">{newsItem.description}</p>
                      <a href={newsItem.link} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
