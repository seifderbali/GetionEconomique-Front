import {BudgetInvestissement} from "./BudgetInvestissement";

export class ContatDeMarche {
  id !:number
  reference !:string
  objetContrat !:string
  intituleProjet !:string
  montantHT !:string
  montantTTC !:string
  devise !:string
  delaiGarantie !:string
  observation !:string
  dateAcquisition !:Date
  dateReceptionProvisoire !:Date
  dateReceptionDefinitive !:Date
}
