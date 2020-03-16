import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.scss'],
  host: {class: 'app__list'}
})
export class ListCasesComponent implements OnInit {
  title = 'list-cases';
  public searchContact: string;
  public data = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      phone: '859-496-2817',
      photo: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo: 'https://randomuser.me/api/portraits/women/67.jpg'
    }
  ];

  constructor() { }

  ngOnInit() { }

  filterContacts() {
    // const fo = new IgxFilterOptions();
    // fo.key = 'name';
    // fo.inputValue = this.searchContact;
    // return fo;
  }
}
