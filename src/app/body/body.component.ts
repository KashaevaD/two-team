import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

public team = [];
public isSelected = false;

private getJunior() {
    return [
      {
        name: 'Natali',
        surname: 'Uzva',
        avatar: 'assets/img/nataly.jpg'
      },
      {
        name: 'Alla',
        surname: 'Logozinskaya',
        avatar: 'assets/img/alla.jpg'
      },
      {
        name: 'Yaroslav',
        surname: 'Polubiedov',
        avatar: 'assets/img/yaroslav.jpg'
      },
      {
        name: 'Alex',
        surname: 'Komendantov',
        avatar: 'assets/img/alexJunior.jpg'
      }
    ];
  }

  private getTrainee() {
    return [
      {
        name: 'Dasha',
        surname: 'Kashaeva',
        avatar: 'assets/img/dasha.jpg'
      },
      {
        name: 'Alex',
        surname: 'Popov',
        avatar: 'assets/img/alex.jpg'
      },
      {
        name: 'Igor',
        surname: 'Mitropan',
        avatar: 'assets/img/igor.jpg'
      },
      {
        name: 'Andrey',
        surname: 'Suprun',
        avatar: 'assets/img/andrey.jpg'
      },
      {
        name: 'Evgen',
        surname: 'Krasnikov',
        avatar: 'assets/img/evgen.jpg'
      },
      {
        name: 'Alex',
        surname: 'Shakura',
        avatar: 'assets/img/alex2.jpg'
      },
      {
        name: 'Vitaliy',
        surname: 'Makogon',
        avatar: 'assets/img/evgen.jpg'
      }
    ];
  }

  private getMiddle() {
    return [
      {
        name: 'Pasha',
        surname: 'Lebedinsky',
        avatar: 'assets/img/pasha.png'
      },
      {
        name: 'Sergey',
        surname: 'Pereversiev',
        avatar: 'assets/img/sergey.jpg'
      }
    ];
  }

  private getStepan() {
    return [
      {
        name: 'Stepan',
        surname: 'Suvorov',
        avatar: 'assets/img/stepan.jpg'
      }
    ];
  }

  public chooseTeam(id) {
    if (id === 1) {
      this.team = this.getTrainee();
    }
    else if (id === 2) {
      this.team = this.getJunior();
    }
    else if (id == 3){
      this.team = this.getMiddle();
    }
    else {
      this.team = this.getStepan();
    }
    this.isSelected = true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
