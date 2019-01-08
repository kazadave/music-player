import { Component, OnInit, Input } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() url: string = null;
  audio = null;
  constructor() { }

  ngOnInit() {
    this.audio = this.url;
  }

}
