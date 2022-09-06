import { Fragment } from 'react'
import classes from './Header.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [name, setName] = useState('Titles')
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === '/' && name !== 'Titles') {
    setName('Titles')
  } else if (location.pathname === '/movies' && name !== 'Movies') {
    setName('Movies')
  } else if (location.pathname === '/series' && name !== 'Series') {
    setName('Series')
  }
  return (
    <Fragment>
      <div className={classes.container}>
        <h1
          className={classes.title}
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            navigate('./', { replace: false })
          }
        >
          DEMO Streaming
        </h1>
        <div className={classes['sub-container']}>
          <p className={classes['log-in']}>Log in</p>
          <button className={classes.button}>Start your free trial</button>
        </div>
      </div>
      <div className={classes['sub-header']}>
        <h2 className={classes.text}>Popular {name}</h2>
      </div>
    </Fragment>
  )
}

export default Header
