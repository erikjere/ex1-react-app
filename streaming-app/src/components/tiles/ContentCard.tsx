import classes from './ContentCard.module.css'

const ContentCard = (props: { title: string; src: string }) => {
  return (
    <div className={classes.card}>
      <img className={classes.poster} src={props.src} alt={props.title} />
      <p>{props.title}</p>
    </div>
  )
}

export default ContentCard
