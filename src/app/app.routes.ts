import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './todoapp/pages/all/all.component';
import { ImpoertantComponent } from './todoapp/pages/impoertant/impoertant.component';
import { CompletedComponent } from './todoapp/pages/completed/completed.component';

export const routes: Routes = [
    {
        path:'',
        component:AllComponent
    },
    {
        path:'important',
        component:ImpoertantComponent
    },
    {
        path:"completed",
        component:CompletedComponent
    }
];
