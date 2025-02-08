import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {path:'',component:FormComponent},
    {path:'userdata',component:UserdataComponent},
    {path:'update-user/:id',component:UpdateUserComponent},
    {path:'add-user',component:AddUserComponent}
];
