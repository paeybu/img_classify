import React, { useContext } from 'react'
import PredictUrlItem from './PredictUrlItem'
import PredictContext from '../../context/predict/predictContext'
import Spinner from '../layout/Spinner'

const PredictUrl = () => {
  const predictContext = useContext(PredictContext)
  const { result, loading, style, url, model } = predictContext
  return (
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

        {/* Show headers if not color */}
        {result.length > 0 && model !== 'eeed0b6733a644cea07cf4c60f87ebb7' && (
          <>
            <div className="clearfix"></div>
            <h6 className="left" style={{ marginLeft: '20px' }}>
              Prediction
            </h6>
            <h6 className="right" style={{ marginRight: '20px' }}>
              Probability
            </h6>
            <div className="clearfix"></div>
          </>
        )}

        {/* RESULT */}
        {/* If loading show spinner */}
        {loading && result.length == 0 && <Spinner style={style} />}

        {/* If has result and not color model */}
        {result.length > 0 && model !== 'eeed0b6733a644cea07cf4c60f87ebb7' ? (
          <ul className="collection">
            {result.map((item, index) => (
              <PredictUrlItem key={index} item={item} />
            ))}
          </ul>
        ) : (
          result.map((item, index) => (
            <PredictUrlItem key={index} item={item} />
          ))
        )}
      </div>
    </div>
  )
}

export default PredictUrl
