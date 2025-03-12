import Home from "./pages/Home";
import Result from "./pages/Result";
import { Routes, Route, BrowserRouter } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";
import EditContact from "./pages/EditContact";
export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Result />}></Route>
          <Route path="/edit/:id" element={<EditContact />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
