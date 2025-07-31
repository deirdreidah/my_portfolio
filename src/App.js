import { BrowserRouter as Router, Routes , Route  } from "react-router-dom";
import SideBar from './components/sidebar';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Inquiries from './pages/Inquiries';


function App() {
  return (
    <Router>
      <div className='d-flex'>
        <SideBar/>
              <div className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/inquiries" element={<Inquiries />} />
          </Routes>
                </div>
      </div>
    </Router>
  );
  }

export default App;