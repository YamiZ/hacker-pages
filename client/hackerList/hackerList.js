Template.hackerList.onCreated(function() {
	Meteor.subscribe('hackersPub');
});

Template.hackerList.helpers({
	allHackers : function(){
		return Hackers.find();
	}
});