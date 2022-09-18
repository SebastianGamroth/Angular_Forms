import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-place',
  templateUrl: './seat-place.component.html',
  styleUrls: ['./seat-place.component.scss']
})
export class SeatPlaceComponent {

  image: any = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1]
  ];

}
