


import {	DomSanitizer	} from '@angular/platform-browser';
import {	SafePipe		} from 'src/app/_pipes/safe.pipe';

describe ('SafePipe', () => {
	
	it ('create an instance', () => {
		
		const sanitize: DomSanitizer = this.ɵDomSanitizerImpl;
		const pipe	= new SafePipe ( sanitize );
		expect ( pipe ).toBeTruthy ();
	});
});
