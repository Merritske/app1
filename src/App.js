
import './App.css';
import Container from './components/cardContainer';
import Footer from './components/footer';

import Header from './components/Header';
import Hero from './components/Hero';
import JokeVerz from './components/JokeVerz';
import MemeHeader from './components/MemeHeader';
import MemInput from './components/memInput';


import Time from './components/timeOfDay';


function App() {
  return (
    <div className="App">

      <Time/>
 <Header/>
   <Hero/>
 <Container/>
 <JokeVerz/>
<MemeHeader/>
<MemInput/>
<Footer/>

 </div>
  );
}

export default App;
