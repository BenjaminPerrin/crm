import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public nb!: number;
  constructor(private versionservice: VersionService) {
    this.versionservice.behave.subscribe((data) => {
      this.nb = data;
    });
  }

  ngOnInit(): void {}
}
