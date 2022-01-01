import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestDropsComponent } from './latest-drops/latest-drops.component';
import { RewardsprogramComponent } from './rewardsprogram/rewardsprogram.component';
import { ElonDogeTweetsComponent } from './elon-doge-tweets/elon-doge-tweets.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path: 'home'
  },
  {
    component : HomeComponent,
    path: ''
  },
  {
    component : ElonDogeTweetsComponent,
    path: 'elondogetweets'
  },
  {
    component : LatestDropsComponent,
    path: 'latestdrops'
  },
  {
    component : RewardsprogramComponent,
    path: 'rewardsprogram'
  },
  {
    component : HomeComponent,
    path: '**'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
