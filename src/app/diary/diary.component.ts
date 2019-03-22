import { Component, OnInit } from "@angular/core";

import { Diary } from "../diary";
@Component({
  selector: "app-diary",
  templateUrl: "./diary.component.html",
  styleUrls: ["./diary.component.css"]
})
export class DiaryComponent implements OnInit {
  diarys = [
    new Diary(1, "Tweeting today", new Date(2018, 3, 14)),
    new Diary(2, "Buy Cookies", new Date(2018, 3, 14)),
    new Diary(3, "Get new Phone Case", new Date(2018, 3, 14))
  ];

  constructor() {}

  ngOnInit() {}

  deleteDiary(isComplete, index) {
    if (isComplete) {
      this.diarys.splice(index, 1);
    }
  }

  addNewGoal(diary) {
    let goalLength = this.diarys.length;
    diary.id = goalLength + 1;
    diary.completeDate = new Date(diary.completeDate);
    this.diarys.push(diary);
  }
}
