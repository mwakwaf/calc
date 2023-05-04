import * as React from 'react'
import {Button as MuiButton} from "@material-ui/core";

interface Props {
  text: string,
  onClick: React.MouseEventHandler
}

export const Button = ({text, onClick}: Props) =>
  <MuiButton variant='contained' color='primary' onClick={onClick}>
    {text}
  </MuiButton>