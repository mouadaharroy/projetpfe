import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/Hopital';
import { HopitalsService } from '../../services/hopitals.service';

@Component({
  selector: 'app-ajouter-hopital',
  templateUrl: './ajouter-hopital.component.html',
  styleUrls: ['./ajouter-hopital.component.css']
})
export class AjouterHopitalComponent implements OnInit {

  
  hopital:Hopital=new Hopital();
  mode:number=1;
    constructor(public hopitalService:HopitalsService) { }
  
    ngOnInit() {
    }
    saveHopital(){
      this.hopitalService.saveHopital(this.hopital).subscribe(data=>{
        console.log(data);
        this.mode=2;
      });
  }
}
