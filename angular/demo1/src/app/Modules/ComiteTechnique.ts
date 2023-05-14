import {DateValidation} from "./DateValidation";
import {ProjetInvestissment} from "./ProjetInvestissment";

export class ComiteTechnique {
  id !:number
  annee !:string
  statutProjet !:string
  axeDemande !:string
  typeDemande !:string
  observationComite !:string


  dateValidation :DateValidation
  projetInvestissment :ProjetInvestissment
}
