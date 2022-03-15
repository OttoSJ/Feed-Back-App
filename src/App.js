import Header from "./components/Header";
import React, { useState } from "react";
import FeedbackList from "./components/Feedbacklist";
import Feedbackdata from "./data/Feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleFeedback = (e, feedback) => {
    e.preventDefault();
    setFeedback(feedback);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleFeedback={handleFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
