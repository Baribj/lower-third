import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LowerThirdSchema } from "../../types/schemas/lowerThirdSchema";

export default function Graphics() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lowerThirdReplicant =
      nodecg.Replicant<LowerThirdSchema>("lowerThird");

    function updateGraphics(newValue?: LowerThirdSchema) {
      if (newValue) {
        setText(newValue.text || "");
        setIsVisible(newValue.isVisible);
      }
    }

    lowerThirdReplicant.on("change", updateGraphics);

    return () => {
      lowerThirdReplicant.removeListener("change", updateGraphics);
    };
  }, []);

  /**
   *  Decided to do animation with pure CSS as apposed to JS to keep this simple. Depending on usage, this might not be best approach
   */

  return (
    <Box
      position="fixed"
      bottom="20%"
      left={0}
      ml={5}
      sx={{
        transform: isVisible
          ? "translateX(0) scale(1)"
          : "translateX(-100%) scale(0.5)",
        opacity: isVisible ? 1 : 0,
        transition:
          "transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.7s ease",
      }}
    >
      <Box bgcolor="background.secondary" py={1} px={2} borderRadius={2}>
        <Typography whiteSpace="nowrap">{text}</Typography>
      </Box>
    </Box>
  );
}
