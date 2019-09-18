import React, { useContext, useEffect } from 'react'
import ColorItem from '../components/predict/ColorItem'
import PredictContext from '../context/predict/predictContext'
import PredictForm from '../components/predict/PredictForm'
import Spinner from '../components/layout/Spinner'
import Clarifai from 'clarifai'

const PredictColor = () => {
  const predictContext = useContext(PredictContext)
  const { result, loading, style, url, setModel } = predictContext
  useEffect(() => {
    setModel(Clarifai.COLOR_MODEL)
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h4>Color</h4>
      <PredictForm />
      <div className="row">
        <div className="col s12">
          {/* Show image if there is a result */}
          {result.length > 0 && (
            <img
              src={url}
              alt=""
              className="responsive-img"
              style={{ width: '400px' }}
            />
          )}

          {/* RESULT */}
          {/* If loading show spinner */}
          {loading && result.length === 0 && <Spinner style={style} />}
          {/* Show result */}
          {result.length > 0 &&
            result.map((item, index) => <ColorItem key={index} item={item} />)}
        </div>
      </div>
    </>
  )
}

export default PredictColor
