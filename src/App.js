import "./App.css";
import Header from "./component/header/Header";
import Products from "./component/products/Products";
import Accordion from "./component/QAndA/Question";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Products></Products>
      </main>
      <section>
        <div className="w-1/2 mx-auto my-6">
          <Accordion title="How React Work?">
            React is a popular Javascript library.React build on some core concepts. They are JSX,Components,State,Props,VirtualDOM etc.
            firstly JSX help us to write HTMl in JS file.it is not actually HTML or nor JS.it is a syntactic sugar for create Javascript object.React have powerfull rendering system it take jsx from components and rendering it react elements very efficiently.React actually create a virtual dom and make compare with everytime change in Original domain and findout which particular part is changed and those particular change elements efficiently. React use key when looping any system, it has a great method by this key which individual element is changed. this is the process i know at all.
          </Accordion>
          <Accordion title="Difference between Props and State?">
            
          </Accordion>
          <Accordion title="What Is a Black Hole?">
            A black hole is an area of such immense gravity that nothing -- not
            even light -- can escape from it.
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default App;
