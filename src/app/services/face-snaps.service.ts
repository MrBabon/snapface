import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
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
          ).withLocation('Paris'),
          new FaceSnap(
            'Face Snap #3',
            'Le moment de vérité...',
            'https://picsum.photos/200/300',
            new Date(),
            300
          )
    ]

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }
}