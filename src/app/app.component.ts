import { Component } from '@angular/core';

interface Guest {
  id: number;
  name: string;
  isInvited: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lesson 4 : ngIf And ngFor';
  showInvite: boolean = true;
  guests: Guest[] = [
    {
      id: 0,
      name: 'Bisham',
      isInvited: true,
    },
    {
      id: 1,
      name: 'Hassan',
      isInvited: true,
    },
    {
      id: 2,
      name: 'Zaid',
      isInvited: true,
    },
    {
      id: 3,
      name: 'Freddy',
      isInvited: false,
    },
    {
      id: 4,
      name: 'Oatmar',
      isInvited: false,
    },
  ];

  changeInvite(id: number, invited: boolean) {
    this.guests = this.guests.map((guest) =>
      guest.id === id ? { ...guest, isInvited: !invited } : guest
    );
  }

  changeShowStatus() {
    this.showInvite = !this.showInvite;
  }
}
