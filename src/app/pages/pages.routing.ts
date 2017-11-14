import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
	{
		path: 'demo',
		loadChildren: 'app/pages/demo/demo.module#DemoModule' 
	},
	{
		path: 'pages',
		component: PagesComponent,
		// redirectTo 和 loadChildren不能共用
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadChildren: './home/home.module#HomeModule'
			},
			{
				path: 'modal',
				loadChildren: './modal/modal.module#Modal1Module'
			}
		]
	}
]

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes);