import {ChatItem} from "./ChatItem";
import {List} from "@mui/material";
import {ChatBody} from "../../page/chat/Chat";

interface Props {
  items: ChatBody[]
}

export const ChatList = ({items}: Props) => {
  return (
    <List>
      {items.map((item, i) =>
        <ChatItem item={item} key={i}/>)}
    </List>
  )
}
