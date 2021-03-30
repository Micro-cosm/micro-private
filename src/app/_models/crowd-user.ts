


export default class CrowdUser {
	
	email:			any;
	active:			any;
	lastname:		any;
	username:		any;
	password:		any;
	firstname:		any;
	attributes:		any;
	displayname:	any;
	
	constructor (
		firstname,
		lastname,
		displayname,
		email,
		username,
		password,
		active = true,
		attributes
	) {
		
		this.firstname		= firstname		|| '';
		this.lastname		= lastname		|| '';
		this.displayname	= displayname	|| '';
		this.email			= email;
		this.username		= username;
		this.password		= password;
		this.active			= active;
		this.attributes		= ( attributes ) ? attributes.attributes : [];
	}
	
	static fromCrowd ({
		name:			name,
		active:			active,
		'first-name':	firstname,
		'last-name':	lastname,
		'display-name':	displayname,
		'password':		password,
		email:			email,
		attributes:		attributes
	}) {
		return new CrowdUser ( firstname, lastname, displayname, email, name, password = undefined, active, attributes );
	}

	toCrowd() {
		const obj	= {
			'name':			this.username,
			'first-name':	this.firstname,
			'last-name':	this.lastname,
			'display-name':	this.displayname,
			'email':		this.email,
			'active':		this.active,
			'password':		this.password
		};
		
		if ( this.password ) { obj.password	= { value: this.password }}
		return obj;
	}
}
