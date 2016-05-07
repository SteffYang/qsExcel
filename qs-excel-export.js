
(function(angular) {
  'use strict';
  angular.module('qsearch.trend.export.excel',[]).directive('excelDirective', function() {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        
        $element.bind('click', function (e) {
            var data = $scope.$eval($attrs.excelDirective);
            var style = {
              headers:true, 
              column: {style:{Font:{Bold:"1"}}},
              rows: {1:{style:{Font:{Color:"#FF0077"}}}},
              cells: {1:{1:{
                style: {Font:{Color:"#00FFFF"}}
              }}}
            };
            alasql('SELECT * INTO XLSX("trend.xlsx",?) FROM ?',[style, data]);
            $scope.$apply();
        });
      }
    };
  });
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/