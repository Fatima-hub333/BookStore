import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import PageCategory from './pages/PageCategory'
import BookPage from './pages/BookPage'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='main-app'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route path="/BookStore/PageCategory" element={<PageCategory />} />
          <Route path="/BookStore/NoMatch" element={<NoMatch />} />
        </Routes>
      </div>

    )
  }
}

export default App;
