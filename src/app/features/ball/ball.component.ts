import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-ball',
  standalone: true,
  imports: [],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss'
})
export class BallComponent implements OnInit {

  /**
   *
   */
  constructor(private movement : MovementService) {    
    
  }
  ngOnInit(): void {
    this.movement.moveBall(24, 50, 0);
  }
}
