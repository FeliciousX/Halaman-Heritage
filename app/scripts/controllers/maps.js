'use strict';

angular.module('halamanHeritageApp').controller('MapsCtrl', function ($scope, services, toMaps) {

  $scope.category = [
  {
    "id": "1",
    "name":" Merdeka Palace Hotel",
    "opening_hours":"",
    "lat": 110.343986,
    "lng":1.556391,
    "location":" Jalan Tun Abang Haji Openg, P.O. Box A298, Kuching 93000, Malaysia",
    "price_range":" RM179 - 414",
    "description":" Hotel Class: 3.5 star",
    "web":""
  },
  {
    "id": "2",
    "name":" Kuching Waterfront Lodge",
    "opening_hours":"",
    "lat": 110.346153,
    "lng":1.559276,
    "location":" No. 15, Main Bazaar, Kuching 93000, Malaysia",
    "price_range":" RM44 - 128",
    "description":" Welcome to the Kuching Waterfront Lodge, refurbished with Colonial, Nyonya  and Baba decor. Kuching Waterfront Lodge is located at Main Bazaar, one of the oldest  and busiest streets in Kuching, where trading took place since a long time ago in the era o",
    "web":""
  },
  {
    "id": "3",
    "name":" Mr. D s Bed  and Breakfast",
    "opening_hours":"",
    "lat": 110.345922,
    "lng":1.558246,
    "location":" No. 26 Carpenter Street (China Town), Kuching 93100, Malaysia",
    "price_range":" RM41 - 60",
    "description":" Located at the city center, we have free personal lockers, internet access, included breakfast, laundry service, 24 hour key card security access, free tour information.",
    "web":""
  },
  {
    "id": "4",
    "name":" Backpacker s Stay",
    "opening_hours":"",
    "lat": 110.345611,
    "lng":1.558568,
    "location":" No.23 Carpenter Street,, Kuching 93100, Malaysia",
    "price_range":" RM20-85",
    "description":" Ranked #7 of 33 Speciality lodging in Kuching",
    "web":""
  },
  {
    "id": "5",
    "name":" Rafflesia Lodge",
    "opening_hours":"",
    "lat": 110.346024,
    "lng":1.559373,
    "location":" 12 Main Bazaar, Kuching, Malaysia",
    "price_range":" RM20-30",
    "description":" Ranked #10 of 33 Speciality lodging in Kuching",
    "web":""
  },
  {
    "id": "6",
    "name":" Batu Bata Guesthouse",
    "opening_hours":"",
    "lat": 110.345306,
    "lng":1.558643,
    "location":" No. 8, 1st Floor, Carpenter Street, 93100 Kuching",
    "price_range":" RM30-90",
    "description":" Conveniently located just a 5-minute walk from the waterfront, Batu Bata Guesthouse provides comfortable accommodation and shared modern bathroom facilities. Wi-Fi is available for free throughout the guesthouse. It also features a rooftop dining area an",
    "web":""
  },
  {
    "id": "7",
    "name":" Berambih Lodge",
    "opening_hours":"",
    "lat": 110.34788,
    "lng":1.557565,
    "location":" No 104,Ewe Hai Street, 93400 Kuching",
    "price_range":" RM50",
    "description":" Located along Ewe Hai Street, Berambih Lodge is set in the heart of Kuching City. It offers a games room, a library and affordable accommodation with free Wi-Fi.Berambih Lodge is a short stroll from the famous Kuching Waterfront. It is 20 metres from the",
    "web":""
  },
  {
    "id": "8",
    "name":" B andB Inn",
    "opening_hours":"",
    "lat": 110.348508,
    "lng":1.554353,
    "location":" 30-I, Jalan Tabuan, 93100 Kuching",
    "price_range":" RM45-70",
    "description":" A 5-minute walk from the Kuching Waterfront and Main Bazaar, B andB Inn offers dormitory-style rooms with free Wi-Fi. There is a shared kitchen, outdoor terrace and barbecue facilities. Massage is available upon request.Simply furnished, rooms come with ",
    "web":""
  },
  {
    "id": "9",
    "name":" Hilton Kuching Hotel",
    "opening_hours":"",
    "lat": 110.350471,
    "lng": 1.55712,
    "location":" Jalan Tunku Abdul Rahman, 93100 Kuching",
    "price_range":" RM300-700",
    "description":null,"web":""
  },
  {
    "id": "10",
    "name":" Grand Pinnacles Kuching Lodge",
    "opening_hours":"",
    "lat": 110.350606,
    "lng":1.556509,
    "location":" Level 1 Lot 21,Blok G, Taman Sri Sarawak Mall, Jalan Borneo, 93100 Kuching",
    "price_range":" RM120-150",
    "description":" Located a 2-minute walk from Kuching Waterfront, Grand Pinnacles Kuching Lodge offers a 24-hour front desk and library. Modern rooms come with either shared or private bathroom facilities. Free Wi-Fi is available in public areas of the hotel.Grand Pinnac",
    "web":""
  },
  {
    "id": "11",
    "name":" Tune Hotel - Waterfront Kuching",
    "opening_hours":"",
    "lat": 110.350842,
    "lng":1.557694,
    "location":" Jalan Borneo, Off Jalan Tunku Abdul Rahman, 93100 Kuching, Sarawak, Malaysia., 93100 Kuching",
    "price_range":" RM80-100",
    "description":null,"web":""
  },
  {
    "id": "12",
    "name":" Pullman Kuching",
    "opening_hours":"",
    "lat": 110.351104,
    "lng":1.555946,
    "location":" No 1A Jalan Mathies, 93100 Kuching",
    "price_range":" RM250-300",
    "description":null,"web":""
  },
  {
    "id": "13",
    "name":" Grand Margherita Hotel",
    "opening_hours":"",
    "lat": 110.352864,
    "lng":1.557941,
    "location":" Jalan Tunku Abdul Rahman, 93100 Kuching",
    "price_range":" RM250-650",
    "description":" Offering riverfront accommodation in central Kuching, Grand Margherita is situated beside Sarawak Plaza Shopping Complex. Boasting an outdoor pool and 4 dining options, it also offers a spa. Free Wi-Fi and free wired internet are provided in all rooms.Gr",
    "web":""
  },
  {
    "id": "14",
    "name":" Ariva Getaway Kuching",
    "opening_hours":"",
    "lat": 110.351743,
    "lng":1.555731,
    "location":" No. 9 Jalan Bukit Mata, 93100 Kuching, Sarawak., 93100 Kuching",
    "price_range":" RM130-300",
    "description":" Just 15 minutes  drive from Kuching International Airport, Ariva Gateway Kuching offers air-conditioned service apartments with free Wi-Fi. There is also a rooftop pool, sauna and fitness room.Elegantly furnished, apartments are each equipped with a cabl",
    "web":""
  },
  {
    "id": "15",
    "name":" Batik Boutique Hotel",
    "opening_hours":"",
    "lat": 110.353567,
    "lng":1.556579,
    "location":" 38 Jalan Padungan, 93100 Kuching",
    "price_range":" Rm250",
    "description":" Batik Boutique Hotel is centrally located in Kuching s central business district. It offers free private parking and stylish rooms with free internet access. It also has a rooftop terrace and an outdoor courtyard.Rooms have a 32-inch flat sreen TV, mini",
    "web":""
  },
  {
    "id": "16",
    "name":" Abell Hotel",
    "opening_hours":"",
    "lat": 110.353958,
    "lng":1.557002,
    "location":" 22, Jalan Tunku Abdul Rahman, 93100 Kuching",
    "price_range":" RM180-260",
    "description":" Abell Hotel is located in the heart of historical Kuching, a 5-minute walk from Waterfront Promenade. Showcasing modern and colourful rooms with free internet access, it also offers a restaurant.Guests can board the water taxi from Waterfront Promenade t",
    "web":""
  },
  {
    "id": "17",
    "name":" The Room",
    "opening_hours":"",
    "lat": 110.353116,
    "lng":1.55505,
    "location":" No.6, Padungan Arcade, Jalan Song Thian Cheok, 93100 Kuching",
    "price_range":" RM48-68",
    "description":" Located in the heart of Kuching City, this budget motel is a 15-minute drive from Kuching International Airport. It features air-conditioned rooms with free Wi-Fi access.The Room is a 5-minute drive from the Sarawak Museum and a 10-minute drive from the ",
    "web":""
  },
  {
    "id": "18",
    "name":" 360 Xpress City Centre",
    "opening_hours":"",
    "lat": 110.353116,
    "lng":1.5546,
    "location":" Jalan Song Thian Cheok, 93100 Kuching",
    "price_range":" RM80-100",
    "description":null,"web":""
  },
  {
    "id": "19",
    "name":" De Palma Waterfront Kuching",
    "opening_hours":"",
    "lat": 110.355777,
    "lng":1.557737,
    "location":" Lot 299-303, Section 49, KTLD Jalan Abell, 93100 Kuching",
    "price_range":" RM60-110",
    "description":null,"web":""
  },
  {
    "id": "20",
    "name":" City Inn",
    "opening_hours":"",
    "lat": 110.355321,
    "lng":1.557061,
    "location":" Lot 275 - 276, Abell Road, Kuching, Sarawak, Malaysia, 93100 Kuching",
    "price_range":" RM70-80",
    "description":" A 5-minute walk from the Kuching Waterfront and Kuching Town, City Inn provides non-smoking rooms with free Wi-Fi. There is a Halal-certified restaurant within a 5-minute walk from the inn. Daily newspapers and luggage storage services are also available",
    "web":""
  },
  {
    "id": "21",
    "name":" Kapit Hotel",
    "opening_hours":"",
    "lat": 110.354581,
    "lng":1.556359,
    "location":" 59, Padungan Road, 93100 Kuching",
    "price_range":" RM90-120",
    "description":" Kapit Hotel is within a 5-minute walk from the Kuching Waterfront, Main Bazaar, China Town and India Street. Its affordable rooms come with free Wi-Fi. There is a 24-hour coffee shop just next door.The basic air-conditioned rooms all come with a cable\/sa",
    "web":""
  },
  {
    "id": "22",
    "name":" Hotel Grand Continental Kuching",
    "opening_hours":"",
    "lat": 110.353572,
    "lng":1.552434,
    "location":" Lot 42, Section 46, Ban Hock Road, 93100 Kuching",
    "price_range":" Rm140-250",
    "description":" Centrally located in Kuching, just a 15-minute drive to Kuching International Airport, it offers modern rooms with free Wi-Fi. It features an outdoor swimming pool and free private parking.Rooms are simply furnished and come equipped with air conditionin",
    "web":""
  },
  {
    "id": "23",
    "name":" Tai Pan Hotel",
    "opening_hours":"",
    "lat": 110.35531,
    "lng":1.556235,
    "location":" 93-95, Jalan Padungan, 93100 Kuching",
    "price_range":" Rm65-75",
    "description":" Tai Pan Hotel is located in Kuching, just 5 minutes  walk from Parkson Shopping Mall, the Waterfront and Sarawak Plaza. Fitted with free Wi-Fi, rooms come with air conditioning and city views. Newspapers and luggage storage are provided at the 24-hour fr",
    "web":""
  },
  {
    "id": "24",
    "name":" The LimeTree Hotel, Kuching",
    "opening_hours":"",
    "lat": 110.356442,
    "lng":1.556198,
    "location":" Lot 317 Abell Road, 93100 Kuching",
    "price_range":" RM140-200",
    "description":" The LimeTree Hotel offers boutique accommodation in Kuching s Padungan Area (Chinatown), a 10-minute walk from The Riverside Waterfront. It features free Wi-Fi, a rooftop lounge and free parking.The LimeTree Hotel is within a 5-minute stroll from Tun Jun",
    "web":""
  }
];
  // $scope.category = services.query({categoryId: 'accomodation'});



  $scope.markers = [];
  $scope.center = { // by default, centers to Swinburne.
    // TODO: Centers to Plaza Merdeka by default
    latitude: 1.532528,
    longitude: 110.358052,
  };

  $scope.windows = [];

  $scope.markClick = true;
  $scope.zoom = 15;
  $scope.fit = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      if(toMaps.set) {
        toMaps.set = false;
        console.log(toMaps.latitude);
        console.log(toMaps.longitude);
        $scope.zoom = 17;
        $scope.center = {
          latitude: toMaps.latitude,
          longitude: toMaps.longitude
        };
      }
      else {
        $scope.center = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      }

      $scope.markers.push({ // adding marker on ur current location
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        infoWindow: 'You are here!'
      });

      $scope.$apply();
    }, function () {

    });
  };

  for (var prop in $scope.category) {
    $scope.markers.push({
      latitude: $scope.category[prop].lng,
      longitude: $scope.category[prop].lat,
      infoWindow: '<h3>' + $scope.category[prop].name + '</h3><p><a href="#/category/accomodation/' + $scope.category[prop].id + '/details">More details..</a></p>'
    });
  };



});
