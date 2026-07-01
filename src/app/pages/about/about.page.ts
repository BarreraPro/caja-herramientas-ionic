import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  profileImageAvailable = true;

  hideProfileImage() {
    this.profileImageAvailable = false;
  }
}
