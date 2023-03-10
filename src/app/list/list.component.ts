import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  heros:any;
  constructor(public  _shared:SharedService) {
  }
  delete(id:any){
    this._shared.deletehero(id).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() :void{
    this._shared.getALLHeros().subscribe(
        res=>{
          console.log(res);
          this.heros=res;
        },
        err=>{
          console.log(err);

    }
    )
  }

}
