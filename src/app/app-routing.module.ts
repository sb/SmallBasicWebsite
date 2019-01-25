import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ResourcesComponent } from './resources/resources.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "faq", component: FaqComponent },
    { path: "resources", component: ResourcesComponent },
    { path: "tutorials", component: TutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
