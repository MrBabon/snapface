import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {

    this.faceSnaps = [
      new FaceSnap(
        'Face Snap #1',
        'Le moment de vérité...',
        'https://picsum.photos/200/300',
        new Date(),
        10
      ),
      new FaceSnap(
        'Face Snap #2',
        'Le moment de vérité...',
        'https://picsum.photos/200/300',
        new Date(),
        100
      ),
      new FaceSnap(
        'Face Snap #3',
        'Le moment de vérité...',
        'https://picsum.photos/200/300',
        new Date(),
        300
      )
    ]

    this.faceSnaps[1].setLocation('Paris');
  }
}
