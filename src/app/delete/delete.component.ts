import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  delete(complete: boolean) {
    this.isComplete.emit(complete);
  }
}
