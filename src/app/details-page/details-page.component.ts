

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import {StoryDataService} from "../story-service.service";
import {Story} from "../story";
import {switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [StoryDataService]
})





export class DetailsPageComponent implements OnInit {

  constructor(
    private StoryDataService: StoryDataService,
    private route: ActivatedRoute,
    private router: Router

  ) { }




  @Input()
  newStory: Story;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.StoryDataService.getSingleStory(params['storyid'],)
      }))

      .subscribe((newStory:Story) => {
        this.newStory = newStory;
        this.pageContent.header.id = newStory._id;
        this.pageContent.header.name = newStory.name;
        this.pageContent.header.type = newStory.type;
        
        this.pageContent.header.author = newStory.author;
        
        this.pageContent.header.description = newStory.description;
        
        // console.log(Story);
        //return(newStory);

      });
  }
  public updatestory(newStory): void {
    //newStory._id=this.pageContent.header.id;
    newStory.name=this.pageContent.header.name;
    newStory.type=this.pageContent.header.type;
    newStory.author=this.pageContent.header.author;
    newStory.description=this.pageContent.header.description;
    
   
    console.log(newStory._id);
    this.StoryDataService.updatestory(newStory);

    this.router.navigate(['']);


  }
  deletestory(storyid: String): void {
    this.StoryDataService.deleteStory(storyid);
    this.router.navigate(['']);

  }
  pageContent = {
    header : {
      id:'',
      name:'',
      body:'',
      type:'',
     
     
      author:'',
      description: ''
     
    }
  };



}

