import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = new BehaviorSubject<boolean>(true);
  public readonly loadingObs = this.loading.asObservable();

  constructor() { }

  showSpinner() {
    this.loading.next(true);
  }

  hideSpinner() {
    setTimeout(() => {
      this.loading.next(false);
    }, 7000);
    
  }


}
