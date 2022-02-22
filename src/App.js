
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
import { useState } from "react";

import Time from './components/timeOfDay';


function App() {

  const [contact, setContact] = useState({
    key: "id1",
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (987) 555-2641",
    email: "itsmyrealName@example.com",
    isFavorite: true
}
,
// wordt niet getoond/ waarschijnlijk contact1, contact2 met "key"
//nee, werkt niet
{
  key: "id2",
  firstName: "Lisa",
  lastName: "Marie",
  phone: "+1 (987) 555-2641",
  email: "itsmyrealName@example.com",
  isFavorite: true
}
)
function toggleFavorite() {
  setContact(prevContact => {
    return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }
})
}

  return (
    <div className="App">

      <Time/>
      <Counter />
      <ListArray/>
 <Header/>
   <Hero/>
 <Container/>
 <JokeVerz/>
<MemeHeader/>
<MemInput/>
<Footer/>
<PersonCard  user={contact} toggle={toggleFavorite}/>
 <PersonCard user={contact} toggle={toggleFavorite}/>
{/*<PersonCard user={contact} toggle={toggleFavorite}/> zijn allemaal dezelfde
<PersonCard user={contact} toggle={toggleFavorite}/> */}
 </div>
  );
}

export default App;
