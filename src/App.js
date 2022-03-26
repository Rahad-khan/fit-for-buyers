import './App.css';
import Header from './component/header/Header';
import Modal from './component/modal/Modal';
import Products from './component/products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Products></Products>
      </main>
    </div>
  );
}

export default App;
