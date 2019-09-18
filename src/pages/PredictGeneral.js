import React, { useContext, useEffect } from 'react'
import PredictUrlItem from '../components/predict/PredictItem'
import PredictContext from '../context/predict/predictContext'
import PredictForm from '../components/predict/PredictForm'
import Spinner from '../components/layout/Spinner'
import Clarifai from 'clarifai'

const PredictGeneral = () => {
  const predictContext = useContext(PredictContext)
  const { result, loading, style, url, setModel } = predictContext
  useEffect(() => {
    setModel(Clarifai.GENERAL_MODEL)
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h4>General</h4>
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

          {/* Show headers if there is a result */}
          {result.length > 0 && (
            <ul className="collection">
              {result.map((item, index) => (
                <PredictUrlItem key={index} item={item} />
              ))}
            </ul>
          )}

          {/* RESULT */}
          {/* If loading show spinner */}
          {loading && result.length === 0 && <Spinner style={style} />}
        </div>
      </div>
    </>
  )
}

export default PredictGeneral
