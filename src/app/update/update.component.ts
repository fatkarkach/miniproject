import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements  OnInit{
  hero:any;
  id:any;
  constructor( private act: ActivatedRoute,private _shared:SharedService,private router:Router) {
  }
  update(){
    this._shared.updatehero(this.id,this.hero).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/list']);
      },error => {
        console.log(error)
      }
    )
  }
  ngOnInit():void {
    this.id=this.act.snapshot.paramMap.get('id');
    this._shared.getherobyid(this.id).subscribe(
      res=>{
        this.hero=res;
      },err=>{
        console.log(err);
      }
    )
    console.log(this.id);
  }

}
