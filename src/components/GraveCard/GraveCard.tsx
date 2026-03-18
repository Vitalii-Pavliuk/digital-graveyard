import Link from "next/link";
import { Grave } from "../../types/grave";
import "./GraveCard.css"

interface Props {
  graveyard: Grave;
}

export const GraveCard = ({ graveyard }: Props) => {
  return (

        <Link 
      href={`/grave/${graveyard._id}`}
    >
    <div className="grave-card">
      <h3>{graveyard.projectName}</h3>

      <p><strong>Author:</strong> {graveyard.userName}</p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a href={graveyard.gitHubUrl} target="_blank" rel="noopener noreferrer">
          {graveyard.gitHubUrl}
        </a>
      </p>

      <p><strong>Epitaph:</strong> {graveyard.epitaph}</p>

      <p><strong>Description:</strong> {graveyard.description}</p>

      <p><strong>Cause of death:</strong> {graveyard.causeOfDeath}</p>

      <p><strong>Died at:</strong> {new Date(graveyard.diedAt).toLocaleDateString()}</p>

      <p>
        <strong>Languages:</strong> {graveyard.languages.join(", ")}
      </p>

      <p>
        <strong>Candles:</strong> {graveyard.candles?.length || 0}
      </p>

      <p>
        <strong>Condolences:</strong> {graveyard.condolence?.length || 0}
      </p>
    </div>
    </Link>
  );
};
