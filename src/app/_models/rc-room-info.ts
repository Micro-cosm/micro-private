

export default class RcRoomInfo {
	public room: {
		_id: string,
		_updatedAt: string,
		msgs: number,
		t: string,
		ts: string,
		usernames: [],
		usersCount: number,
		lastMessage: {
			_id: string,
			rid: string,
			msg: string,
			ts: string,
			u: { _id: string, username: string, name: string },
			_updatedAt: string,
			mentions: [],
			channels: []
		},
		lm: string
	}
	
	public success:	boolean
	
	constructor () {
		console.log( '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  WAT?  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' )
		/* function cast <RcRoomInfo> ( data: any, model: new ( ...args: any[] ) => RcRoomInfo ): RcRoomInfo {
		const classInstance	= new model ();
		const classProps	= Object.getOwnPropertyNames ( classInstance );
		classProps.forEach ( prop => classInstance[ prop ] = data[ prop ]);
		return classInstance }   */
	}
}
