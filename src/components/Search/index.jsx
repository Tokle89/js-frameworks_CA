/* eslint-disable react/prop-types */
import { SearchWrapper, SearchResult } from "./index.styles";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import url from "../../constants/url";
import { useNavigate } from "react-router-dom";

const Search = ({ onClose }) => {
  const [SearchResults, setSearchResults] = useState([]);
  const { data } = useFetch(url);
  const navigate = useNavigate();
  const handleChange = () => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm.length === 0) {
      setSearchResults([]);
      return;
    } else {
      const results = data.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm);
      });
      setSearchResults(results);
    }
  };
  const handleResultClick = (id) => {
    onClose();
    navigate(`/products/${id}`);
  };
  return (
    <SearchWrapper>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      {SearchResults.length > 0 && (
        <div>
          {SearchResults.map(({ id, title, imageUrl }) => {
            return (
              <SearchResult
                key={id}
                onClick={() => {
                  handleResultClick(id);
                }}
              >
                <img src={imageUrl} alt={title} />
                <p>{title}</p>
              </SearchResult>
            );
          })}
        </div>
      )}
    </SearchWrapper>
  );
};

export default Search;
