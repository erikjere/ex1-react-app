import { useState, useEffect } from 'react'
import ContentCard from './components/tiles/ContentCard'
import classes from './Content.module.css'

const Content = (props: { contentType: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
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
    setIsLoading(true)
    try {
      const jsonData = await response.json()
      setData(jsonData.entries)
      setIsLoading(false)
    } catch {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.container}>
      {isLoading && <p>Loading...</p>}
      {data &&
        data

          .filter(
            (item) =>
              item.programType === props.contentType && item.releaseYear >= 2010
          )
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .slice(0, 21)

          .map((item) => (
            <ContentCard
              key={item.title}
              title={item.title}
              src={item.images['Poster Art'].url}
            />
          ))}
      {isError && <p>Oops, somethig went wrong.</p>}
    </div>
  )
}

export default Content
