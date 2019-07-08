import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvAddComponent } from './env-add/env-add.component';
import { EnvEditComponent } from './env-edit/env-edit.component';
import { ListEnvComponent } from './views/environment/list-env/list-env.component';

const routes: Routes = [
  {path:'', component:ListEnvComponent},
  {path:"add-env", component:EnvAddComponent},
  {path:"edit-env/:id", component:EnvEditComponent},
  {path:"list-env", component:ListEnvComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
