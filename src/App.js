
import './App.css';
import Container from './components/cardContainer';
import Counter from './components/counter';
import Footer from './components/footer';

import Header from './components/Header';
import Hero from './components/Hero';
import JokeVerz from './components/JokeVerz';
import ListArray from './components/listArray';
import MemeHeader from './components/MemeHeader';
import MemInput from './components/memInput';
import PersonCard from './components/personCard';


import Time from './components/timeOfDay';


function App() {
  return (
    <div className="App">

      <Time/>
      <Counter/>
      <ListArray/>
 <Header/>
   <Hero/>
 <Container/>
 <JokeVerz/>
<MemeHeader/>
<MemInput/>
<Footer/>
<PersonCard/>
 </div>
  );
}

export default App;
