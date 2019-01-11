import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';


@Component({
  selector: 'app-slot-picker',
  templateUrl: './slot-picker.page.html',
  styleUrls: ['./slot-picker.page.scss'],
})
export class SlotPickerPage implements OnInit {
  team: number
  constructor(
    private route : ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.team = parseInt(this.route.snapshot.paramMap.get('team'));
  }

}
