import React from "react";

export default function FormRow({ problem, onChange, i }) {
  const rowClass = problem.indicatesDepression ? "indicates-depression" : "";

  return (
    <tr className={rowClass}>
      <td>
        <strong>{i + 1}</strong>
      </td>
      <td>{problem.description}</td>
      <td>
        <input
          required
          type="text"
          inputMode="numeric"
          style={{ width: "30px", textAlign: "right" }}
          maxLength={1}
          value={problem.score ?? ""}
          onFocus={e => e.target.select()}
          onInput={e => e.target.select()}
          onChange={event => {
            var value = event.target.value;

            if (Object.keys(problem.options).indexOf(value) > -1) {
              onChange(event.target.value);
            } else {
              onChange(null);
            }
          }}
          onKeyDown={event => {
            if (event.keyCode === 13) {
              const form = event.target.form;
              const index = Array.prototype.indexOf.call(form, event.target);
              const next = form.elements[index + 1] ?? form.elements[0];

              next.focus();
              event.preventDefault();
            }
          }}
        />
      </td>
      <td
        style={{
          fontSize: "0.7em",
          textAlign: "center",
          minWidth: "5em",
          width: "5em"
        }}
      >
        {problem.score != null ? problem.options[problem.score] : "-"}
      </td>
    </tr>
  );
}
