angular.module("MetAccess", []).controller("AccessList", function($scope){

	"use strict";

	$scope.title = "MetAccess";
	$scope.membersFound = [
		{name:"Rofl Copter", code:"COPR99999999"},
		{name:"Rofl Copter", code:"COPR99999999"},
		{name:"Rofl Copter", code:"COPR99999999"},
		{name:"Rofl Copter", code:"COPR99999999"},
		{name:"Rofl Copter", code:"COPR99999999"},
		{name:"Rofl Copter", code:"COPR99999999"}
	];

	$scope.clubs = [
		{
			id: "1",
			name: "Cedille",
			memberToAdd : {name:"", code:"COPR99999999"},
			members:[
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"}
			]
		},{
			id: "2",
			name: "Conjure",
			memberToAdd : {name:"", code:"COPR99999999"},
			members:[
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"}
			]
		},{
			id: "3",
			name: "AeroETS",
			memberToAdd : {name:"", code:"COPR99999999"},
			members:[
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"}
			]
		},{
			id: "4",
			name: "Capra",
			memberToAdd : {name:"", code:"COPR99999999"},
			members:[
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"},
				{name: "roflcopter", code:"COPR99999999"}
			]
		}
	];
	
	$scope.addMember = function(member, club){
		console.log("Adding member", member, "to club", club);
		// TODO: check if member exists
		club.members.push(member);
		club.memberToAdd = {name:"", code:"LOLL11223344"}
	};

	$scope.removeMember = function(member, club){
		console.log(member, club);
		for(var m in club.members){
			if(club.members[m] === member){
				break;
			}
		}
		club.members = club.members.concat(club.members.splice(m).slice(1));
	};

}).directive('ngEnter', function(){
	return function($scope, elem, attr){
		elem.bind("keydown keypress", function(e){
			if(e.which === 13){
				e.preventDefault();
				$scope.$apply(function($scope){
					console.log(attr);
					$scope.$eval(attr.ngEnter);
				});
			}
		});
	}
});
