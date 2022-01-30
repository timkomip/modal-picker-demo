import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSelectorComponent } from './user-selector/user-selector.component';

@NgModule({
  declarations: [AppComponent, UserSelectorComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule, ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
