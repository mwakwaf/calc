import {Box} from "@material-ui/core";
import styled, {css} from "styled-components";
import {theme} from "../../theme";
import {ChatBody} from "../../page/chat/Chat";

interface Props {
  item: ChatBody
}

export const ChatItem = ({item}: Props) => {
  return (
    <Container toRight={item.mine}>
      <Contents>
        {item.mine
          ? (
            <>
              <Message text={item.text}></Message>
              <a>{`${item.from}*`}</a>
            </>)
          : (
            <>
              <a>{item.from}</a>
              <Message text={item.text}></Message>
            </>)}
      </Contents>
    </Container>
  )
}

const Container = styled.li<{ toRight: boolean }>`
  margin: 10px 0;
  display: flex;
  ${({toRight}) => toRight && css`justify-content: flex-end;`}
`

const Contents = styled(Box)`
  display: flex;
  gap: 0 10px;
`

const Message = ({text}: { text: string }) => {
  return (
    <MessageContainer>
      <MessageText>{text}</MessageText>
    </MessageContainer>
  )
}

const MessageContainer = styled(Box)`
  background-color: ${theme.palette.primary.light};
  border-radius: 25px;
  height: 70px;
  width: 250px;
  padding: 5px 0 0 15px;
`

const MessageText = styled.a`
  color: white;
`