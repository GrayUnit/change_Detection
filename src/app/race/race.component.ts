import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  public ponies = [
    { id: 1, color: "green" },
    { id: 2, color: "orange" },
    { id: 3, color: "purple" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("RACE view refresh....");
  }

}
