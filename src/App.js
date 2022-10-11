import logo from './logo.svg';
import './App.css';
import HomeHero from './components/HomeHero';
import Feature from './components/Feature';
import Info from './components/Info';
import TransparantInfo from './components/TransparantInfo';
import Newslater from './components/Newslater';
import Feature2 from './components/Feature2';
import SlidePerView from './components/SlidePerView';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <HomeHero></HomeHero>
      <Feature></Feature>
      <Info></Info>
      <TransparantInfo></TransparantInfo>
      <Feature2></Feature2>
      <Newslater></Newslater>
      <SlidePerView></SlidePerView>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
