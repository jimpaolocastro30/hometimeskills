import { findTVShows } from './tvmaze'

export {
  findTVShows
}

export type TVMazeTVShowsRequestParamsProps = {
  q: string
}

export type TVMazeTVShowsResponseProps = {
  score: number
  show: TVMazeTVShowsItemResponseProps
}

export type TVMazeTVShowsItemResponseProps = {
  genres: Array <string>
  image: {
    medium: string
    original: string
  } | null
  name: string
  summary: string | null
}