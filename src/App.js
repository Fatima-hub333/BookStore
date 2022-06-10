/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navibar';
import Pagecategory from './pages/PageCatego';
import BooksPage from './pages/PageBook';
import NoMatch from './pages/NoMatch';
import Footer from './Component/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route path="/Bookstore/PageCatego" element={<Pagecategory />} />
          <Route path="/Bookstore/NoMatch" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
