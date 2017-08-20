import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  @Input() name: String;

  constructor() {
  }

  ngOnInit() {
  }

}
