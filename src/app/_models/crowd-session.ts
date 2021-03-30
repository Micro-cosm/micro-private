


export default class CrowdSession {
	
	token:		any;
	createdAt:	any;
	expiresAt:	any;
	
	constructor (
		token,
		createdAt,
		expiresAt
	) {
		this.token		= token;
		this.createdAt	= createdAt;
		this.expiresAt	= expiresAt;
	}
	
	static fromCrowd ( { token, 'created-date': createdAt, 'expiry-date': expiresAt } ) { return new CrowdSession ( token, new Date ( createdAt ), new Date ( expiresAt ))}
	
	toCrowd() { return { 'token': this.token, 'created-date': this.createdAt.getTime(), 'expiry-date': this.expiresAt.getTime()}}
}
