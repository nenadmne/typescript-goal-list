import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "../src/assets/goals.jpg";

export type CourseGoals = {
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
        description: "Learn these languages in depth",
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
      <CourseGoalList goals={goals} />
    </main>
  );
}
