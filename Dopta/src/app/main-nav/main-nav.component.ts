import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../service/token.service';

/** @title Responsive sidenav */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isLogged = false;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private tokenService: TokenService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    console.log(this.isLogged);
    console.log(this.tokenService.getToken());
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
  goToProfile(id) {
    this.router.navigate(['userprofile/', id]);
  }
}
