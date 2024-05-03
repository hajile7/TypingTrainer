import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor() {
    this.getNextChar();
  }
  
  letters:string[] = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's','t','u','v','w','x','y','z']; 

  numbers:string[] = ['0','1', '2', '3', '4', '5','6','7','8','9']

  symbols:string[] = [']', '[', '(',')','{','}','|','&','^','~','`','@','#','$','%',',','.','!','?',';',':','\'','\"','\\','/','-','+','*','=','<','>']

  preferences:string[] = [];
  
  rand:number = Math.floor(Math.random() * 25);

  currChar:string = this.preferences[0];

  prevChar:string = "";

  arrSize:number = this.preferences.length;

  correct:boolean = false;

  getRandomInt():number {
    return this.rand = Math.floor(Math.random() * (this.arrSize));
  }

  getRandomCharacter() {
    this.currChar = this.preferences[this.rand]
  } 
  
  getNextChar() {
    this.prevChar = this.currChar;
    this.getRandomInt();
    this.getRandomCharacter();
  }

  onInput(event: any) {
    const lastTypedChar: string = event.target.value.slice(-1);
    if (this.currChar == lastTypedChar) {
      this.correct = true;
    }
    else {
      this.correct = false;
    }
    this.getNextChar();
  }

  addPref(event: any) {
    if(!this.preferences.includes(event.target.innerText)) {
      this.preferences.push(event.target.innerText);
      this.arrSize = this.preferences.length;
    }
  }

  resetPrefs() {
    this.preferences = [];
  }

}
