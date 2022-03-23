  import axios from "axios";
  import NavBar from "../Navbar";
  import getSearchList from "../../hooks/getSearchList";
  
  export const onFormSubmit = (e) => {
    e.preventDefault();
    let searchVal = document.querySelector("input[type=search]").value;
    window.location.replace(`/search/${searchVal}`)
  };