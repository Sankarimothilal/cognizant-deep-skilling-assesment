import React from "react";
import "./App.css";

function App() {
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",

      // 👇 PUT YOUR IMAGE LINK HERE
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((item, index) => (
        <div key={index}>
          <img
            src={item.Image}
            alt="Office"
            width="400"
            height="250"
          />

          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;