import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public nb!: number;
  constructor(private versionservice: VersionService) {
    this.versionservice.behave.subscribe((data) => {
      this.nb = data;
    });
  }
  ngOnInit(): void {}
}
