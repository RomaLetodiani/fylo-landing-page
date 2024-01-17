import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Bottom from './components/scenes/Bottom';
import Hero from './components/scenes/Hero';
import Middle from './components/scenes/Middle';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
