import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit, OnChanges {
  @Input() public link!: string;
  @Input() public label!: string;
  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
}
