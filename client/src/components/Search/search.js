import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="row justify-content-center padding">
        <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
            <form className="employee-form">
                <div className="form-group d-md-flex">
                 <input 
                  autocomplete="off"
                  value={props.search}
                  onChange={props.handleInputChange}
                  type="text"
                  id="searchValue"
                  name="searchValue"
                  className="form-control px-4"
                   placeholder=""/>
                 <input type="submit" onClick={props.handleFormSubmit} className="search-employee btn btn-primary px-5" value="SEARCH"/></div>
            </form>
        </div>
        </div>
    );
  }
  
  export default SearchForm;