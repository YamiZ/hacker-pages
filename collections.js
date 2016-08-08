Hackers = new Mongo.Collection('Hackers');

if (Meteor.isServer){
	Meteor.publish('hackersPub', function(){
		return Hackers.find();
	});
}