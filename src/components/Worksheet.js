import React from "react";
import FormRow from "./FormRow";

export default function Worksheet({
  totalScore,
  problems,
  onProblemChange,
  impact,
  onImpactChange,
  onSubmit
}) {
  return (
    <div className="worksheet">
      <h1>PHQ-9</h1>
      <form
        onSubmit={e => {
          onSubmit();
          e.preventDefault();
        }}
      >
        <table>
          <tbody>
            {problems.map((problem, i) => (
              <FormRow
                key={problem.description}
                i={i}
                problem={problem}
                onChange={score => onProblemChange(i, score)}
              />
            ))}
          </tbody>
        </table>
        {totalScore > 0 && (
          <table>
            <tbody>
              <FormRow
                i={problems.length}
                problem={impact}
                onChange={score => onImpactChange({ ...impact, score })}
              />
            </tbody>
          </table>
        )}
        <button type="submit">View Report</button>
      </form>
    </div>
  );
}