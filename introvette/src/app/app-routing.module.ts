import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent} from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ImageSliderComponent } from './imageslider/imageslider.component';





const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  { path: 'experience',
    component: ExperienceComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: ImageSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
