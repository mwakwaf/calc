import {Box, Button, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useState} from "react";
import styled from "styled-components";

export const SignIn = () => {
  const [userName, setUserName] = useState<string>('')
  return (
    <Frame>
      <TextField label="Username" variant="standard" fullWidth required onChange={e => setUserName(e.target.value)}/>
      <Button type="submit" color="primary" variant="contained" fullWidth disabled={!userName}
              component={Link} to={'/chat/room/' + userName}>
        はじめる
      </Button>
    </Frame>
  )
}

const Frame = styled(Box)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 250px;
  margin: 20px auto;
  justify-content: space-evenly;
`