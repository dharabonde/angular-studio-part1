import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  constructor() { }

  ngOnInit(): void {
  }

}
