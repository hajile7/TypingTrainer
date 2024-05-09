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

  keysPressed:number = 0;

  correctKeys:number = 0;

  accuracy:number = 0;

  startTime:number = 0;

  currentTime:number = 0;

  elapsedTime:number = 0;

  testDone:boolean = false;

  showPrefs:boolean = false;




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
    if(!this.startTime) {
      this.startTime = Date.now();
      this.updateTimer();
    }
    if(this.preferences.includes(lastTypedChar)) {
      this.keysPressed++;
      if (this.currChar == lastTypedChar) {
        this.correct = true;
        this.correctKeys++;
      }
      else {
        this.correct = false;
      }
      this.accuracy = Number.parseFloat((this.correctKeys/this.keysPressed).toFixed(2));
      this.getNextChar();
    }
  }

  updateTimer() {
    this.currentTime = Date.now();
    this.elapsedTime = Math.floor((this.currentTime - this.startTime) / 1000);

    if(this.elapsedTime >= 60) {
      this.testDone = true;
    }
    else {
      setTimeout(() => {
        this.updateTimer();
      }, 1000);
    }

  }

  addPref(event: any) {
    if(!this.preferences.includes(event.target.innerText)) {
      this.preferences.push(event.target.innerText);
      this.arrSize = this.preferences.length;
      if (this.preferences.length == 0) {
        this.getRandomCharacter();
      }
      else {
        this.getNextChar();
      }
    }
  }

  resetPrefs() {
    this.preferences = [];
    this.currChar = ""; 
    this.prevChar = "";
  }

  resetInstance() {

    //reset timer
    this.startTime = 0;
    this.currentTime = 0;
    this.elapsedTime = 0;
    this.testDone = false;

    //reset test values
    this.keysPressed = 0;
    this.correctKeys = 0;
    this.accuracy = 0;


  }

  togglePrefs() {
    if(this.showPrefs) {
      this.showPrefs = false;
    }
    else {
      this.showPrefs = true;
    }
  }

}
