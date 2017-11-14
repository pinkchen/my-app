import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes  = [
	{ path: '', redirectTo: 'demo', pathMatch: 'full'},
	{ path: '**', redirectTo: 'demo' }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });