import { getGrave } from "../../../lib/services/grave.service";
import { CandleButton } from "../../../components/CandleButton/CandleButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GravePage({ params }: Props) {
  const { id } = await params;
  const grave = await getGrave(id);

  if (!grave) return <p>Могилу не знайдено</p>;

  return (
    <div>
      <h1>{grave.projectName}</h1>
      <p><strong>Автор:</strong> {grave.userName}</p>
      <p><strong>Епітафія:</strong> {grave.epitaph}</p>
      <p><strong>Причина смерті:</strong> {grave.causeOfDeath}</p>
      <p><strong>Дата смерті:</strong> {new Date(grave.diedAt).toLocaleDateString()}</p>
      <p><strong>Мови:</strong> {grave.languages.join(", ")}</p>

      <CandleButton
        graveId={grave._id}
        initialCandles={grave.candles ?? []}
      />
    </div>
  );
}