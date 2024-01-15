import logo from "../assets/logo.png";
import "../App.css";
import "../index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="foopies logo" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          <li>
            <a href="#home" class="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" class="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" class="nav-link">
              {" "}
              selections{" "}
            </a>
          </li>

          <li>
            <a href="#tours" class="nav-link">
              {" "}
              contact
            </a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.facebook.com" target="_blank" class="nav-icon">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fa-brands fa-x-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
