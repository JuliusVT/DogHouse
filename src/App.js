import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import {DogsContextProvider} from './context/DogsContext'
import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt='Dogs Logo' src='/dog-house-logo.png'/>
        </Link>
        <DogsContextProvider>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Detail}
          path="/dog/:id"
        />
        </DogsContextProvider>
      </section>
    </div>
  );
}
