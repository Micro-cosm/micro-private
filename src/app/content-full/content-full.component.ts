

import { environment	} from '../../environments/environment';
import { Component 		} from '@angular/core';
import { Input 			} from '@angular/core';
import { OnChanges		} from '@angular/core';
import { OnInit			} from '@angular/core';
import { DomSanitizer	} from '@angular/platform-browser';
import { ActivatedRoute	} from '@angular/router';
import { Router			} from '@angular/router';
import { Observable		} from 'rxjs';
import { CmsService		} from '../_services/cms.service';
import { Row			} from '../_services/cms.service';

@Component({
	selector: 'app-content-full',
	templateUrl: './content-full.component.html',
	styleUrls: ['./content-full.component.sass'],
})

export class ContentFullComponent implements OnInit, OnChanges {
	env:				any;
	params:				any;
	rows$:				Observable<Row[]>;
	subscribeButton:	any;
	
	@Input() loading = true;

	constructor(
		private cmsService:	CmsService,
		private router:		Router,
		private route:		ActivatedRoute,
		private sanitizer:	DomSanitizer,
	) {
		this.env = environment;
		this.route.params.subscribe( params => this.params	= params );
		this.router.routeReuseStrategy.shouldReuseRoute	= () => false;
	}

	ngOnInit() {
		this.subscribeButton	= this.sanitizer.bypassSecurityTrustHtml('<form style="text-align: center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="797VXL2KSXHGQ"><table><tr><td>CHOOSE YOUR SUBSCRIPTION<input type="hidden" name="on0" value=""></td></tr><tr><td><select name="os0"><option value="Monthly Subscription">Monthly Subscription : $199.00 USD - monthly</option><option value="Annual Subscription">Annual Subscription : $2,250.00 USD - yearly</option></select> </td></tr></table><input type="hidden" name="currency_code" value="USD"><input style="width: 200px; padding-top: 20px" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>');
		const pageName			= this.params.page	||	'content-error';
		this.rows$				= this.cmsService.getContent( pageName );
	}

	ngOnChanges() { this.loading = false }
}
