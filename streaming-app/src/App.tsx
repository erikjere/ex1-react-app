import classes from './App.module.css'
import CategoryCard from './components/tiles/CategoryCard'

const categories = [
  { name: 'movies', description: 'Popular Movies' },
  { name: 'series', description: 'Popular Series' },
]

const App = () => {
  return (
    <div className={classes.container}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          description={category.description}
        />
      ))}
    </div>
  )
}

export default App
