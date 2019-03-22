import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DiaryComponent } from "./diary/diary.component";
import { DeleteComponent } from './delete/delete.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, DiaryComponent, DeleteComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
