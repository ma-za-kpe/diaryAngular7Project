import { Component, OnInit } from "@angular/core";

import { Diary } from "../diary";
@Component({
  selector: "app-diary",
  templateUrl: "./diary.component.html",
  styleUrls: ["./diary.component.css"]
})
export class DiaryComponent implements OnInit {
  diarys = [
    new Diary(1, "Watch Finding Nemo"),
    new Diary(2, "Buy Cookies"),
    new Diary(3, "Get new Phone Case")
  ];

  constructor() {}

  ngOnInit() {}
}