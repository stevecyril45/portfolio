import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoute: Routes = [
  {path:'',component:IndexComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'services',component:ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'team',component:TeamComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IndexComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
