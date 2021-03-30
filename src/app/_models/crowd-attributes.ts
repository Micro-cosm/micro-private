


export default class CrowdAttributes {
	
	attributes: any;
	
	constructor (
		attributePairs
	) {
		
		this.attributes	= attributePairs;
	}
	
	static fromCrowd ( attributesArr ) {
		
		const attributePairs	= {};
		
		attributesArr.forEach ( attribute => {
			attributePairs[ attribute.name ]	= JSON.parse ( attribute.values[ 0 ] );
		});
		
		console.log ( '>>>CrowdAttributes->fromCrowd->parsed: ', attributePairs );
		
		return new CrowdAttributes ( attributePairs );
	}
	
	toCrowd () {
		
		const attributesArr	= [];		// Crowd stores attribute values in an array, so only one value per attribute stored in JSON as any type
		
		for ( const key in this.attributes ) {
			
			if ( this.attributes.hasOwnProperty ( key )) {
				
				const value	= JSON.stringify ( this.attributes[ key ]);
				
				if ( typeof value !== 'string' ) {
					
					throw new Error ( `Attribute value for ${key} should be a string. Check your stringify function.` );
				} else if ( value.length > 255 ) {
					
					throw new Error ( `Attribute ${key} is too large. Values can be no larger than 255 characters.` );
				} else {
					
					attributesArr.push ({ name: key, values: [ value ] });
				}
			}
		}
		
		return attributesArr;
	}
	
}
