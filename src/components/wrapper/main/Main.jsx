import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Contacts from "../../pages/contacts/Contacts";
import Blog from "../../pages/blog/Blog";


export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
};
