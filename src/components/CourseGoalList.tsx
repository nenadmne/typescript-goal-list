import CourseGoal from "./CourseGoal";
import { CourseGoals } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalsListProps = {
  goals: CourseGoals[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalsListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You are collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((item) => (
          <li key={item.id}>
            <CourseGoal title={item.title} id={item.id} onDelete={onDelete}>
              {item.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
