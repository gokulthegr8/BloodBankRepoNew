import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-blood-availability-page',
  templateUrl: './blood-availability-page.component.html',
  styleUrls: ['./blood-availability-page.component.css']
})
export class BloodAvailabilityPageComponent implements OnInit {
public blood:any=[];
  constructor(private customer:CustomerService,private router:Router,private db: DatabaseService) { }
  ngOnInit() {
    this.db.getBloodQtyApos().subscribe((dbb)=>{
      console.log(dbb);
      
      this.blood=JSON.stringify(dbb);
      this.blood=this.blood.split(":");
      this.blood=this.blood[1].split("}");
      this.blood=this.blood[0];
   
     
    })  }
logout(){
  this.customer.deleteToken();
  this.router.navigateByUrl('/homepage');
}

}