import "./App.css";
import IllustrationImage from "./assets/images/illustration-article.svg";
import Avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <div className="blog-preview-card">
      <img className="image" src={IllustrationImage} alt="illustration"/>
      <div className="badge">Learning</div>
      <div className="published-on">Published 21 Dec 2023</div>
      <h1 className="heading">HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="avatar-container">
        <div className="avatar">
          <img src={Avatar} alt="avatar"/>
        </div>Greg Hooper
      </div>
      
    </div>
  );
}

export default App;
