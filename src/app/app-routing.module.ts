

import { NgModule 		} from '@angular/core';
import { RouterModule	} from '@angular/router';
import { Routes			} from '@angular/router';
import { HomeComponent	} from './home/home.component';
import { LoginComponent	} from './login/login.component';
import { AuthGuard		} from './_guards/auth.guard';
// import { LoggedInGuard	} from 'ngx-auth-firebaseui';	// UNCOMMENT THIS WHEN USING AND PROVIDE TO 'canActivate' WHEN USING ngx-auth-firebaseui local behavior

export const routes: Routes = [
	{ path: '',		redirectTo: '/home',	pathMatch: 'full'					},
	{ path: 'home',		component: HomeComponent								},
	{ path: 'login',	component: LoginComponent,	canActivate: [ AuthGuard ]	},
	{ path: '**',	redirectTo: '/home' 										}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
