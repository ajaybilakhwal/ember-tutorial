import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		this.super(...arguments);
		this.replaceWith('rentals');
	}
});
