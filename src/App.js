import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/CRUD/Main";
// import Form from "./components/CRUD/Form";

function App() {
  return (
    <div className="App">
      {/* <h1> Crud Operation With React </h1>
      <Navbar /> */}
      <Main />
      {/* <Form /> */}
    </div>
  );
}

export default App;
