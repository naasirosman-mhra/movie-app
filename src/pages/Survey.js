import React, { useState } from 'react';

const Survey = () => {
  const [relaxedRating, setRelaxedRating] = useState(3);
  const [emotionalRating, setEmotionalRating] = useState(3);
  const [complexityRating, setComplexityRating] = useState(3);
  const [realismRating, setRealismRating] = useState(3);
  const [characterDrivenRating, setCharacterDrivenRating] = useState(3);
  const [visualSpectacleRating, setVisualSpectacleRating] = useState(3);
  const [historicalRating, setHistoricalRating] = useState(3);
  const [cinematicRating, setCinematicRating] = useState(3);
  const [moodRating, setMoodRating] = useState(3);
  const [musicInfluenceRating, setMusicInfluenceRating] = useState(3);

  const handleRatingChange = (setterFunction) => (event) => {
    setterFunction(parseInt(event.target.value, 10));
  };

  const handleSubmit = () => {
    // Use the ratings to make recommendations or perform any other logic
    console.log('Relaxed Rating:', relaxedRating);
    console.log('Emotional Rating:', emotionalRating);
    console.log('Complexity Rating:', complexityRating);
    console.log('Realism Rating:', realismRating);
    console.log('Character Driven Rating:', characterDrivenRating);
    console.log('Visual Spectacle Rating:', visualSpectacleRating);
    console.log('Historical Rating:', historicalRating);
    console.log('Cinematic Rating:', cinematicRating);
    console.log('Mood Rating:', moodRating);
    console.log('Music Influence Rating:', musicInfluenceRating);
  };

  return (
    <div>
      <h1>Survey</h1>
      {/* Relaxed vs Fast */}
      <div>
        <label>
          Relaxed vs Fast:
          <input
            type="range"
            min="1"
            max="5"
            value={relaxedRating}
            onChange={handleRatingChange(setRelaxedRating)}
          />
          {relaxedRating}
        </label>
      </div>

      {/* Emotional vs Action */}
      <div>
        <label>
          Emotional vs Action:
          <input
            type="range"
            min="1"
            max="5"
            value={emotionalRating}
            onChange={handleRatingChange(setEmotionalRating)}
          />
          {emotionalRating}
        </label>
      </div>

      {/* Complexity vs Simplicity */}
      <div>
        <label>
          Complexity vs Simplicity:
          <input
            type="range"
            min="1"
            max="5"
            value={complexityRating}
            onChange={handleRatingChange(setComplexityRating)}
          />
          {complexityRating}
        </label>
      </div>

      {/* Realism vs Fantasy */}
      <div>
        <label>
          Realism vs Fantasy:
          <input
            type="range"
            min="1"
            max="5"
            value={realismRating}
            onChange={handleRatingChange(setRealismRating)}
          />
          {realismRating}
        </label>
      </div>

      {/* Character-Driven vs Plot-Driven */}
      <div>
        <label>
          Character-Driven vs Plot-Driven:
          <input
            type="range"
            min="1"
            max="5"
            value={characterDrivenRating}
            onChange={handleRatingChange(setCharacterDrivenRating)}
          />
          {characterDrivenRating}
        </label>
      </div>

      {/* Visual Spectacle vs Subtlety */}
      <div>
        <label>
          Visual Spectacle vs Subtlety:
          <input
            type="range"
            min="1"
            max="5"
            value={visualSpectacleRating}
            onChange={handleRatingChange(setVisualSpectacleRating)}
          />
          {visualSpectacleRating}
        </label>
      </div>

      {/* Historical vs Contemporary */}
      <div>
        <label>
          Historical vs Contemporary:
          <input
            type="range"
            min="1"
            max="5"
            value={historicalRating}
            onChange={handleRatingChange(setHistoricalRating)}
          />
          {historicalRating}
        </label>
      </div>

      {/* Cinematic vs Television */}
      <div>
        <label>
          Cinematic vs Television:
          <input
            type="range"
            min="1"
            max="5"
            value={cinematicRating}
            onChange={handleRatingChange(setCinematicRating)}
          />
          {cinematicRating}
        </label>
      </div>
      <button 
      onClick={handleSubmit}
      style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>Submit</button>
    </div>
  );
};

export default Survey;
