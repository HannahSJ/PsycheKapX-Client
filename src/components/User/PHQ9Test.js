import React, { useState } from "react";
import { blankProblems, blankImpact, getSeverity } from "../phq9";
import Report from "../Report";
import Worksheet from "../Worksheet";
import styled from 'styled-components'

// import "./styles.css";

export default function PHQ9Test() {
  const modes = { worksheet: "worksheet", report: "report" };

  const [mode, setMode] = useState(modes.worksheet);
  const [severity, setSeverity] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [impact, setImpact] = useState(blankImpact);
  const [problems, setProblems] = useState(blankProblems);

  function updateProblem(index, score) {
    const problem = { ...problems[index] };
    problem.score = score;
    problem.indicatesDepression =
      problem.score != null && problem.score >= problem.severity;

    const newProblems = [...problems];
    newProblems[index] = problem;

    const totalScore = newProblems
      .map(p => parseInt(p.score, 10) || 0)
      .reduce((t, v) => t + (v || 0), 0);
    setTotalScore(totalScore);
    setProblems(newProblems);

    if (totalScore === 0) {
      setImpact({ ...impact, score: null });
    }

    setSeverity(getSeverity(totalScore, newProblems));
  }

  return (
    <Wrapper>
      <div className="wrap">

        <div className="App">
          {mode === modes.worksheet && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: 50,
                  right: 50,
                  fontSize: "0.7em"
                }}
              >
                <a
                  href="./#"
                  onClick={e => {
                    setSeverity("");
                    setTotalScore(0);
                    setImpact(blankImpact);
                    setProblems(blankProblems);
                    e.preventDefault();
                  }}
                >
                  Reset
                </a>
              </div>
              <Worksheet
                totalScore={totalScore}
                impact={impact}
                onImpactChange={setImpact}
                problems={problems}
                onProblemChange={updateProblem}
                onSubmit={event => setMode(modes.report)}
              />
            </>
          )}

          {mode === modes.report && (
            <Report
              totalScore={totalScore}
              impact={impact}
              problems={problems}
              severity={severity}
              onClose={() => setMode(modes.worksheet)}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .wrap {
    padding: 80px;
  }
`
// import React from 'react'

// const PHQ9Test = () => {
//   return (
//     <div>PHQ9Test</div>
//   )
// }

// export default PHQ9Test