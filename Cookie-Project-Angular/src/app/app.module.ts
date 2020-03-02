import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatSliderModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCookiesComponent } from './search-cookies/search-cookies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AddCookieComponent } from './add-cookie/add-cookie.component';
import { DeleteCookieComponent } from './delete-cookie/delete-cookie.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchCookiesComponent,
    AddCookieComponent,
    DeleteCookieComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatSliderModule, 
    MatToolbarModule, 
    MatMenuModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
