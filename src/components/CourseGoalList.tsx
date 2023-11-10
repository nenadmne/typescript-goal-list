import CourseGoal from "./CourseGoal";
import { CourseGoals } from "../App";

type CourseGoalsListProps = {
  goals: CourseGoals[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalsListProps) {
    
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoal title={item.title} id={item.id} onDelete={onDelete}>
            {item.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
