import Link from "next/link";
import React from "react";

function Cards(props) {
  const name = props.name;
  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.2rem",
            fontFamily: "cursive",
            color: "#333",
          }}
        >
          {name}
        </span>
        <Link href={`/client/${name}`}>
          <button
            style={{
              backgroundColor: "#f7813e",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontFamily: "cursive",
            }}
          >
            Voir Plus
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
