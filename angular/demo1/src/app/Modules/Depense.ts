import {Facture} from "./Facture";
import {ContatDeMarche} from "./ContatDeMarche";


export class Depense {
  id !:number
  dateInsertion !:string
  objetFacture !:string
  numFacture !:string
  devise !:string
  montantFactureTND !:string
  description !:string
  statutFacture !:string
  facture :Facture
  contrat :ContatDeMarche

}
