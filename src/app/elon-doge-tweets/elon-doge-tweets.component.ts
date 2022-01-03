import { BuiltinMethod } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-elon-doge-tweets',
  templateUrl: './elon-doge-tweets.component.html',
  styleUrls: ['./elon-doge-tweets.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ElonDogeTweetsComponent implements OnInit {

  showSpinner = this.loader.loadingObs;
  //showSpinners :  boolean = true;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  tweets = [
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">That’s why I’m pro Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1473914193527070770?ref_src=twsrc%5Etfw">December 23,
          2021</a>
  </blockquote>
  `
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Tuition is in Dogecoin &amp; u get a discount if u have a dog</p>&mdash; Elon
      Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1454876031232380928?ref_src=twsrc%5Etfw">October 31,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">And finally <a href="https://t.co/TcgwMSyjAy">pic.twitter.com/TcgwMSyjAy</a></p>
      &mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1419151233739378689?ref_src=twsrc%5Etfw">July 25, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="und" dir="ltr"><a href="https://t.co/oGKHhHROQa">pic.twitter.com/oGKHhHROQa</a></p>&mdash; Elon
      Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1410951450604175366?ref_src=twsrc%5Etfw">July 2, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Baby Doge, doo, doo, doo, doo, doo,<br>Baby Doge, doo, doo, doo, doo,
          doo,<br>Baby Doge, doo, doo, doo, doo, doo,<br>Baby Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1410529698497630212?ref_src=twsrc%5Etfw">July 1, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Release the Doge! <a
              href="https://t.co/9bXCWQLIhu">pic.twitter.com/9bXCWQLIhu</a></p>&mdash; Elon Musk (@elonmusk)
      <a href="https://twitter.com/elonmusk/status/1410519466518233089?ref_src=twsrc%5Etfw">July 1, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Someone suggested changing Dogecoin fees based on phases of the moon, which is
          pretty awesome haha</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1396926365996261382?ref_src=twsrc%5Etfw">May 24, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">How much is that Doge in the window? <a
              href="https://t.co/bxTkWOr50V">pic.twitter.com/bxTkWOr50V</a></p>&mdash; Elon Musk (@elonmusk)
      <a href="https://twitter.com/elonmusk/status/1395328697436033032?ref_src=twsrc%5Etfw">May 20, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Working with Doge devs to improve system transaction efficiency. Potentially
          promising.</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1392974251011895300?ref_src=twsrc%5Etfw">May 13, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Do you want Tesla to accept Doge?</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1392030108274159619?ref_src=twsrc%5Etfw">May 11, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">SpaceX launching satellite Doge-1 to the moon next year<br><br>– Mission paid for
          in Doge<br>– 1st crypto in space<br>– 1st meme in space<br><br>To the mooooonnn!!<a
              href="https://t.co/xXfjGZVeUW">https://t.co/xXfjGZVeUW</a></p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1391523807148527620?ref_src=twsrc%5Etfw">May 9, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Guest starring … <a href="https://t.co/buM3bTOWbX">pic.twitter.com/buM3bTOWbX</a>
      </p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1390774840135766019?ref_src=twsrc%5Etfw">May 7, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Cryptocurrency is promising, but please invest with caution! <a
              href="https://t.co/A4kplcP8Vq">https://t.co/A4kplcP8Vq</a></p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1390522866979033092?ref_src=twsrc%5Etfw">May 7, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">The Dogefather<br>SNL May 8</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1387290679794089986?ref_src=twsrc%5Etfw">April 28,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="und" dir="ltr">👀</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1383103246470811652?ref_src=twsrc%5Etfw">April 16,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Doge Barking at the Moon <a
              href="https://t.co/QFB81D7zOL">pic.twitter.com/QFB81D7zOL</a></p>&mdash; Elon Musk (@elonmusk)
      <a href="https://twitter.com/elonmusk/status/1382552587099062272?ref_src=twsrc%5Etfw">April 15, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">… going to moon very soon</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1380781539647053826?ref_src=twsrc%5Etfw">April 10,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">SpaceX is going to put a literal Dogecoin on the literal moon</p>&mdash; Elon
      Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1377567762919292938?ref_src=twsrc%5Etfw">April 1, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Why are you so dogematic, they ask</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1370885153262817283?ref_src=twsrc%5Etfw">March 13,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Origin of Doge Day Afternoon:<br>The ancient Romans sacrificed a Dogecoin at the
          beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of
          the hot, sultry weather.</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1370883943143251968?ref_src=twsrc%5Etfw">March 13,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Doge spelled backwards is Egod</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1368058884837928970?ref_src=twsrc%5Etfw">March 6, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">2022: Dogecoin is dumb</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1366668744748007425?ref_src=twsrc%5Etfw">March 2, 2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">On the actual moon</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1364563280522453005?ref_src=twsrc%5Etfw">February 24,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="sl" dir="ltr">Dojo 4 Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1363601164344823810?ref_src=twsrc%5Etfw">February 21,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">If major Dogecoin holders sell most of their coins, it will get my full support.
          Too much concentration is the only real issue imo.</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1361094185412100096?ref_src=twsrc%5Etfw">February 14,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Doge is underestimated</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1360007611781795840?ref_src=twsrc%5Etfw">February 11,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="und" dir="ltr"><a href="https://t.co/3rWE9uHSTS">pic.twitter.com/3rWE9uHSTS</a></p>&mdash; Elon
      Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1359545545900048386?ref_src=twsrc%5Etfw">February 10,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="vi" dir="ltr">Ð is for Ðogecoin! Instructional video.<a
              href="https://t.co/UEEocOfcTb">https://t.co/UEEocOfcTb</a></p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1358584801003884544?ref_src=twsrc%5Etfw">February 8,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">The future currency of Earth</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1357914696645414913?ref_src=twsrc%5Etfw">February 6,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">🎶 Who let the Doge out 🎶</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1358542364948668418?ref_src=twsrc%5Etfw">February 7,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">So … it’s finally come to this … <a
              href="https://t.co/Gf0Rg2QOaF">pic.twitter.com/Gf0Rg2QOaF</a></p>&mdash; Elon Musk (@elonmusk)
      <a href="https://twitter.com/elonmusk/status/1358319935978496001?ref_src=twsrc%5Etfw">February 7,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">No highs, no lows, only Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1357244295091208193?ref_src=twsrc%5Etfw">February 4,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Dogecoin is the people’s crypto</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1357241340313141249?ref_src=twsrc%5Etfw">February 4,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">ur welcome <a href="https://t.co/e2KF57KLxb">pic.twitter.com/e2KF57KLxb</a></p>
      &mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1357236825589432322?ref_src=twsrc%5Etfw">February 4,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1357231313376456708?ref_src=twsrc%5Etfw">February 4,
          2021</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="und" dir="ltr"><a href="https://t.co/a6kmk0PEgM">pic.twitter.com/a6kmk0PEgM</a></p>&mdash; Elon
      Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1354924057825837060?ref_src=twsrc%5Etfw">January 28,
          2021</a>
  </blockquote>`
    },
    {
      tweet: `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">Merry Christmas &amp; happy holidays! 🎁 <a
              href="https://t.co/uk6NSPwR9R">pic.twitter.com/uk6NSPwR9R</a></p>&mdash; Elon Musk (@elonmusk)
      <a href="https://twitter.com/elonmusk/status/1342512194383007745?ref_src=twsrc%5Etfw">December 25,
          2020</a>
  </blockquote>`
    },
    {
      tweet : `<blockquote class="twitter-tweet" data-theme="dark">
      <p lang="en" dir="ltr">One word: Doge</p>&mdash; Elon Musk (@elonmusk) <a
          href="https://twitter.com/elonmusk/status/1340590280848908288?ref_src=twsrc%5Etfw">December 20,
          2020</a>
  </blockquote>`
    }
  ]

  constructor(private loader : LoadingService) {
    
   }

  ngOnInit(): void {
    this.loader.hideSpinner();
    
  }

}
