import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss'],
})
export class C3Component  implements OnInit {

  constructor() { }
  @Input() color: string = '';
  ngOnInit() {}

}