"use client";
import React, { useState, useEffect } from "react";
export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [pokemon, setPokemon] = useState<any>(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoad(false);
      }
    }

    fetchPokemon();
    return () => {
    };
  }, [id]);
    return (
      //   <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          {pokemon && (
            <div style={{}}>
              <h1 style={{ fontSize: "5vh", fontWeight: "bold" }}>
                {pokemon.name.toUpperCase()}
              </h1>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "40vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  width: "100%",
                  height: "100%",
                }}
              >
                {pokemon && pokemon.sprites && (
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={200}
                  />
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "50%",
                height: "100%",
              }}
            >
              {pokemon && (
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <div style={{ width: "100%" }}>
                        <h2 style={{ fontWeight: "bold" }}>Type </h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2 style={{ fontWeight: "bold" }}>Poids </h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2 style={{ fontWeight: "bold" }}>Taille </h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2 style={{ fontWeight: "bold" }}>Numéro </h2>
                      </div>
                    </div>
                    <div style={{ marginRight: 3, marginLeft: 3 }}>
                      <div style={{ width: "100%" }}>
                        <h2> :</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2>:</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2> :</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2> :</h2>
                      </div>
                    </div>
                    <div>
                      <div style={{ width: "100%" }}>
                        <h2> {pokemon.types[0].type.name}</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2> {pokemon.weight}</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2> {pokemon.height}</h2>
                      </div>
                      <div style={{ width: "100%" }}>
                        <h2> {pokemon.order}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
