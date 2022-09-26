import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public nb!: number;

  constructor(private versionservice: VersionService) {
    // this.versionservice.behave.subscribe((data) => {
    //   this.nb = data;
    // });
    this.versionservice.changeBehavior();
  }

  ngOnInit(): void {}
  public changeBehavior() {
    this.versionservice.changeBehavior();
  }
}
