import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import {SignIn} from "./page/chat/SignIn";
import {Chat} from "./page/chat/Chat";
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {AddCircle, Home} from "@material-ui/icons";
import {Calc} from "./page/calc/Calc";
import styled from "styled-components";
import ChatIcon from '@material-ui/icons/Chat';
import {theme} from "./theme";
import Error from "./Error"

const App = () =>
  <BrowserRouter>
    <Container>
      <SideBar>
        <List>
          <NavLink to='/calc/top' activeStyle={menuHighlight}>
            <ListItem button>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary='計算'/>
            </ListItem>
          </NavLink>
          <NavLink to='/chat/start' activeStyle={menuHighlight}>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon/>
              </ListItemIcon>
              <ListItemText primary='チャット'/>
            </ListItem>
          </NavLink>
          <NavLink to='/calc/exView' activeStyle={menuHighlight}>
            <ListItem button>
              <ListItemIcon>
                <AddCircle/>
              </ListItemIcon>
              <ListItemText primary='exView'/>
            </ListItem>
          </NavLink>
        </List>
      </SideBar>
      <Contents>
        <Switch>
          {/*calc*/}
          <Route exact path='/' component={Calc}/>
          <Route path='/calc/top' component={Calc}/>
          {/*chat*/}
          <Route path='/chat/start' component={SignIn}/>
          <Route path='/chat/room/:userName' component={Chat}/>
          {/*other*/}
          <Route component={Error}/>
        </Switch>
      </Contents>
    </Container>
  </BrowserRouter>

const menuHighlight = {
  color: theme.palette.text.hint,
  fontWeight: 'bold',
}

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