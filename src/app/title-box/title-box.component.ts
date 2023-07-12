import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Output() selectComponent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  click(component: String): void {
    this.selectComponent.emit(component);
  }

  openLink(url: string): void {
    this.renderer.setAttribute(window.open(url, '_blank'), 'noopener', 'true');
  }

}
