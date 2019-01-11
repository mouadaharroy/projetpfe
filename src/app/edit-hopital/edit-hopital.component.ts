import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/Hopital';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { HopitalsService } from '../../services/hopitals.service';

@Component({
  selector: 'app-edit-hopital',
  templateUrl: './edit-hopital.component.html',
  styleUrls: ['./edit-hopital.component.css']
})
export class EditHopitalComponent implements OnInit {
  mode:number=1;
  A:any;
  hopital:Hopital=new Hopital();
  idHopital:number;
    constructor(public activatedRoute:ActivatedRoute,public hopitalservice:HopitalsService,public router:Router) {
      this.idHopital=activatedRoute.snapshot.params['id'];
    }
  
    ngOnInit() {
      this.hopitalservice.getHopital(this.idHopital).subscribe(response=>{
          this.A=response;
          this.hopital=this.A;
      })
    }
    updateHopital(){
  this.hopitalservice.updateHopital(this.hopital).subscribe(response=>{
    console.log("Bien mise a jour");
    alert("Mise a jour effectuée");
    this.router.navigate(['hopitals']);
  
  })
    }
    saveHopital(){
        this.mode=2;
      };

}
