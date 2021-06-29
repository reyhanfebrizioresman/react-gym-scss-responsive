import './app.scss'
import { Topbars,Hero,Feature,Offer,About,Contact } from './Components';

function App() {
  return (
    <div className="App">
        <Topbars />
        <Hero/>
        <Feature />
        <Offer />
        <About />
        <Contact />
    </div>
  );
}

export default App;
