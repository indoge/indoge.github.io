import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LatestDropsComponent } from './latest-drops/latest-drops.component';
import { HomeComponent } from './home/home.component';
import { RewardsprogramComponent } from './rewardsprogram/rewardsprogram.component';
import { ElonDogeTweetsComponent } from './elon-doge-tweets/elon-doge-tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestDropsComponent,
    HomeComponent,
    RewardsprogramComponent,
    ElonDogeTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
