import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MoodSelector = ({ onSubmit }) => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    onSubmit(selectedMood);
    setSelectedMood("");
  };

  return (
    <div className="flex flex-col justify-around h-screen">
      <div>
        <h2 className="text-4xl font-bold text-blue-800 mt-7">
          Select your mood:
        </h2>
      </div>
      <div className="flex justify-around ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Happy")}
        >
          😊 Happy
        </button>
        <button
          className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Sad")}
        >
          😢 Sad
        </button>
        <button
          className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Angry")}
        >
          😡 Angry
        </button>
        <button
          className="bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleMoodSelection("Confused")}
        >
          😕 Confused
        </button>
      </div>
      <div>
        <button
          className="bg-red-500 w-32 h-32 rounded-full text-4xl font-bold hover:bg-red-400 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;
