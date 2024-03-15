import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import Create from "./pages/Create";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex w-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipe/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
