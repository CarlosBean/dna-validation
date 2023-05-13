import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue = '';
  result = '';

  handleInput(evt: Event) {
    this.inputValue = (evt.target as HTMLInputElement).value;
  }

  handleSubmit(evt: Event) {
    evt.preventDefault();
    this.isMutant(this.inputValue.split(','));
  }

  isMutant(dna: string[]) {
    this.result = '';

    for (const element of dna) {
      let currentLetter = element[0];
      let count = 1;

      for (let j = 1; j < element.length; j++) {
        if (element[j] === currentLetter) {
          count++;
        } else {
          currentLetter = element[j];
          count = 1;
        }
        if (count === 4) {
          this.result = 'MUTANTE';
          break;
        }
      }
    }

    if (!this.result) {
      this.result = 'HUMANO';
    }
  }
}
