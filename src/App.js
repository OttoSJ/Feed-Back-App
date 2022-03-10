import Header from "./components/Header";
import React from "react";
import Feedbacklist from "./components/Feedbacklist";
import Feedbackdata from "./data/Feedbackdata";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  return (
    <>
      <Header />
      <div className="container">
        <Feedbacklist feedback={feedback} />
      </div>
    </>
  );
}
export default App;
