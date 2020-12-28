import { Component } from '@angular/core';
import { lorem, random } from 'faker';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-typing-game';
  randomText = lorem.sentence()
  inputTextMatch = false

  onTyping(value: string) {
    if (this.randomText === value) {
      this.inputTextMatch = true
    }
  }
}
