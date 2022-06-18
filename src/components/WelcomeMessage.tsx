import React from "react";

// *** MUI
import Box from "@mui/material/Box";

interface WelcomeMessageProps {
  position: string;
  country?: string;
  userName: string;
}

const WelcomeMessage = ({
  position,
  country = "VietNam",
  userName = "",
}: WelcomeMessageProps) => {
  return (
    <Box pb={1}>
      Welcome {userName} {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
