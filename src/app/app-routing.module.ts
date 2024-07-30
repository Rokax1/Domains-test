import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { DomainGuard } from './guards/domain.guard';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' ,canActivate: [DomainGuard]},
  { path: 'inicio', component: InicioComponent, canActivate: [DomainGuard] },
  { path: 'acerca', component: AcercaComponent, canActivate: [DomainGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ],
    canActivate: [DomainGuard]
  },
  { path: '**', redirectTo: '/inicio' } // redirige cualquier ruta no encontrada al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
