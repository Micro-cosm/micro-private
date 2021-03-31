
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFAULT
import { environment				} from '../environments/environment';												// EXTERNAL MODULES
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule				} from '@angular/platform-browser';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule					} from '@angular/core';
import { Title						} from '@angular/platform-browser';
import { AppComponent				} from './app.component';															// COMPONENTS
import { AppRoutingModule			} from './app-routing.module';
import { HomeComponent				} from './home/home.component';
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// AVAILABLE(by function)
import { LoggedOutComponent			} from './logged-out/logged-out.component';											// AUTH
import { LoginComponent				} from './login/login.component';													// AUTH
import { MaterialModule				} from './sub-modules/material.module';												// MISC
import { GraphQLModule				} from './sub-modules/graphql.module';												// AUTH
import { HttpClientModule			} from '@angular/common/http';														// CONTENT
import { ContentComponent			} from './content/content.component';												// CONTENT
import { ContentFullComponent		} from './content-full/content-full.component';										// CONTENT
import { NavPipe					} from './_pipes/nav.pipe';															// CONTENT
import { SafePipe					} from './_pipes/safe.pipe';														// CONTENT
import { CmsService					} from './_services/cms.service';													// CONTENT
import { AngularFireModule			} from '@angular/fire';																// AUTH
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';														// AUTH
import { DevHeadComponent			} from './dev-head/dev-head.component';												// AUTH
import { NavComponent				} from './nav/nav.component';														// AUTH

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us`; }															// AUTH

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent,
		ContentFullComponent,
		HomeComponent,
		NavPipe,
		SafePipe,
		LoginComponent,
		LoggedOutComponent,
		DevHeadComponent,
		NavComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CdkTableModule,
		CdkTreeModule,
		FlexLayoutModule,
		GraphQLModule,
		HttpClientModule,
		MaterialModule,
		AngularFireModule.initializeApp( environment.firebase.creds ),
		NgxAuthFirebaseUIModule.forRoot( environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs ),
	],
	providers: [
		{ provide: 'googleTagManagerId',	useValue: environment.google.analytics.trackingCode },
		CmsService,
		Title
	],
	// schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule {}
