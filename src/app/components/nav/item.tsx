import React, { FC } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { TopNavigationMenuListItemProps } from '..'

const TopNavigationMenuListItem: FC <TopNavigationMenuListItemProps> = (props) => {
  return (
    <Item>
      <Link to = { props.to }>{ props.text }</Link>
    </Item>
  )
}

const Item = styled.li ``

const Link = styled (NavLink) `
  font-size: clamp(.7rem, 2vw, .9rem);
  font-weight: 700;
  color: #888;
  padding: 7px clamp(.5rem, 2vw, 1rem);
  border-radius: 20px;

  &.active {
    background: rgba(190, 227, 248);
  }
`

export default TopNavigationMenuListItem
