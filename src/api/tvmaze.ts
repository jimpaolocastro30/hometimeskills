import axios, { AxiosResponse } from 'axios'

import { TVMazeTVShowsRequestParamsProps, TVMazeTVShowsResponseProps } from '.'

export const findTVShows = (params: TVMazeTVShowsRequestParamsProps): Promise <AxiosResponse <Array <TVMazeTVShowsResponseProps>>> =>
  axios.get ('/search/shows', { params })