import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public colors = [
    "green",
    "purple",
    "orange",
    "blue",
    "yellow"
  ]
  constructor() { }

  public randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.colors[Math.floor(Math.random() * (max - min +1)) + min];
  }

  public getColor() {
    return interval(1000).pipe(
      map( _ => this.randomColor(0, this.colors.length -1))
    )
  }
}
