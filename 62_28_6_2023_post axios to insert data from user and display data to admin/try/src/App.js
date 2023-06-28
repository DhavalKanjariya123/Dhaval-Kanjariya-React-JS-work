import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Admin from "./components/Admin";




function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Form />}>
          </Route>
          <Route path="/admin" element={<Admin />}>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
