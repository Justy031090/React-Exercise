import { BrowserRouter, Route} from 'react-router-dom';
import Homepage from './components/Homepage'
import Products from './components/Products'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Homepage} />
          <Route path='/product/:id'  component={ProductDetail} />
          <Route path= '/products' component={Products} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
