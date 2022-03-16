import { RouterModule, Routes } from "@angular/router";
import { AccountpageComponent } from "./accountpage/accountpage.component";
import { HomepageComponent } from "./homepage/homepage.component";


const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'me', children: [
        { path: 'appointment', component: HomepageComponent, pathMatch:'full' },
        { path: '', component: AccountpageComponent, pathMatch: 'full' },
    ]},
]
export const Routing = RouterModule.forRoot(routes)