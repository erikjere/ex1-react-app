import { useState, useEffect } from 'react'

import classes from './Movies.module.css'

const Movies = () => {
  const [data, setData] = useState<
    {
      title: string
      description: string
      programType: string
      images: { 'Poster Art': { url: string; width: number; height: number } }
      releaseYear: number
    }[]
  >([])
  const getData = async () => {
    const response = await fetch('./feed/sample.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const jsonData = await response.json()
    setData(jsonData.entries)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.container}>
      {!data && <p>Loading...</p>}
      {data &&
        data

          .filter(
            (item) => item.programType === 'movie' && item.releaseYear >= 2010
          )
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .slice(0, 21)

          .map((movie) => (
            <div key={movie.title} className={classes.card}>
              <img
                className={classes.poster}
                src={movie.images['Poster Art'].url}
                alt={movie.title}
              ></img>
              <p>{movie.title}</p>
            </div>
          ))}
    </div>
  )
}

export default Movies
