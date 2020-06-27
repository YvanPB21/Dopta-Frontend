import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {TokenService} from '../service/token.service';

/** @title Responsive sidenav */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.css'],
})
export class MainNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  isLogged = false;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private tokenService: TokenService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
