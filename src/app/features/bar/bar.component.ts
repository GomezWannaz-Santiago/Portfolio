import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';


@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {
  constructor(private movement : MovementService) {

    
  }

  ngOnInit(): void {
    this.movement.moveBar();    
  }
  
  
}
