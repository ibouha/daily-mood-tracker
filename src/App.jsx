import { useState } from "react";

import "./App.css";
import ConfirmationMessage from "./ConfirmationMessage";
import MoodSelector from "./MoodSelector";

function App() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (selectedMood) => {
    setConfirmationMessage(`Thank you for selecting ${selectedMood}  mood!`);
  };

  return (
    <div className="App">
      <h1 className="text-7xl font-light text-blue-950">Daily Mood Tracker</h1>
      {confirmationMessage ? (
        <ConfirmationMessage message={confirmationMessage} />
      ) : (
        <MoodSelector onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
