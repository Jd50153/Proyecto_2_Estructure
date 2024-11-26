import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { paths } from './routes/paths'
import { Home } from './pages/Home'
import { Schedule } from './pages/Schedule'
import { Results } from './pages/Results'
import { Progress } from './pages/Progress'
import { Header } from './components/Header'

function App() {

  return (
    <HashRouter>
      <div className="h-screen grid place-items-center bg-gray-900 ">
        <div className='md:w-[60%] w-[95%] min-h-[50%] max-h-[80%] overflow-y-auto'>
          <Header />
          <div className='bg-white rounded-xl w-full h-full p-8'>
            <Routes>
              <Route path={paths.HOME} element={<Home />} />
              <Route path={paths.SCHEDULE} element={<Schedule />} />
              <Route path={paths.RESULTS} element={<Results />} />
              <Route path={paths.PROGRESS} element={<Progress />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
