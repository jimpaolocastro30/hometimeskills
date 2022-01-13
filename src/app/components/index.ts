import { InputHTMLAttributes } from 'react'
import TopNavigation from './nav'
import Field from './field'
import SkeletonCard from './skeleton'

export {
  TopNavigation,
  Field,
  SkeletonCard
}

export type TopNavigationMenuListItemProps = {
  to: string
  text: string
}

export type TopNavigationMenuListProps = {
  items: Array <TopNavigationMenuListItemProps>
}

export type TopNavigationProps = {} & TopNavigationMenuListProps

export type FieldProps = {} & InputHTMLAttributes <HTMLInputElement>

export type SkeletonCardProps = {}