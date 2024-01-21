import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [characterData, setCharacterData] = useState([]);
  const [searchName, setSearchName] = useState('');

  const getAllCharacterData = async () => {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      const characters = response.data.results;
      setCharacterData(characters);
    } catch (error) {
      console.error("error>>>>>>>>>>", error);
      throw error;
    }
  };

  const handleSearchChange = async (event) => {
    const inputValue = event.target.value;
    setSearchName(inputValue);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${inputValue}`);
      const characters = response.data.results;
      setCharacterData(characters);
    } catch (error) {
      console.log(error);
    }
  };

  const Movie_data = async () => {
    try {
      await getAllCharacterData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Movie_data();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <div className="col-lg-8">
          <h1 className="heading">The Rick and Morty</h1>
        </div>
        <div className="search-bar col-lg-4 mt-4">
        <input
          type="text"
          placeholder="Search"
          value={searchName}
          onChange={handleSearchChange}
        />

      </div>
        {characterData.length > 0 ? (
          <>
            {characterData &&
              characterData.map((res, i) => (
                <div className="col-md-3 mt-5">
                  <div className="movie_card">
                    <img
                      src={res.image}
                      className="card-img-top"
                      alt="Card 1"
                    />
                    <div className="card-body p-3">
                      <div className="d-flex species_item">
                      <h5 className="card-title">{res.name}</h5>
                      <h5 className="species">{res.species}</h5>
                      </div>
                     
                      <p className="card-text">
                      Last known location: {res.location.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <div className="no_movie_found mt-5">
            <h3>No Movie Fount</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
