import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const Manual = () => {
  const [question, setQuestion] = useState([
    {
      question: "",
      option: [{ Option1: "" }],
    },
  ]);

  const AddQuestion = () => {
    setQuestion((prev) => {
      prev.push({
        question: "",
        option: [{ Option1: "" }],
      });
    });
  };

  const AddOption = (ev) => {
    console.log(ev.target.value);
    const index = ev.target.value;
    setQuestion((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        option: [
          ...updatedQuestions[index].option,
          { [`Option${question[index].option.length + 1}`]: "" },
        ],
      };
      return updatedQuestions;
    });

    console.log(question);
  };

  console.log(question);

  return (
    <div className="flex flex-row items-center justify-center w-full">
      <div className="w-3/4 mt-5 mb-5">
        {question &&
          question.map((questions, index) => {
            return (
              <div className="flex flex-col items-center justify-center">
                <TextField
                  className="w-full"
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  key={index}
                  maxRows={4}
                />

                <div className="flex flex-row flex-wrap items-center justify-around w-11/12 mt-5">
                  {questions.option.map((option, optionindex) => {
                    return (
                      <>
                        <TextField
                          className="w-2/6"
                          required
                          id="outlined-required"
                          label={`Option ${optionindex + 1}`}
                          defaultValue="Hello World"
                        />
                      </>
                    );
                  })}
                  <button
                    className="pt-2 pb-2 pl-5 pr-5 border border-gray-500 rounded-lg"
                    value={index}
                    onClick={AddOption}
                  >
                    {" "}
                    Add Options
                  </button>
                </div>
              </div>
            );
          })}
        {}
      </div>
    </div>
  );
};
