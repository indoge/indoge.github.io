import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-drops',
  templateUrl: './latest-drops.component.html',
  styleUrls: ['./latest-drops.component.css']
})
export class LatestDropsComponent implements OnInit {

  latestDrops = [
    {
      imgPath : '../assets/Valentine Doge.gif',
      title : 'Valentine Doge',
      rarity : 'Common',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/31195'
    },
    {
      imgPath : '../assets/Valentine Doge - Epic Love.gif',
      title : 'Valentine Doge - Epic Love',
      rarity : 'Common',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/31793'
    },
    {
      imgPath : '../assets/Tax Paying Doge.png',
      title : 'Tax Paying Doge',
      rarity : 'Common',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/27339'
    },
/*     {
      imgPath : '../assets/Metaverse - Common.png',
      title : 'Metaverse Doge',
      rarity : 'Common',
      link : ''
    },
    {
      imgPath : '../assets/Metaverse - Rare.png',
      title : 'Metaverse Doge',
      rarity : 'Rare'
    }, */
    {
      imgPath : '../assets/Metaverse - Epic.png',
      title : 'Metaverse Doge',
      rarity : 'Epic',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/24394'
    },
   /*  {
      imgPath : '../assets/Red suit - Common.png',
      title : 'Red suit Doge',
      rarity : 'Common'
    },
    {
      imgPath : '../assets/Red suit - Rare.png',
      title : 'Red suit Doge',
      rarity : 'Rare'
    }, */
    {
      imgPath : '../assets/Red suit - Epic.png',
      title : 'Red suit Doge',
      rarity : 'Epic',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/24402'
    },
   /*  {
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
    }, */
    /* {
      imgPath : '../assets/DogeInLoveGlass - Common.png',
      title : 'Doge In Love',
      rarity : 'Common' 
    },
    {
      imgPath : '../assets/DogeInLoveGlass - Rare.png',
      title : 'Doge In Love',
      rarity : 'Rare'
    }, */
    {
      imgPath : '../assets/DogeInLoveGlass - Epic.png',
      title : 'Doge In Love',
      rarity : 'Epic',
      link : 'https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/24409'
    }/* ,
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
    } */
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
