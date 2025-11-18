import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import ChannelPage from "./pages/ChannelPage";
import Login from "./pages/Login";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/video/:id"
        element={
          <Layout>
            <VideoPage />
          </Layout>
        }
      />

      <Route
        path="/channel/:id"
        element={
          <Layout>
            <ChannelPage />
          </Layout>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
