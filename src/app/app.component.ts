import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  letters:string[] = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's','t','u','v','w','x','y','z']; 

  numbers:string[] = ['0','1', '2', '3', '4', '5','6','7','8','9']

  symbols:string[] = [']', '[', '(',')','{','}','|','&','^','~','`','@','#','$','%',',','.','!','?',';',':','\'','\"','\\','/','-','+','*','=','<','>']

  rand:number = Math.floor(Math.random() * 25);

  currChar:string = this.letters[0];

  arrSize:number = this.letters.length;

  correct:boolean = false;

  chooseRandom(characters:string[]): string {
    let result:string = "";

    return result;
  }

  getRandomInt() {
    this.rand = Math.floor(Math.random() * (this.arrSize));
  }

  getRandomCharacter() {
    this.currChar = this.letters[this.rand]
  } 

  onInput(event: any) {
    if (this.currChar == event.target.value) {
      this.correct = true;
    }
    this.getRandomInt();
    this.getRandomCharacter();
  }





  test() {
    this.symbols.forEach((s) => {
      console.log(s + " " + this.symbols.indexOf(s));
    })
  }

}
