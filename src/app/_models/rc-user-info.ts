

export default class RcUserInfo {
	
	constructor (
		public user: {
			_id:					string,
			createdAt:				number,
			services:				{ password: { bcrypt: string }, resume: { loginTokens: [{ when: number, hashedToken: string }]}},
			username:				string,
			emails:					[{ address: string, verified: boolean }],
			type:					string,
			status:					string,
			active:					boolean,
			roles:					[ string ],
			name:					string,
			lastLogin:				number;
			statusConnection:		string,
			utcOffset:				number,
			requirePasswordChange:	boolean
		},
		public success: boolean
	) {
		// tslint:disable-next-line:no-shadowed-variable
/*		function cast<RcUserInfo> ( data: any, model: new ( ...args: any[] ) => RcUserInfo ): RcUserInfo {
			
			const classInstance	= new model ();
			const classProps	= Object.getOwnPropertyNames ( classInstance );
			
			classProps.forEach ( prop => classInstance[ prop ] = data[ prop ]);
			
			return classInstance;
		}
*/
	}
}
