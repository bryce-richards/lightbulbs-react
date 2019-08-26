import React from "react";

export default () => {
  return (
    <div>
      <h1 className="display-8">How Many Lightbulbs?</h1>
      <hr className="my-2" />
      <p>
        <span>
          A given number of lightbulbs are lined up in a long hallway. Each
          lightbulb has its own switch that is currently switched off.{" "}
        </span>
        <br />
        <br />
        <span>
          A given number of people are lined up outside the entrance to the
          hallway. The first person walks through the hallway and switches every
          light. The second person walks through the hallway and switches every
          second light. The third person, every thid light. And so on.
        </span>
        <br />
        <br />
        <span>
          After the last person leaves the hallway, how many lights will be
          switched on, and which ones?
        </span>
      </p>
    </div>
  );
};
