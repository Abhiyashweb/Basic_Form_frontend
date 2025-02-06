import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserdataComponent } from './userdata/userdata.component';

export const routes: Routes = [
    {path:'',component:FormComponent},
    {path:'userdata',component:UserdataComponent}
];
