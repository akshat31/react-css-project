import { DropDown } from "./DropdownMenu.styled";
import arrowDown from "../../assets/down-arrow.svg";

function DropDownMenu({ open }) {
  return (
    <DropDown open={open}>
      <a href="/">Account Settings</a>
      <a href="/">User Management</a>
      <a href="/">My Team</a>
      <span>
        <a href="/">English(UK)</a> <img src={arrowDown} alt="Arrow" />
      </span>
      <a href="/">Logout</a>
    </DropDown>
  );
}

export default DropDownMenu;
