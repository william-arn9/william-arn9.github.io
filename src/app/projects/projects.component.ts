import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  linkOut(url: string): void {
    this.renderer.setAttribute(window.open(url, '_blank'), 'noopener', 'true');
  }

}
