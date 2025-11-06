import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";
export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
