import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  image1:string = "/assets/adminimg.png";

  image2:string = "/assets/userimg.png";
  ngOnInit(): void {
  }

}
