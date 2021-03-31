

import { environment				} from '../../environments/environment';
import { AngularFireAuth			} from '@angular/fire/auth';
import { Component					} from '@angular/core';
import { Input						} from '@angular/core';
import { OnInit						} from '@angular/core';
// import { NavigationEnd			} from '@angular/router';
import { Router						} from '@angular/router';
import { Title						} from '@angular/platform-browser';
import { GoogleTagManagerService	} from 'angular-google-tag-manager';
import { User						} from '../_models/user';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html'
})

export class NavComponent implements OnInit {
	env:			any;
	error:			boolean;
	index:			number;
	logoSrc:		string;
	title:			string;
	userProfile:	User;

	isLoggedIn	= false;
	isMobile	= false;

	@Input() titleBgColor	= 'whitesmoke';
	@Input() titleFgColor	= 'mediumpurple';

	constructor(
		private fireAuth:		AngularFireAuth,
		private gtmService:		GoogleTagManagerService,
		public	router:			Router,
		private titleService:	Title
	) {
		this.env		= environment;
		this.logoSrc	= this.env.assets.bucket + '/images/greysacale-transparent-wj.png';
		this.titleService.setTitle( this.title );
		// this.router.events.forEach( item => {
		// 	if ( item instanceof NavigationEnd ) {
		// 		const gtmTag = {event: 'page', pageName: item.url};
		// 		this.gtmService.pushTag(gtmTag).then( r => console.log('push tag callback', r ))
		// 	}
		// }).then( r => console.log('push tag callback', r ))
	}
	
	ngOnInit(): void	{
		this.fireAuth.authState.subscribe((auth) => {
			console.log( '>> NavComponent -> authState -> changed to:', auth );
			if ( auth === null ) {
				this.isLoggedIn		= false;
				this.titleBgColor	= 'whitesmoke';
				this.titleFgColor	= 'inherit';
				this.userProfile	= null;
			} else {
				this.isLoggedIn		= true;
				this.titleBgColor	= 'lime';
				this.titleFgColor	= 'inherit';
				this.userProfile	= auth.providerData[0];
			}
			
			if ( window.screen.width < 751 ) this.isMobile = true
		})
	}

	onSignOut(): void			{ console.log( 'Sign-out successful!' 		)}
	onAccountDeleted(): void	{ console.log( 'Account Delete successful!' )}
}
