import Service from './component/category';
import CategoryInfo from './component/category-info';
import Footer from './component/footer';
import Hero from './component/hero';
import Navigation from './component/navigation';
import Testimonial from './component/testimonial';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Hero/>
     <Service/>
     <CategoryInfo/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
