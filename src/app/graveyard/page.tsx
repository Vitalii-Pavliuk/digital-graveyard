import { getGraveyard } from "../../lib/services/grave.service";
import { Grave } from "../../types/grave";
import { GraveCard } from "../../components/GraveCard/GraveCard";


export default async function GraveYard() {

  const graveyard: Grave[] = await getGraveyard();

return (
  <>
  <div>
    {graveyard.map((grave) => (
<GraveCard key={grave._id} graveyard={grave} />
    ))}
  </div>
  </>
);
}