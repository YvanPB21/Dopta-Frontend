import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

/** @title Responsive sidenav */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.css'],
})
export class MainNavComponent {


  constructor(private router: Router, public authService: AuthService) {
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']).then(() => {
    });
  }

  goToProfile(): void {
    this.router.navigate(['/profile', this.authService.decodedToken.jti]);
  }
}
