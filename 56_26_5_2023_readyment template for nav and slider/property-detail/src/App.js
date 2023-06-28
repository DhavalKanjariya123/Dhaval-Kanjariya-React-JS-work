import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Componets/user/Layout";
import Home from "./Componets/user/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
