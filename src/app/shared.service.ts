import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private  http:HttpClient) {

  }
  private  url='http://127.0.0.1:3000/';
  heros:any[]=[];
  createnewHero(hero:any){
     return this.http.post(this.url +'hero/create',hero)

  }
  getALLHeros()
  {
    return this.http.get(this.url +'hero/all');
  }
  deletehero(id:any){
    return this.http.delete(this.url +'hero/supprimer/' + id);
  }
  getherobyid(id:any){
    return this.http.get(this.url +'hero/getbyid/'+ id);
  }
  updatehero(id:any,hero:any){
    return this.http.put(this.url +'hero/update/'+ id,hero);
  }
}
