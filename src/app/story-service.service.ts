import { Injectable } from '@angular/core';
import {Story} from './story';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Http,Response} from '@angular/http';
import {parseHttpResponse} from "selenium-webdriver/http";
import { throwError } from 'rxjs';
import { Request } from './model/request';
import { catchError, map,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StoryDataService {
  private storiesUrl='http://localhost:3000/api/stories';


  constructor(private http:Http) { }
  customerRequest(request: Request){
    return this.http.post(this.storiesUrl + '/api/service_request',{
      customer_info : {
        first_name : request.customer_info.first_name,
        last_name : request.customer_info.last_name,
        email : request.customer_info.email,
        phone : request.customer_info.phone,
        address : request.customer_info.address,
      },
      snow_removal : request.snow_removal,
      grass_cutting : request.grass_cutting,
      indoor_cleaning : request.indoor_cleaning,
      service_date: request.service_date        
    }).pipe(
        map(res => res),
        catchError(error => throwError(error.message || error))
    );
  }

  

  getStories():Promise<void | Story[]>{
    return this.http.get(this.storiesUrl)
      .toPromise()
      .then(response=>response.json() as Story[])
      .catch(this.handleError);
  }
  getSingleStory(storyId:String):Promise<void|Story>{
    return this.http.get(this.storiesUrl+'/'+storyId)
      .toPromise()
      .then(response=>response.json()as Story)
      .catch(this.handleError);
  }
  createStory(newStory:Story):Promise<void|Story>{

    return this.http.post(this.storiesUrl,newStory)
      .toPromise()
      .then(response=>response.json() as Story)
      .catch(this.handleError)
      ;
  }
  updatestory(newStory):Promise<void|Story>{
    console.log("in update function return::::0"+newStory._id);
    var putURL = this.storiesUrl + '/' + newStory._id;
    return this.http.put(putURL, newStory
    )
      .toPromise()
      .then(response=>response.json()as Story)
      .catch(this.handleError);
  }
  deleteStory(storyId:String):Promise<void| String> {
    if (confirm("Are you sure?")) {
      return this.http.delete(this.storiesUrl + '/' + storyId)
        .toPromise()
        .then(response => response.json() as String)
        .catch(this.handleError);
    }
  }


  private handleError(error:any){
    console.log("error");
  }
}
