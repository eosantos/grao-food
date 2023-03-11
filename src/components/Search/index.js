import React, { useState } from "react";
import * as C from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <C.SearchBox>
        <C.Input
          type="text"
          placeholder="Busque por item ou Restaurante"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <C.Button type="submit">
          <SearchIcon />
        </C.Button>
      </C.SearchBox>
    </form>
  );
};

export default Search;
