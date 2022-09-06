import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CategoryCard.module.css'

const CategoryCard = (props: { name: string; description: string }) => {
  const navigate = useNavigate()

  return (
    <div
      className={classes.container}
      onClick={(event: React.MouseEvent<HTMLElement>) =>
        navigate(`./${props.name}`, { replace: false })
      }
    >
      <div className={classes['img-background']}>
        <img
          className={classes.image}
          src="./assets/placeholder.png"
          alt="placeholder"
        />
        <div className={classes.center}>{props.name.toUpperCase()}</div>
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default CategoryCard
