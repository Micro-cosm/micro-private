

import { waitForAsync		} from '@angular/core/testing';
import { ComponentFixture	} from '@angular/core/testing';
import { TestBed			} from '@angular/core/testing';
import { NavComponent		} from './nav.component';

describe('PublicHeadComponent', () => {
	let component:	NavComponent;
	let fixture:	ComponentFixture<NavComponent>;
	
	beforeEach( waitForAsync(() => { TestBed.configureTestingModule({ declarations: [NavComponent]}).compileComponents()}));
	beforeEach(() => {
		fixture		= TestBed.createComponent(NavComponent);
		component	= fixture.componentInstance;
		fixture.detectChanges()
	});
	it('should create', () => { expect( component ).toBeTruthy()})
})
