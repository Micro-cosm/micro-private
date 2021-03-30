


export default class CrowdGroup {
	
	active:			any;
	groupname:		any;
	attributes:		any;
	description:	any;
	
	constructor (
		groupname,
		description = '',
		active = true,
		attributes
	) {
		this.groupname		= groupname;
		this.description	= description;
		this.active			= active;
		this.attributes		= (attributes) ? attributes.attributes : [];
	}
	
	static fromCrowd ( { name, description, active, attributes } ) { return new CrowdGroup ( name, description, active, attributes )}

	toCrowd () { return  { type: 'GROUP', name: this.groupname, description: this.description, active: this.active }}
}
