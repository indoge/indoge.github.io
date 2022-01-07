import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-drops',
  templateUrl: './latest-drops.component.html',
  styleUrls: ['./latest-drops.component.css']
})
export class LatestDropsComponent implements OnInit {

  latestDrops = [
    {
      imgPath : '../assets/Metaverse - Common.png',
      title : 'Metaverse Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/Metaverse - Rare.png',
      title : 'Metaverse Doge',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/Metaverse - Epic.png',
      title : 'Metaverse Doge',
      rarity : 'Epic'
    },
    {
      imgPath : '../assets/Red suit - Common.png',
      title : 'Red suit Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/Red suit - Rare.png',
      title : 'Red suit Doge',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/Red suit - Epic.png',
      title : 'Red suit Doge',
      rarity : 'Epic'
    },
    {
      imgPath : '../assets/StarGlass - Common.png',
      title : 'StarGlass Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/StarGlass - Rare.png',
      title : 'StarGlass Doge',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/StarGlass - Epic.png',
      title : 'StarGlass Doge',
      rarity : 'Epic'
    },
    {
      imgPath : '../assets/DogeInLoveGlass - Common.png',
      title : 'Doge In Love',
      rarity : 'Common' 
    },
    {
      imgPath : '../assets/DogeInLoveGlass - Rare.png',
      title : 'Doge In Love',
      rarity : 'Rare'
    },
    {
      imgPath : '../assets/DogeInLoveGlass - Epic.png',
      title : 'Doge In Love',
      rarity : 'Epic'
    },
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
