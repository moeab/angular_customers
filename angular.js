var myApp = angular.module('sampleAngular', []);


myApp.factory("customerFactory", function(){
	var customers = [
		{name : 'Moe', created_at : new Date().toDateString()},
		{name : 'Janice', created_at : new Date().toDateString()},
		{name : 'Tara', created_at : new Date().toDateString()},
		{name : 'Brian', created_at : new Date().toDateString()}
	]
	var factory = {};

	factory.getCustomers = function(callback){
		callback(customers);
	}
	return factory;
})

myApp.controller('customerController', function($scope, customerFactory){
	$scope.customers = []
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(){
		$scope.newCustomer.created_at = new Date().toDateString();
		$scope.customers.push($scope.newCustomer);
		$scope.newCustomer = {};
	}
	$scope.removeCustomer = function(customer){
		$scope.customers.splice($scope.customers.indexOf(customer), 1);
	}
})