import { Component, OnInit ,Input} from '@angular/core';
import {Story} from "../story";
import {StoryDataService} from "../story-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[StoryDataService]
})
export class CreateComponent implements OnInit {

  public newStory: { name: string; type: string; author: string;  description: string }= {
    name: '',
    type: '',
    author:'',
    
    description: ''
    };
  constructor(private storyDataService:StoryDataService,
              private router: Router) { }

  ngOnInit() {
  }

  public createNewStory(newStory:Story):void{
    this.storyDataService.createStory(newStory);
    this.router.navigate(['']);
  }
}
