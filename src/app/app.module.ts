

////////////////////////////////////////////////////////////////////////////////////////////////////// TEMPLATED IMPORTS
import { environment				} from '../environments/environment';
import { AngularFireModule			} from '@angular/fire';
import { BrowserModule				} from '@angular/platform-browser';
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { DragDropModule				} from '@angular/cdk/drag-drop';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { HttpClientModule			} from '@angular/common/http';
import { NgModule					} from '@angular/core';
import { ScrollingModule			} from '@angular/cdk/scrolling';
import { Title						} from '@angular/platform-browser';
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';
import { GraphQLModule				} from './sub-modules/graphql.module';
import { MaterialModule				} from './sub-modules/material.module';
import { AppComponent				} from './app.component';
import { AppRoutingModule			} from './app-routing.module';
import { DevHeadComponent			} from './dev-head/dev-head.component';
import { HomeComponent				} from './home/home.component';
import { LoginComponent				} from './login/login.component';
import { NavComponent				} from './nav/nav.component';
import { NavPipe					} from './_pipes/nav.pipe';
import { SafePipe					} from './_pipes/safe.pipe';

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us` }

@NgModule({
	declarations: [
		AppComponent,
		DevHeadComponent,
		HomeComponent,
		LoginComponent,
		NavComponent,
		NavPipe,
		SafePipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		AngularFireModule.initializeApp( environment.firebase.creds ),
		NgxAuthFirebaseUIModule.forRoot( environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs ),
		FlexLayoutModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		GraphQLModule,
		ScrollingModule
	],
	providers: [
		{ provide: 'googleTagManagerId',	useValue: environment.google.analytics.trackingCode },
		Title
	],
	bootstrap: [ AppComponent	]
})

export class AppModule {}
