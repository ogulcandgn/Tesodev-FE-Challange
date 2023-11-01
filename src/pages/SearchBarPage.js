import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBarPage() {
  return (
    <div className="boxContainer">
      <table className="elementsContainer">
        <tr>
          <td>
            <BsSearch className="icon" />
          </td>
          <td>
            <input type="text" placeholder="Search" className="search" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SearchBarPage;
