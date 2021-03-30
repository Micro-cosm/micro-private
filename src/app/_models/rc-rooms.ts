

export default class RcRooms {
	
	constructor (
		public update: [{
				_id:	string,
				name:	string,
				fname:	string,
				t:		string,
				u: {
					_id:		string,
					username:	string
				},
				customFields:	{},
				broadcast:		boolean,
				encrypted:		boolean,
				ro:				boolean,
				sysMes:			boolean,
				_updatedAt:		string,
				lastMessage: {
					_id:	string,
					rid:	string,
					msg:	string,
					ts:		string,
					u: {
						_id:		string,
						username:	string
					},
					mentions:	[],
					channels:	[],
					_updatedAt:	string
				}
		}],
		public remove:		[],
		public success:	boolean
	) {
		
		// tslint:disable-next-line:no-shadowed-variable
/*
		function cast <RcRooms> ( data: any, model: new ( ...args: any[] ) => RcRooms ): RcRooms {
			
			const classInstance	= new model ();
			const classProps	= Object.getOwnPropertyNames ( classInstance );
			
			classProps.forEach ( prop => classInstance[ prop ] = data[ prop ]);
			
			return classInstance;
		}
*/
	}
}
