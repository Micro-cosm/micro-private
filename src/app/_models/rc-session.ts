

export default class RcSession {
	
	constructor(
		public status: string,
		public data: {
			userId: string,
			authToken: string,
			me: {
				_id: string,
				avatarUrl: any,
				name: string,
				emails: [{ address: string, verified: boolean }],
				status: string,
				statusConnection: string,
				username: string,
				utcOffset: number,
				active: boolean,
				roles: [ ],
				settings: {
					preferences: {
						enableAutoAway:					boolean,
						idleTimeLimit:					number,
						desktopNotificationDuration:	number,
						audioNotifications:				string,
						desktopNotifications:			string,
						mobileNotifications:			string,
						unreadAlert:					boolean,
						useEmojis:						boolean,
						convertAsciiEmoji:				boolean,
						autoImageLoad:					boolean,
						saveMobileBandwidth:			boolean,
						collapseMediaByDefault:			boolean,
						hideUsernames:					boolean,
						hideRoles:						boolean,
						hideFlexTab:					boolean,
						hideAvatars:					boolean,
						sidebarGroupByType:				boolean,
						sidebarViewMode:				string,
						sidebarHideAvatar:				boolean,
						sidebarShowUnread:				boolean,
						sidebarShowFavorites:			boolean,
						sendOnEnter:					string,
						messageViewMode:				number,
						emailNotificationMode:			string,
						roomCounterSidebar:				boolean,
						newRoomNotification:			string,
						newMessageNotification:			string,
						muteFocusedConversations:		boolean,
						notificationsSoundVolume:		number
					}
				},
				email: string
			}
		}
	) {
		
		// tslint:disable-next-line:no-shadowed-variable
/*
		function cast <RcSession> ( data: any, model: new ( ...args: any[] ) => RcSession ): RcSession {
			
			const classInstance	= new model ();
			const classProps	= Object.getOwnPropertyNames ( classInstance );
			
			classProps.forEach ( prop => classInstance[ prop ] = data[ prop ]);
			
			return classInstance;
		}
*/
	}
}
