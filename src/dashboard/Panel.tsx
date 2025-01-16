import React, { ChangeEvent, useState } from "react";

export function Panel() {
  const [lowerThirdText, setLowerThirdText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setLowerThirdText(text);
    nodecg.Replicant("lowerThirdText").value = text;
  };

  const handleVisibilityToggle = () => {
    const visibility = !isVisible;
    setIsVisible(visibility);
    nodecg.Replicant("lowerThirdVisibility").value = visibility;
  };

  return (
    <div>
      <h2>Lower Third Control Panel</h2>

      <div>
        <label htmlFor="lowerThirdText">Text:</label>
        <input
          id="lowerThirdText"
          type="text"
          value={lowerThirdText}
          onChange={handleTextChange}
        />
      </div>

      <div>
        <label htmlFor="visibilityToggle">Visible:</label>
        <input
          id="visibilityToggle"
          type="checkbox"
          checked={isVisible}
          onChange={handleVisibilityToggle}
        />
      </div>
    </div>
  );
}
