import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-deferdemo',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './deferdemo.component.html',
  styleUrl: './deferdemo.component.css'
})
export class DeferdemoComponent {

}
