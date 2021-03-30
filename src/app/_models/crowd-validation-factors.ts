

export default class CrowdValidationFactors {
	
	validationFactors: any;
	
	constructor (
		validationFactorPairs,
	) {
		this.validationFactors	= validationFactorPairs;
	}
	
	static fromCrowd ( validationFactorsObj ) {
		
		const validationFactorPairs	= {};
		
		validationFactorsObj.validationFactors.forEach ( validationFactor => {
			
			validationFactorPairs[ validationFactor.name ]	= validationFactor.value;
		});
		
		return new CrowdValidationFactors ( validationFactorPairs );
	}

	toCrowd() {
		
		const validationFactorsArr	= [];
		
		for ( const name in this.validationFactors ) {
			
			if ( this.validationFactors.hasOwnProperty ( name )) {
				
				const value	= this.validationFactors[ name ];
				
				validationFactorsArr.push ({ name, value });
			}
		}
		
		return { validationFactors: validationFactorsArr };
	}
	
}
