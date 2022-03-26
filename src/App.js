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
          <h1 className="font-bold text-3xl text-center my-5">Questions and Answer Area</h1>
          <Accordion title="How React Work?">
            React is a popular Javascript library.React build on some core concepts. They are JSX,Components,State,Props,VirtualDOM etc.
            firstly JSX help us to write HTMl in JS file.it is not actually HTML or nor JS.it is a syntactic sugar for create Javascript object.React have powerfull rendering system it take jsx from components and rendering it react elements very efficiently.React actually create a virtual dom and make compare with everytime change in Original domain and findout which particular part is changed and those particular change elements efficiently. React use key when looping any system, it has a great method by this key which individual element is changed. this is the process i know at all.
          </Accordion>
          <Accordion title="Difference between Props and State?">
            <ul className="list-decimal">
              <li>
                <br />
                <ul className="list-disc">
                  <li>
                  Props are use to pass data from component to component .
                  </li>
                  <li>where state is used to stored data or load data from other link.</li>
                </ul>
              </li>
              <li>
                <br />
                <ul className="list-disc">
                  <li>Props is immutable</li>
                  <li>state is mutable</li>
                </ul>
                </li>
              <li>
                <br />
                <ul className="list-disc">
                  <li>It has better performance abillity</li>
                  <li>It has worse performance abillity</li>
                </ul>
                </li>
              <li>
                <br />
                <ul className="list-disc">
                  <li>Props is synchronus</li>
                  <li>state is asynchronous</li>
                </ul>
                </li>
            </ul>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default App;
