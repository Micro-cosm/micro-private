

import {	environment		} from '../../environments/environment';
import {	Component,
			OnInit			} from '@angular/core';
import {	ActivatedRoute	} from '@angular/router';

@Component({
	selector: 'app-dev-head',
	templateUrl: './dev-head.component.html',
	styleUrls:	['./dev-head.component.sass']
})

export class DevHeadComponent implements OnInit {
	env:	any;
	name:	any;
	show:	boolean;
	display		= 'display: block;';
	isMobile	= false

	constructor( private route: ActivatedRoute ) { this.env = environment; }

	ngOnInit() {
		if ( window.screen.width < 751 ) this.isMobile = true;
		if ( this.route.snapshot.url.toString() !== 'login' ) this.show = true;
	}

	rm() {
		console.log( 'closing development header' );
		this.display = 'display: none;';
	}
}
