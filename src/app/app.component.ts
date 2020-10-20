import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public person: Person = {
    name: "John Doe",
    age: 30
  }

  public check() {
    console.log("PARENT view resreshing...")
  }

  public reassign() {
    this.person = {
      name: this.person.name,
      age: this.person.age
    }
  }

}
