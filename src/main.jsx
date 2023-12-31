import ReactDOM from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
)
