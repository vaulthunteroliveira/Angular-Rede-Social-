import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const ROUTES: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: '' , component: HomeComponent, canActivate: [AuthGuard] },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);


