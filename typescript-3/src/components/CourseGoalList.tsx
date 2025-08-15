import { type ReactNode } from "react";
import { type CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";
import { InfoGoal } from "./InfoGoal";

type CourseGoalListProps = {
  goals: CourseGoals[];
  onDeleteHandler: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteHandler }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return <InfoGoal mode="hint">Come on add some goals Dude....</InfoGoal>;
  }

  let warningNode: ReactNode;
  if (goals.length >= 0) {
    warningNode = (
      <InfoGoal mode="warning" severity="high">
        You are adding too many on your plate dude.......{" "}
      </InfoGoal>
    );
  }
  return (
    <div>
      {warningNode}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteHandler}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
