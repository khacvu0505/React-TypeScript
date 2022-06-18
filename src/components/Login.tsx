import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

interface LoginProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
  // context
  const { toggleAuth } = useContext(AuthContext);
  // state
  const [userName, setUserName] = useState<string>("");

  const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onLoginSubmit = () => {
    toggleAuth(userName);
    setUserName("");
    handleClose();
  };
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose.bind(this)}>
        <DialogContent>
          <TextField
            label="Username"
            onChange={onUserNameChange}
            required
            value={userName}
            onKeyDown={({ key }) => {
              key === "Enter" && onLoginSubmit();
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={onLoginSubmit}
            disabled={userName === ""}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
