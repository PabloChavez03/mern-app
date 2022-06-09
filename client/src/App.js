import { Routes, Route } from "react-router-dom";
import HomePage from "./react/pages/HomePage";
import FormPage from "./react/pages/FormPage";
import NotFoundPage from "./react/pages/NotFoundPage";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
