import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddForm from "./Containers/AddForm";
import EditForm from "./Containers/EditForm";

function App() {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container w-75">
        <div className="row">
          <Sidebar />
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes/:category" element={<Home />} />
              <Route path="/quotes/:id/edit" element={<EditForm />} />
              <Route path="/new-quote" element={<AddForm />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
