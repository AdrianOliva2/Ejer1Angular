import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  constructor(private jokeService:JokeService) {}

  ngOnInit(): void {

  }

  createJoke(setup: HTMLInputElement, punchline: HTMLInputElement) {
    if ((setup.value != null && setup.value != "") && (punchline.value != null && punchline.value != "")) {
      this.jokeService.addJoke(new Joke(setup.value, punchline.value));
      setup.value = "";
      punchline.value = "";
    }
  }

}
