import React, { useContext } from 'react'
import PredictContext from '../../context/predict/predictContext'

const PredictUrlForm = () => {
  const predictContext = useContext(PredictContext)
  const { predictUrl, setDisplay, url, setUrl } = predictContext

  const onChange = e => {
    setUrl(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    predictUrl(url)
    setDisplay()
  }
  return (
    <>
      <div className="row">
        <div className="col s12">
          <form onSubmit={onSubmit}>
            <div className="input-field">
              <input
                type="text"
                name="url"
                placeholder="Input an image url to predict"
                onChange={onChange}
                value={url}
                required
              />
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PredictUrlForm
