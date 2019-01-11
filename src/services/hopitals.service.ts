
import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from '@angular/common/http';
import { Hopital } from "../app/models/Hopital";

@Injectable()

export class HopitalsService{

    constructor(public http:HttpClient) { }
    getHopitals(){
        return this.http.get("http://localhost:8080/chercherHopitals")
    }
    getRecherche(motCle:String,page:number,size:number){
        return this.http.get("http://localhost:8080/chercherHopitals?mc="+motCle+"&size="+size+"&page="+page+"")
       }

       saveHopital(hopital:Hopital){
        return this.http.post("http://localhost:8080/hopitals",hopital);
      }
      updateHopital(hopital:Hopital){
        return this.http.put("http://localhost:8080/hopitals/"+hopital.id,hopital);
      }
      onDeleHopital(id:number){
        return this.http.delete("http://localhost:8080/hopitals/"+id);
      }
      getHopital(id:number){
        return this.http.get("http://localhost:8080/hopitals/"+id);
      }
      


}

