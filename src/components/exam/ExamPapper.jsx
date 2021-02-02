import React, { useState } from "react";
import "./ExamPapper.css";
// import QuestionCard from "./QuestionCard";

function ExamPapper() {
  const [questions, setQuestions] = useState([
    {
      qname: "What is your favourite topic?",
      A: "HTML",
      B: "CSS",
      C: "Javascript",
      D: "PHP",
      correctAnswer: "D",
    },
    {
      qname: "This is your second question?",
      A: "CDN",
      B: "Cloud",
      C: "Computer",
      D: "Real-time",
      correctAnswer: "A",
    },
  ]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <h4>20:21</h4>
        </div>
      </div>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <span className="card-title black-text">
                <h5>{question.qname}</h5>
              </span>
              <div className="row">
                <div className="col s12 m6">
                  <p>
                    <label>
                      <input name={index} type="radio" />
                      <span>{"A. " + question.A}</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name={index} type="radio" />
                      <span>{"B. " + question.B}</span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6">
                  <p>
                    <label>
                      <input name={index} type="radio" />
                      <span>{"C. " + question.C}</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name={index} type="radio" />
                      <span>{"D. " + question.D}</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="input-form">
          <button type="submit" class="waves-effect waves-light btn">
            Submit
          </button>
        </div>

        <div className="spacer-big"></div>
      </form>
    </div>
  );
}

export default ExamPapper;
