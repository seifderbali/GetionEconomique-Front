import {EntiteSI} from "./EntiteSI";
import {Budget} from "./Budget";

export class ProjetInvestissment {
  id !:number
  codeProjet !:string
  intituleProjet !:string
  descriptionSomaire !:string
  categorie !:string
  classification !:string
  natureBesoin !:string
  type !:string
  quantite !:number
  prixUnitaireTTC !:number
  entiteSi !:EntiteSI
  budget !:Budget
}
