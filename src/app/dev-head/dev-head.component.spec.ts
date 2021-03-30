

import { async				} from '@angular/core/testing';
import { ComponentFixture	} from '@angular/core/testing';
import { TestBed			} from '@angular/core/testing';
import { DevHeadComponent	} from './dev-head.component';

describe ('DevHeadComponent', () => {
	let component:	DevHeadComponent;
	let fixture:	ComponentFixture<DevHeadComponent>;
	
	beforeEach ( async (() => { TestBed.configureTestingModule ({declarations: [DevHeadComponent]}).compileComponents ()}));
	beforeEach (() => {
		fixture		= TestBed.createComponent ( DevHeadComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges ()
	});
	it ('should create', () => { expect ( component ).toBeTruthy ()})
})
