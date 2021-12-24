import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-drops',
  templateUrl: './latest-drops.component.html',
  styleUrls: ['./latest-drops.component.css']
})
export class LatestDropsComponent implements OnInit {

  latestDrops = [
    {
      imgPath : '../assets/Doge.png',
      title : 'Sleeveless Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/Doge.png',
      title : 'Sleeveless Doge',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/Doge.png',
      title : 'Sleeveless Doge',
      rarity : 'Epic'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
