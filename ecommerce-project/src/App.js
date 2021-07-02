import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import Header from './components/Header';
import Slider from './components/Slider';
import CartContainer from './components/Cart/CartContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Slider />
     <CartContainer />
     <Footer />
    </div>
  );
}

export default App;
