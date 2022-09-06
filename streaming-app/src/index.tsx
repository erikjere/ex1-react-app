import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Footer from './components/UI/Footer'
import Header from './components/UI/Header'
import Content from './Content'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies" element={<Content contentType={'movie'} />} />
      <Route path="/series" element={<Content contentType={'series'} />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)
