import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

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

    getFaceSnapById(faceSnapId: string): FaceSnap {
      const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!foundFaceSnap) {
          throw new Error(`FaceSnap with id ${faceSnapId} not found`);
      }
      return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, SnapType: SnapType): void {
        const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(SnapType);
    }
}