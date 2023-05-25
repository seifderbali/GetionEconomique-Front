import {DateValidation} from "./DateValidation";
import {Budget} from "./Budget";

export class ComiteTechnique {
  id !:number
  annee !:string
  statutProjet !:string
  axeDemande !:string
  typeDemande !:string
  observationComite !:string


  dateValidation :DateValidation
  budget :Budget
}
