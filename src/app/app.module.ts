import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DiaryComponent } from "./diary/diary.component";
import { DeleteComponent } from "./delete/delete.component";
import { HighlightDirective } from "./highlight.directive";
import { AddComponent } from "./add/add.component";

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DeleteComponent,
    HighlightDirective,
    AddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
