import React, { memo, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { SearchBoxWrapper } from "./style";

export default memo(function SearchBox(props) {
  const { width } = props;
  const [query, setQuery] = useState("");

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.query) {
      setQuery(location.state.query);
    }
  }, [location]);
  const handleInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: "/search", state: { query } });
  };
  return (
    <SearchBoxWrapper width={width}>
      <form className="d-flex align-items-center search-form">
        <input
          className="input-search"
          value={query}
          onChange={(e) => handleInput(e)}
          type="search"
          placeholder="Search movies/tv shows"
          aria-label="Search"
        />
        <input
          type="submit"
          value=""
          className="input-search-btn"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </SearchBoxWrapper>
  );
});
