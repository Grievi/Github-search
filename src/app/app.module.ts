 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent} from '../app/profile/profile.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FormsModule} from '@angular/forms';
import { ProfileService } from '../app/services/profile.service';
import { DateCountPipe } from './date-count.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule, 
    FormsModule,

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }