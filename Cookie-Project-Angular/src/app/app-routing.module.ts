import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DeleteCookieComponent } from './delete-cookie/delete-cookie.component';
import { AddCookieComponent } from './add-cookie/add-cookie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCookiesComponent } from './search-cookies/search-cookies.component';


const routes: Routes = [

{
  path:"delete",component:DeleteCookieComponent
},
{
  path:"search",component:SearchCookiesComponent
},
{
  path:"add",component:AddCookieComponent
},
{
  path:"display/:id",component:DetailsComponent
},
{
  path:"home",component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[DeleteCookieComponent,SearchCookiesComponent,AddCookieComponent,HomeComponent]
