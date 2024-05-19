import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BallComponent } from './features/ball/ball.component';
import { BarComponent } from './features/bar/bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BallComponent, BarComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
