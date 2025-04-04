import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {SignIn} from "./page/chat/SignIn";
import {Chat} from "./page/chat/Chat";
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {AddCircle, Home} from "@mui/icons-material";
import {Calc} from "./page/calc/Calc";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import Error from "./Error"
import {NavLinkActive} from "./shared/NavLinkActive";

const App = () =>
  <BrowserRouter>
    <Container>
      <SideBar>
        <List>
          <NavLinkActive to='/calc/top'>
            <ListItem>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary='計算'/>
            </ListItem>
          </NavLinkActive>
          <NavLinkActive to='/chat/start'>
            <ListItem>
              <ListItemIcon>
                <ChatIcon/>
              </ListItemIcon>
              <ListItemText primary='チャット'/>
            </ListItem>
          </NavLinkActive>
          <NavLinkActive to='/calc/exView'>
            <ListItem>
              <ListItemIcon>
                <AddCircle/>
              </ListItemIcon>
              <ListItemText primary='exView'/>
            </ListItem>
          </NavLinkActive>
        </List>
      </SideBar>
      <Contents>
        <Routes>
          {/*calc*/}
          <Route path='/' element={<Calc/>}/>
          <Route path='/calc/top' element={<Calc/>}/>
          {/*chat*/}
          <Route path='/chat/start' element={<SignIn/>}/>
          <Route path='/chat/room/:userName' element={<Chat/>}/>
          {/*other*/}
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </Contents>
    </Container>
  </BrowserRouter>

const Container = styled(Box)`
  display: flex;
  margin: 0 15%;
`

const SideBar = styled(Box)`
  width: 210px;
`

const Contents = styled(Box)`
  flex: 1;
`

export default App
