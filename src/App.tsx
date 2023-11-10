import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "../src/assets/goals.jpg";
import NewGoal from "./components/NewGoal";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    const newGoal: CourseGoals = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const deleteHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        Your course goals
      </Header>
      <NewGoal onAdd={addGoalHandler} />
      <CourseGoalList goals={goals} onDelete={deleteHandler} />
    </main>
  );
}
