import React, { FC } from 'react'
import styled from 'styled-components'

import { TopNavigationMenuListItemProps, TopNavigationMenuListProps } from '..'
import TopNavigationMenuListItem from './item'

const TopNavigationMenuList: FC <TopNavigationMenuListProps> = (props) => {
  return (
    <List>
      {
        props.items.map (
          (item: TopNavigationMenuListItemProps) =>
            <TopNavigationMenuListItem
              { ...item }
              key = { item.to }
            />
        )
      }
    </List>
  )
}

const List = styled.ul `
  display: flex;
  gap: 0 clamp(.5rem, 2vw, 1rem);
` 

export default TopNavigationMenuList
