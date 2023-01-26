import { Component } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  image:any;
  selectimage(e:any){
    this.image=e.target.files[0];
    console.log(this.image)
  }

  hero={
    name:'',
    power:0,
  }
  ajouter(){
    let formdata=new FormData();
    formdata.append('name',this.hero.name);
    formdata.append('power',this.hero.power.toString());
    formdata.append('image',this.image);
    this._shared.createnewHero(formdata)
      .subscribe(
        res=>{
          this.hero={
            name:'',
            power:0,
          }
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );
/*    this._shared.heros.push(this.hero)
    this.hero={
      name:'',
      power:0,
      imageurl:'',
    }
    console.log(this.hero)*/
  }
  constructor(public  _shared:SharedService) {
  }

}
