import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icon = 'palette';
  public headerTitle= 'Anthony Ku Ong is watching the Coronavirus COVID-19 World Cases';
  @Output() themeChanged = new EventEmitter<any>();
  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeChanged.emit();
  }
}
