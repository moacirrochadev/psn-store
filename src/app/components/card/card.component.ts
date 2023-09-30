import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameType: string = "XBOX | PS5"
  @Input()
  gamePrice: string = "R$399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
