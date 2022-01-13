import { useDebounce } from 'use-debounce'
import axios, { AxiosError, AxiosResponse } from 'axios'
import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { TVShowPageProps } from '..'
import { findTVShows, TVMazeTVShowsResponseProps } from '../../../api'
import { Field } from '../../components'
import TVShowsResult from './result'

const TVShowPage: FC <TVShowPageProps> = (props) => {

  const [keyword, setKeyword] = useState <string> ('')
  const [searchValue] = useDebounce (keyword, 500)
  const [busy, setBusy] = useState <boolean> (false)

  const [items, setItems] = useState <Array <TVMazeTVShowsResponseProps>> ([])
  const [fetched, setFetched] = useState <boolean> (false)

  const handleOnChangeKeyword = useCallback (async (e: ChangeEvent <HTMLInputElement>) => {
    setKeyword (e.target.value)
  }, [])

  useEffect (() => {  
    setBusy (!!searchValue.length)
    setTimeout (async () => { // to clearly see the placeholder/skeleton before fetching items
      try {
        const tvShows: AxiosResponse <Array <TVMazeTVShowsResponseProps>> = await findTVShows ({ q: searchValue })
        setFetched (true)
        setItems (tvShows.data)
      } catch (error: any) {
        setBusy (false)
        const ae = axios.isAxiosError (error)
        console.error ((ae ? (error as AxiosError <any>).response?.data : error.message) || error)
      } finally { setBusy (false) }
    }, 500)

    return () => {
      setItems ([])
    }
  }, [searchValue])

  return (
    <Container>
      <Form>
        <Field
          onChange = { handleOnChangeKeyword }
          value = { keyword }
          placeholder = 'Search for a TV Show'
          readOnly = { busy }
        />
      </Form>
      <TVShowsResult
        items = { items }
        busy = { busy }
        searchValue = { searchValue }
        fetched = { fetched }
      />
    </Container>
  )
}

const Container = styled.div ``

const Form = styled.form ``

export default TVShowPage