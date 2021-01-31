import { Component, OnInit } from '@angular/core';
import {Story} from '../story';
import {StoryDataService} from "../story-service.service";
import 'rxjs';
import {Headers} from "@angular/http";
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers:[StoryDataService]
})
export class HomeListComponent implements OnInit {
stories:Story[]

  constructor(private storyService:StoryDataService) { }
  public deleteStory(storyid):void{
    this.storyService.deleteStory(storyid);
  }
    ngOnInit() {
  this.storyService
    .getStories()
    .then((stories:Story[])=>{
      this.stories=stories.map(story=>{
        return story;
      });
    });


    }


}
