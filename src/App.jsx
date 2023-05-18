import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="box-container">
        {/* Routes */}
        <Routes>

          {/* home page */}
          <Route path="/" element={<WelcomePage />} />
          
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/score" element={<ScorePage />} />

          {/* 404 path */}
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
