import { Component, OnInit } from '@angular/core';
//import {Http} from "@angular/http";
//import "rxjs/add/operator/map";
//import { url } from 'inspector';
//import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { HopitalsService } from '../../services/hopitals.service';
import { Router } from '../../../node_modules/@angular/router';
import { Hopital } from '../models/Hopital';
//import { HopitalsService } from '../../services/hopitals.service';
@Component({
  selector: 'app-hopitals',
  templateUrl: './hopitals.component.html',
  styleUrls: ['./hopitals.component.css']
})
export class HopitalsComponent implements OnInit {
  pageHopitals:any;
  motCle:string="";
  pageCurrant:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:HttpClient,public hopitalService:HopitalsService,private router: Router) { }

  ngOnInit() {
  
  }
  doSearch(){
    this.hopitalService.getRecherche(this.motCle,this.pageCurrant,this.size).subscribe((data)=>{
      this.pageHopitals=data;
      this.pages=new Array(data['totalPages']);
    });
  }

  gotoPage(i:number){
    this.pageCurrant=i;
    this.doSearch();
  }


  Chercher(){
    this.doSearch()
  }
  onEditHopital(id:number){
    this.router.navigate(['edit-Hopital',id]);

  }
  onDeleHopital(c:Hopital){
    let confirm=window.confirm('Voulze supp ?');
    if(confirm==true)
    {
      this.hopitalService.onDeleHopital(c.id).subscribe(response=>{
        this.pageHopitals.content.splice(
          this.pageHopitals.content.indexOf(c),1
        )
      })
    }

  }
  
  //ngOnInit() {
    
   // this.http.get("http://localhost:8080/chercherHopitals")

  //}

}
