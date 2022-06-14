import React from "react";

// *** MUI
import Box from "@mui/material/Box";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "VietNam",
}: WelcomeMessageProps) => {
  return (
    <Box pb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
