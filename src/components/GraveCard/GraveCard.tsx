import { Grave } from "../../types/grave";

interface Props {
  graveyard: Grave;
}

export const GraveCard = ({ graveyard }: Props) => {
  return (
    <>
      <h3>{graveyard.projectName}</h3>
    </>
  );
}
