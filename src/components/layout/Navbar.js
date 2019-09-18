import React, { useContext } from 'react'
import PredictContext from '../../context/predict/predictContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const predictContext = useContext(PredictContext)
  const { clearResult } = predictContext
  const onClick = () => {
    clearResult()
  }
  return (
    <>
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <Link to="#" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/" onClick={onClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/color" onClick={onClick}>
                Color
              </Link>
            </li>
            <li>
              <Link to="/general" onClick={onClick}>
                General
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile">
        <li>
          <Link to="/" onClick={onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/color" onClick={onClick}>
            Color
          </Link>
        </li>
        <li>
          <Link to="/general" onClick={onClick}>
            General
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar
