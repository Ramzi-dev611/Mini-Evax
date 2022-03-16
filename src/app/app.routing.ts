import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";


const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomepageComponent}
]
export const Routing = RouterModule.forRoot(routes)