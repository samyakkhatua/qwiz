import { useNavigate } from "react-router-dom"

const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="box textcenter">
        <h1 className="title">Welcome to Quiz Challenge</h1>
        <div className="description">
            <p>You will be presented 3 MCQs</p>
            <p>Can you Score 100%</p>

        </div>

        <button className="btn" onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  )
}

export default WelcomePage