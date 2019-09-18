import React, { useReducer } from 'react'
import Clarifai from 'clarifai'
import PredictContext from './predictContext'
import predictReducer from './predictReducer'
import {
  PREDICT_URL,
  SET_MODEL,
  SET_DISPLAY,
  SET_URL,
  CLEAR_RESULT
} from '../types'

const PredictState = props => {
  const initialState = {
    result: [],
    loading: true,
    model: 'aaa03c23b3724a16a56b629203edc62c',
    style: {
      display: 'none'
    },
    url: ''
  }

  const [state, dispatch] = useReducer(predictReducer, initialState)

  // Actions
  // clear result
  const clearResult = () => {
    dispatch({ type: CLEAR_RESULT })
  }
  // Predict URL
  const predictUrl = url => {
    const { model } = state
    const clarifai = new Clarifai.App({
      apiKey: process.env.REACT_APP_API_KEY
    })

    clarifai.models
      .initModel({
        id: model
      })
      .then(model => {
        return model.predict(url)
      })
      .then(response => {
        console.log(response['outputs'][0]['data'])
        if (model === 'eeed0b6733a644cea07cf4c60f87ebb7') {
          dispatch({
            type: PREDICT_URL,
            payload: response['outputs'][0]['data']['colors']
          })
        } else {
          dispatch({
            type: PREDICT_URL,
            payload: response['outputs'][0]['data']['concepts']
          })
        }
      })
  }

  // Set Model
  const setModel = model => {
    dispatch({
      type: SET_MODEL,
      payload: model
    })
  }

  // Set Style
  const setDisplay = () => {
    dispatch({
      type: SET_DISPLAY
    })
  }

  // Set URL
  const setUrl = url => {
    dispatch({
      type: SET_URL,
      payload: url
    })
  }

  return (
    <PredictContext.Provider
      value={{
        result: state.result,
        loading: state.loading,
        model: state.model,
        style: state.style,
        url: state.url,
        predictUrl,
        setModel,
        setDisplay,
        setUrl,
        clearResult
      }}
    >
      {props.children}
    </PredictContext.Provider>
  )
}

export default PredictState
