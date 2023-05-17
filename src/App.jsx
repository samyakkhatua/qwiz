import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";

function App() {
  return (
    <BrowserRouter>
      <div>Samyak</div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/*" element={<ScorePage />} />
      </Routes>

    </BrowserRouter>
  );
}
 
export default App;
