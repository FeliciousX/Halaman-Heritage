"use strict";angular.module("halamanHeritageApp",["ui.bootstrap","ui","ngResource"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/404",{templateUrl:"views/404.html",controller:"ErrCtrl"}).when("/maps",{templateUrl:"views/maps.html",controller:"MapsCtrl"}).when("/category/:categoryId/:placeId",{templateUrl:"views/categoryDetail.html",controller:"CategorydetailCtrl"}).otherwise({redirectTo:"/404"})}]),angular.module("halamanHeritageApp").controller("MainCtrl",["$scope","services",function(a,b){a.category=b.query(),a.oneAtATime=!0}]),angular.module("halamanHeritageApp").controller("MapsCtrl",["$scope",function(a){a.myMarkers=[];var b=new google.maps.LatLng(1.5305717,110.3569404);a.mapOptions={center:b,zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP},a.addMarker=function(b){a.myMarkers.push(new google.maps.Marker({map:a.myMap,position:b.latLng}))},a.setZoomMessage=function(b){a.zoomMessage="You just zoomed to "+b+"!",console.log(b,"zoomed")},a.openMarkerInfo=function(b){a.currentMarker=b,a.currentMarkerLat=b.getPosition().lat(),a.currentMarkerLng=b.getPosition().lng(),a.myInfoWindow.open(a.myMap,b)},a.setMarkerPosition=function(a,b,c){a.setPosition(new google.maps.LatLng(b,c))},a.onMapIdle=function(){if(void 0===a.myMarkers){var c=new google.maps.Marker({map:a.myMap,position:b});a.myMarkers=[c]}}}]),angular.module("halamanHeritageApp").factory("services",["$resource",function(a){return a("places/:categoryId.json",{},{query:{method:"GET",params:{categoryId:"categories"},isArray:!0}})}]),angular.module("halamanHeritageApp").controller("CategorydetailCtrl",["$scope","$routeParams","services",function(a,b,c){a.placeId=b.placeId,a.categoryId=b.categoryId,a.placeList=c.query({categoryId:a.categoryId})}]);