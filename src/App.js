import '@/scss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, APropos, Layout} from '@/pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/propos' element={<APropos />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
