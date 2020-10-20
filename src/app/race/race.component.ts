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
  public colors = [
    "green",
    "purple",
    "orange",
    "blue",
    "yellow"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("RACE view refresh....");
  }

  public changeColor() {
    //this.ponies[0].color = this.randomColor(0, this.colors.length -1);
    const pony = this.ponies[0];
    this.ponies[0] = { ...pony, color: this.randomColor(0, this.colors.length -1)};
    // this.ponies.forEach(
    //   (p, index) => {
    //     this.ponies[index] = {...p, color: this.randomColor(0, this.colors.length -1)}
    //   }
    // )
  }

  public randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.colors[Math.floor(Math.random() * (max - min +1)) + min];
  }

}
