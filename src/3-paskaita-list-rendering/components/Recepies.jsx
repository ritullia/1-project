import { Reciep } from "./Reciep";
import { receipes } from "../duomenys/recipiesData";

export const Recepies = () => {
  const reciepArr = receipes.map((reciep) => {
    console.log("Receptai", reciep);
    return <Reciep key={reciep.id} reciep={reciep} />;
  });

  return (
    <>
      <h1>Receptai</h1>
      <div>
        <ul>{reciepArr}</ul>
      </div>
    </>
  );
};
