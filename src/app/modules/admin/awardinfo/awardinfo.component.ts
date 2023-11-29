import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  username: string;
  achievements: number;
  streak: number;
  treasures: number;
  discoveries: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
  {username: 'Rahul', achievements: 200, streak: 20, treasures: 5, discoveries:4, total:229  },
];



@Component({
  selector: 'app-awardinfo',
  templateUrl: './awardinfo.component.html',
  styleUrls: ['./awardinfo.component.css'],

})
export class AwardinfoComponent implements OnInit {

  public title = "Awards";

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['username', 'achievements', 'streak', 'treasures', 'discoveries', 'total'];
  dataSource = ELEMENT_DATA;

  achivementData=[{
    level: "Level 1",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 2",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 3",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 4",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  ]

  streaktData=[{
    level: "Level 1",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 2",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 3",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 4",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  ]

  treasuretData=[{
    level: "Level 1",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 2",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 3",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  {
    level: "Level 4",
    title: "Streaks Calendar",
    ranking: "45/100",
    earn: "Earn 4000 xp" 
  },
  ]
}
