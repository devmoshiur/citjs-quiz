import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css";
import QuestionMeta from "./QuestionMeta";

function Create() {
  const [inputFeilds, setInputFeilds] = useState([
    {
      questionName: "",
      A: "",
      B: "",
      C: "",
      D: "",
      correctAnswer: "",
    },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFeilds];
    values[index][event.target.name] = event.target.value;
    setInputFeilds(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFeilds", inputFeilds);
  };

  const handleAddInput = () => {
    setInputFeilds([
      ...inputFeilds,
      { questionName: "", A: "", B: "", C: "", D: "", correctAnswer: "" },
    ]);
  };
  const handleRemoveInput = (index) => {
    const values = [...inputFeilds];
    values.splice(index, 1);
    setInputFeilds(values);
  };

  return (
    <div>
      <div className="container">
        <h5 className="title-text center">Create new question</h5>
        <div className="card">
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              {/* Heading */}
              <QuestionMeta />

              {/* Dynamic input field start */}
              {inputFeilds.map((inputFeild, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col s12 m12">
                      <h5>{index + 1}.</h5>
                      <div className="input-field">
                        <label htmlFor="questionName">Question Name</label>
                        <input
                          type="text"
                          name="questionName"
                          id="questionName"
                          value={inputFeild.questionName}
                          onChange={(event) => handleChangeInput(index, event)}
                        />
                      </div>
                      <div className="row">
                        <div className="col s12 m6">
                          <div className="input-field">
                            <label htmlFor="A">A.</label>
                            <input
                              type="text"
                              name="A"
                              id="A"
                              value={inputFeild.A}
                              onChange={(event) =>
                                handleChangeInput(index, event)
                              }
                            />
                          </div>
                        </div>
                        <div className="col s12 m6">
                          <div className="input-field">
                            <label htmlFor="B">B.</label>
                            <input
                              type="text"
                              name="B"
                              id="B"
                              value={inputFeild.B}
                              onChange={(event) =>
                                handleChangeInput(index, event)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 m6">
                          <div className="input-field">
                            <label htmlFor="C">C.</label>
                            <input
                              type="text"
                              name="C"
                              id="C"
                              value={inputFeild.C}
                              onChange={(event) =>
                                handleChangeInput(index, event)
                              }
                            />
                          </div>
                        </div>
                        <div className="col s12 m6">
                          <div className="input-field">
                            <label htmlFor="D">D.</label>
                            <input
                              type="text"
                              name="D"
                              id="D"
                              value={inputFeild.D}
                              onChange={(event) =>
                                handleChangeInput(index, event)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <div className="input-field">
                            {" "}
                            <label htmlFor="correctAnswer">
                              Correct Answer
                            </label>
                            <input
                              type="text"
                              name="correctAnswer"
                              id="correctAnswer"
                              value={inputFeild.correctAnswer}
                              onChange={(event) =>
                                handleChangeInput(index, event)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <Link
                        class="btn-floating btn-small waves-effect waves-light red action-btn"
                        onClick={() => handleRemoveInput(index)}
                      >
                        <i class="material-icons">delete</i>
                      </Link>
                      <Link
                        class="btn-floating btn-small waves-effect waves-light blue action-btn"
                        onClick={() => handleAddInput()}
                      >
                        <i class="material-icons">add</i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Dynamic input field start */}

              <div className="input-feild">
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onSubmit={handleSubmit}
                >
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
