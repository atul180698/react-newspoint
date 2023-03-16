import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = "950a3dc8111345d89e0939dc5f83fcc1"
  const pageSize = 5
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="home" country="in" apiKey={apiKey} pageSize={pageSize} category="general" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" country="in" apiKey={apiKey} pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" apiKey={apiKey} pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" apiKey={apiKey} pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country="in" apiKey={apiKey} pageSize={pageSize} category="health" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country="in" apiKey={apiKey} pageSize={pageSize} category="sports" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country="in" apiKey={apiKey} pageSize={pageSize} category="science" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country="in" apiKey={apiKey} pageSize={pageSize} category="technology" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App












