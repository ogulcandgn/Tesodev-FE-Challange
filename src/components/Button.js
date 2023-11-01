import { NavLink } from "react-router-dom";

function Button() {
  return (
    <div className="flex">
      <NavLink to={"linkpage"}>
        <button>Add new record</button>
      </NavLink>
    </div>
  );
}

export default Button;
