import Button from "../components/Button";
import "../App.css";
import logo from "../images/logo.png";
import SearchBarPage from "./SearchBarPage";

function MainPage() {
  return (
    <div>
      <div>
        <Button />
      </div>
      <div>
        <img className="brand_logo" src={logo} alt="Logo" />
      </div>
      <div>
        <SearchBarPage />
      </div>
    </div>
  );
}

export default MainPage;
