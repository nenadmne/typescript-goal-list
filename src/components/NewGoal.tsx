import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAdd: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAdd(enteredGoal, enteredSummary);

    console.log(enteredGoal, enteredSummary)
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal"> Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary"> Short summary </label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button> Add goal </button>
      </p>
    </form>
  );
}
