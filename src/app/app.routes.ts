import { Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'mainmenu',
    component: MainMenuComponent,
  }
];
