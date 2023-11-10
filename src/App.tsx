import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "../src/assets/goals.jpg";

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const addGoalHandler = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: "Learn React + TSC",
        description: "Learn them in depth",
      };
      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        Your course goals
      </Header>
      <button onClick={addGoalHandler}> Add goal </button>
      <ul>
        {goals.map((item) => (
          <li key={item.id}>
            <CourseGoal title={item.title}> {item.description}</CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
