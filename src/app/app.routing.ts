import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    // { path: '', component: null}
]
export const Routing = RouterModule.forRoot(routes)