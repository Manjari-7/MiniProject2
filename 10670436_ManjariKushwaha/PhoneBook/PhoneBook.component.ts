import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhoneBookComponent implements OnInit {
  name:string;
  number:number;
  constructor() { 
    this.name= " ";
    this.number=0;
  }

  ngOnInit(): void {
  }
    var phonebookApp = angular.module('phonebookApp', [])
    phonebookApp.controller('PhonebookListCtrl', function($scope) {  
    $scope.phonebooks = [{
      'name': 'Sophy Kibana',
      'number': '80712671212'
     
    }, {
      'name': 'Alphonce Otieno',
      'number': '0712121212'
   
    }, {
      'name': 'Tonny Onyango',
      'number': '0735556476',
    }, {
      'name': 'Maurice Kalonzo',
      'number': '07239945445'
    }, {
      'name': 'Abubakar Maboza',
      'number': '0713901643'
    }, {
      'name': 'Philip Wabwire',
      'number': '0714901699'
    }, {
      'name': 'Patrick Kimutai',
      'number': '0722901612'
    }, {
      'name': 'Mary Wamboi',
      'number': '0712901299'
    }

  ];
  
  $scope.orderProp = 'number';

  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  
$scope.addContact =function() {
  /* if(!$scope.name || $scope.name === '') { return; } */
    $scope.phonebooks.push({
    name: $scope.name, 
    number: $scope.number    
    }); 
  };
  
  $scope.editUser = function(id) {
    if (id == 'new') {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.name = '';
      $scope.number = '';
      
    } else {
      $scope.edit = true;
      $scope.name = $scope.phonebooks[id - 1].name;
      $scope.number = $scope.phonebooks[id - 1].number;
    }

  };
  $scope.$watch('city', function() {
    $scope.test();
  });
  $scope.$watch('name', function() {
    $scope.test();
  });
  $scope.$watch('number', function() {
    $scope.test();
    
  });
  $scope.$watch('email', function() {
    $scope.test();
  });
  
  
  $scope.test = function() {
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.name.length ||
        !$scope.name.length ||
        !$scope.email.length ||
		    !$scope.city.length)) {
      $scope.incomplete = true;
    }
  };
 
});


}
