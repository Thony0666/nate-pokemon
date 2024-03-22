"use client";

import ServerCards from "../../component/serverCarde";
import Link from "next/link";
import React, { useState, useEffect } from "react";
Link;

interface List {
  name: string;
  url: string;
}

const Pages: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<List[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [initialPage, setInitialePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50&offset=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  // const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setInitialePage(value);
  //   setIsLoading(true);
  // };
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#f0f0f0" }}>
      {" "}
      {/* Light gray background */}
      <div style={{ padding: "2rem", margin: "0 auto", maxWidth: "800px" }}>
        {" "}
        {/* Centered content with max-width */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#f7813e", fontFamily: "serif" }}>
            Tous les
          </span>{" "}
          Pokemons
        </h1>{" "}
        {/* Title with gradient color and serif font */}
        {error && (
          <p style={{ color: "red", fontWeight: "bold" }}>Error: {error}</p>
        )}
        {pokemonList.length > 0 && (
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {pokemonList.map((pokemon) => (
              <div
                key={pokemon.name}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ServerCards name={pokemon.name} idPokemon={pokemon.url}/>
              </div>
            ))}
          </ul>
        )}
        Link={}
      </div>
    </div>
  );
};

export default Pages;
