import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map(Notes1 =>
    <Note
    key={Notes1.id}
    topic= {Notes1.topic}
    question={Notes1.question}
    />
)}
      <Footer />
    </div>
  );
}

export default App;
