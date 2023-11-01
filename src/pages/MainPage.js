import Button from "../components/Button";
import "../App.css";
import logo from "../images/logo.png";

function MainPage() {
  return (
    <div>
      <div>
        <Button />
      </div>
      <div>
        <img className="brand_logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default MainPage;
