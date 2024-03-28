import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


type Color = any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wissam-alshohof.github.io';
  color = model<Color>();

  setColor(e:any) {
    console.log(e);
    this.color.set(e.target.value as string);
  document.body.setAttribute('style',`--bgClr: ${this.color()};`)
  }
}
