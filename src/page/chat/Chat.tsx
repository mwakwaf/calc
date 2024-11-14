import {useParams} from "react-router-dom";
import {Box, Button, TextField} from "@mui/material";
import styled from "styled-components";
import {useState} from "react";
import {useWebSocket} from "../../hooks/useWebSocket";
import {ChatList} from "../../app/chat/ChatList";

export type ChatBody = {
  text: string
  from: string
  mine: boolean
}

export const Chat = () => {
  const {userName} = useParams() as { userName: string }
  const [items, setItems] = useState<ChatBody[]>([{text: `${userName}さん、こんにちは`, from: "管理人", mine: false}])
  const [text, setText] = useState<string>('')
  const socket = useWebSocket<ChatBody>(
    'ws://localhost:8081/chat',
    (response) => setItems(v => [...v, response]))
  const sendMessage = () => {
    if (text.trim() === '') return
    socket.send(JSON.stringify({
      text,
      from: userName
    }))
    setText('')
  }

  return (
    <Frame>
      <HeaderContents>
        <TextField label='挨拶してみよう！' value={text} onChange={e => setText(e.target.value)} fullWidth/>
        <Button type="submit" color="primary" variant='contained' onClick={() => sendMessage()}>投稿</Button>
      </HeaderContents>
      <MainContents>
        <ChatList items={items}/>
      </MainContents>
    </Frame>
  )
}

const Frame = styled(Box)`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 auto;
  align-items: center;
`

const HeaderContents = styled(Box)`
  display: flex;
  width: 90%;
`

const MainContents = styled(Box)`
  width: 90%;
`
