import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-player';

  links = [
    'https://freewavesamples.com/files/Yamaha-V50-Metalimba-C2.wav',
    'https://freewavesamples.com/files/Yamaha-V50-Metalimba-C2.wav',
    'https://freewavesamples.com/files/Yamaha-V50-Metalimba-C2.wav',
    'https://freewavesamples.com/files/Yamaha-V50-Metalimba-C2.wav'
  ];
  play() {

  }

  pause() {

  }
}
