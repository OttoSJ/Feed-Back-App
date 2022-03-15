import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={handleTextChange}>
        <h2>How would you rate your service with us?</h2>
        {/* {Add ratings select component} */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version={"secondary"}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
