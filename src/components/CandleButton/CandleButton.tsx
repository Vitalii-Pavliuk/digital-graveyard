"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

interface Props {
  graveId: string;
  initialCandles: string[];
}

export const CandleButton = ({ graveId, initialCandles }: Props) => {
  const { data: session } = useSession();
  const [candles, setCandles] = useState(initialCandles);

  const username = session?.user?.username;
  const hasLit = username ? candles.includes(username) : false;

  const handleCandle = async () => {
    if (!username) return alert("Увійдіть щоб запалити свічку");
    if (hasLit) return;


const res = await fetch(`/api/graveyard/${graveId}`, {
  method: "PATCH",
  body: JSON.stringify({
    addCandle: true,
  }),
});


    if (res.ok) {
      const data = await res.json();
      setCandles(data.candles);
    }
  };

  return (
    <button onClick={handleCandle} disabled={hasLit}>
      🕯️ {candles.length} {hasLit ? "" : "Запалити свічку"}
    </button>
  );
};