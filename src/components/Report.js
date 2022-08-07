import React, { useState, useEffect, useCallback } from "react";
import { problemOptions, impactOptions } from "./phq9";
import { formatDate } from "./util";

// import "./Report.css";

export default function Report({
  severity,
  totalScore,
  problems,
  impact,
  onClose
}) {
  const date = formatDate(new Date());
  const [copyMessage, setCopyMessage] = useState("");

  const nearlyEveryDay = problems.filter((p, i) => i !== 8 && p.score === "3");
  const mostDays = problems.filter((p, i) => i !== 8 && p.score === "2");
  const someDays = problems.filter((p, i) => i !== 8 && p.score === "1");
  const never = problems.filter(p => p.score === "0");
  const suicidalIdeation = problems[problems.length - 1];
  const impactAssessment = impactOptions[impact.score] ?? false;

  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth"
      },
      500
    );
  }, []);

  const callbackRef = useCallback(node => {
    if (node?.innerText) {
      navigator.clipboard
        .writeText(node.innerText)
        .then(
          p => setCopyMessage("Successfully copied report to clipboard."),
          p => setCopyMessage("Failed to copy report to clipboard.")
        );
    }
  }, []);

  return (
    <div>
      <div id="Advisories">
        {suicidalIdeation.score > 0 && (
          <div
            style={{
              color: "white",
              background: "tomato",
              border: "1px solid black",
              padding: "14px 8px",
              margin: "-8px -8px 34px",
              textAlign: "center",
              fontSize: "1.6em"
            }}
          >
            <strong>NOTE: </strong>
            {/* Columbia Screener is indicated based on suicidal ideation. */}
          </div>
        )}
      </div>
      <div id="ReportContents" ref={callbackRef}>
        <h3
          id="ReportHeader"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div>PHQ-9 &#9;</div>
          <div>{date}&#9;</div>
          <div>Score: {totalScore}</div>
        </h3>

        <hr />
        <br />

        <h4>Indication: {severity}</h4>

        {impactAssessment && (
          <>
            <h4>
            ผู้ใช้งานแจ้งมาว่าปัญหาเหล่านี้ทำให้ชีวิตประจำวันของเรา{" "}ไปหมด
              {impactAssessment.toLowerCase()}.
            </h4>
            {suicidalIdeation.score > 0 && (
              <h4>
                ผู้ใช้งานแจ้งความคิดว่าตายหรือทำร้ายตัวเองดีกว่า{" "}
                {problemOptions[suicidalIdeation.score].toLowerCase() + " "}
                during the reporting period.
              </h4>
            )}
          </>
        )}

        <hr />
        <br />

        <h3>PHQ-9 Details</h3>

        {nearlyEveryDay.some(() => true) && (
          <p>
            The client experienced these problems nearly every day:
            <ul>
              {nearlyEveryDay.map(p => (
                <li>{p.description}</li>
              ))}
            </ul>
          </p>
        )}
        {mostDays.some(() => true) && (
          <p>
            ผู้ใช้ประสบปัญหาเหล่านี้เกือบทุกวัน:
            <ul>
              {mostDays.map(p => (
                <li key={p.description}>{p.description}</li>
              ))}
            </ul>
          </p>
        )}
        {someDays.some(() => true) && (
          <p>
            The client experienced these problems on several days:
            <ul>
              {someDays.map(p => (
                <li key={p.description}>{p.description}</li>
              ))}
            </ul>
          </p>
        )}
        {never.some(() => true) && (
          <p>
            The client never experienced these problems:
            <ul>
              {never.map(p => (
                <li>{p.description}</li>
              ))}
            </ul>
          </p>
        )}

        <hr />
        <br />

        <h3>PHQ-9 Worksheet Responses</h3>
        <p>
          {problems.map((p, i) => (
            <>
              {i + 1}. {p.score}
              <br />
            </>
          ))}
          10. {impact.score}
        </p>
      </div>

      <br />

      <button onClick={onClose}>Close report</button>

      <h6>{copyMessage}</h6>
    </div>
  );
}