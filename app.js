(function(angular) {
  'use strict';
var app = angular.module('qsExcel', ['qsearch.trend.export.excel']);

app.controller('excelController', ['$scope', function($scope) {
    $scope.items1 = [{
        name: "John Smith",
        email: "j.smith@example.com",
        dob: "1985-10-10"
    }, {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        dob: "1988-12-22"
    }, {
        name: "Jan Smith",
        email: "jan.smith@example.com",
        dob: "2010-01-02"
    }, {
        name: "Jake Smith",
        email: "jake.smith@exmaple.com",
        dob: "2009-03-21"
    }, {
        name: "Josh Smith",
        email: "josh@example.com",
        dob: "2011-12-12"
    }, {
        name: "Jessie Smith",
        email: "jess@example.com",
        dob: "2004-10-12"
    }];
    
    $scope.items2 = [{
        name: "John Smith",
        email: "j.smith@example.com",
        dob: "1985-10-10"
    }, {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        dob: "1988-12-22"
    }, {
        name: "Jan Smith",
        email: "jan.smith@example.com",
        dob: "2010-01-02"
    }, {
        name: "Jake Smith",
        email: "jake.smith@exmaple.com",
        dob: "2009-03-21"
    }, {
        name: "Josh Smith",
        email: "josh@example.com",
        dob: "2011-12-12"
    }, {
        name: "Jessie Smith",
        email: "jess@example.com",
        dob: "2004-10-12"
    }];
    
}]);
/*
app.directive('excelDirective', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      
      $element.bind('click', function (e) {
          var data = $scope.$eval($attrs.excelDirective);
          alasql('SELECT * INTO XLSX("trend.xlsx",?) FROM ?',[$scope.sheetStyle, data]);
          $scope.$apply();
      });
    }
  };
});
*/
})(window.angular);



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/