"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Comment } from "../../types/grave";
import { useForm } from "react-hook-form";

interface Props {
  graveId: string;
  initialCondolence: Comment[];
}

type FormData = {
  comment: string;
};

export const CondolenceSection = ({ graveId, initialCondolence }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { data: session } = useSession();
  const [condolence, setCondolence] = useState(initialCondolence);

  const username = session?.user?.username;

  const onSubmit = async (data: FormData) => {
    if (!username) return alert("Увійдіть щоб залишити коментар");

    const res = await fetch(`/api/graveyard/${graveId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        addCondolence: true,
        comment: data.comment,
      }),
    });

    if (res.ok) {
      const updatedGrave = await res.json();
      setCondolence(updatedGrave.condolence);
      reset(); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("comment", { required: "Введіть текст коментаря" })}
          placeholder="Залишити коментар..."
        />
        <button type="submit">Відправити</button>
      </form>

      <ul>
        {condolence.map((c, i) => (
          <li key={i}>
            <strong>{c.commentator}:</strong> {c.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};