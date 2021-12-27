import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-drops',
  templateUrl: './latest-drops.component.html',
  styleUrls: ['./latest-drops.component.css']
})
export class LatestDropsComponent implements OnInit {

  latestDrops = [
    {
      imgPath : '../assets/Sleeveless - Common.png',
      title : 'Sleeveless Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/Sleeveless - Rare.png',
      title : 'Sleeveless Doge',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/Sleeveless - Epic.png',
      title : 'Sleeveless Doge',
      rarity : 'Epic'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
