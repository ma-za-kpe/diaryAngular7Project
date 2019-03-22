import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Diary } from "../diary";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  newDiary = new Diary(0, "", new Date());

  @Output() addGoal = new EventEmitter<Diary>();

  submitGoal() {
    this.addGoal.emit(this.newDiary);
  }
  constructor() {}

  ngOnInit() {}
}
