import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './App.module.css'

const App = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <div
        className={classes['sub-container']}
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          navigate('./series', { replace: false })
        }
      >
        <div className={classes['img-background']}>
          <img
            className={classes.image}
            src="./assets/placeholder.png"
            alt="placeholder"
          />
          <div className={classes.center}>SERIES</div>
        </div>
        <p>Popular Series</p>
      </div>
      <div
        className={classes['sub-container']}
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          navigate('./movies', { replace: false })
        }
      >
        <div className={classes['img-background']}>
          <img
            className={classes.image}
            src="./assets/placeholder.png"
            alt="placeholder"
          />
          <div className={classes.center}>MOVIES</div>
        </div>
        <p>Popular Movies</p>
      </div>
    </div>
  )
}

export default App
