import goalsimg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { NewGoal } from "./components/NewGoal.tsx";

export type CourseGoals = {
  id: number;
  title: string;
  description: string;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = (newGoal: CourseGoals) => {
    console.log(newGoal);
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const onDeleteHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsimg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal handleAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteHandler={onDeleteHandler} />
    </main>
  );
}
