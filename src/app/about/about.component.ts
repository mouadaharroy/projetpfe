import { Component, OnInit } from '@angular/core';
import { Hopital } from '../models/Hopital';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { HopitalsService } from '../../services/hopitals.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

}
