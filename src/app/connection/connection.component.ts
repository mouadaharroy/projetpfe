import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
 @Input() login;
 @Input() motPasse;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Cnx(){if(this.login==="mouad"&& this.motPasse==="123"){
      this.router.navigate(['hopitals']);
  }else{
    this.router.navigate(['premier']);
  }

  }
}
