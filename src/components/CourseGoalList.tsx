import CourseGoal from "./CourseGoal";
import { CourseGoals } from "../App";

type CourseGoalsListProps = {
  goals: CourseGoals[];
};

export default function CourseGoalList({ goals }: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoal title={item.title}> {item.description}</CourseGoal>
        </li>
      ))}
    </ul>
  );
}
