import React, { useRef } from "react";
import { CourseGoals } from "../App";

type NewGoalProps = {
  handleAddGoal: (goal: CourseGoals) => void;
};

export const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current?.value || "";
    const enteredSummary = summary.current?.value || "";
    event.currentTarget.reset();    
    handleAddGoal({
      id: Math.random(),
      title: enteredGoal,
      description: enteredSummary,
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};
