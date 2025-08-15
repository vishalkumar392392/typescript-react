import { type FC, type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  id: number;
  onDelete: (id: number) => void;
};

const CourseGoal: FC<CourseGoalProps> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
