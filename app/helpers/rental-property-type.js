import Ember from 'ember';

const communityPropertyTypes = [
	'Condo',
	'Townhouse',
	'Apartment'
];

export function rentalPropertyType([type]/*,hash*/) {
	if (communityPropertyTypes.contains(type)) {
		return 'Community';
	}

	return 'Standalone';
}

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

export default Ember.Helper.helper(rentalPropertyType);
