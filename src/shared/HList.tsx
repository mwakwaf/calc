import {List, ListItem} from "@material-ui/core";
import styled from "styled-components";
import React from "react";

// component
interface Props {
  items: JSX.Element[],
  m?: string | number,
  p?: string | number
}

export const HList = ({items, m = '1px', p = '1px'}: Props) =>
  <ListEx m={m} p={p}>
    {items.map(item =>
      <ListItem>{item}</ListItem>
    )}
  </ListEx>

// style
interface ListExProps {
  m: string | number,
  p: string | number
}

const ListEx = styled(List)<Pick<ListExProps, 'm' | 'p'>>`
  display: flex;
  padding: 0;

  li {
    margin: ${({m}) => m};
    padding: ${({p}) => p};
  }
`
