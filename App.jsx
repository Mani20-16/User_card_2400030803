import React from "react";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <UserCard name="Sowjanya" age={21} bio="I am learning React and building projects!" />
      <UserCard name="Kavya" age={22} bio="I love coding and designing UI components!" />
      <UserCard name="Ramesh" age={25} bio="Full-stack developer and React enthusiast." />
    </div>
  );
}

export default App;