import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-galler',
  templateUrl: './galler.component.html',
  styleUrls: ['./galler.component.css']
})
export class GallerComponent implements OnInit {
  
  ngOnInit() {
  }
  
  pageContentHome={
    header:{
      title:'My Story List',
      body:''
    }
  };

}
