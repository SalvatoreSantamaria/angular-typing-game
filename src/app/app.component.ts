import { Component } from '@angular/core';
import { lorem, random } from 'faker';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-typing-game';
  randomText = lorem.sentence();
  inputTextMatch = false;
  enteredText = '';

  onTyping(value: string) {
    if (this.randomText === value) {
      this.inputTextMatch = true
    }

    this.enteredText = value;
  }

  compare(correctLetter:string, enteredText:string) {
    if (!enteredText) {
      return 'pending';
    }
    //if matching letters, return a string of 'correct', otherwise, return 'incorrect'
    //then style based on these returned classses
    return correctLetter === enteredText ? 'correct' : 'incorrect'
  }
}
