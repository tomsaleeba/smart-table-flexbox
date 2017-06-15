angular.module('myApp', ['smart-table', 'ngTableToCsv'])
  .controller('mainCtrl', ['$scope', function ($scope) {
    var nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa']
    var familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez']
    var namesCount = nameList.length
    function createRandomItem() {
      var
        firstName = nameList[Math.floor(Math.random() * namesCount)],
        lastName = familyName[Math.floor(Math.random() * namesCount)],
        age = Math.floor(Math.random() * 100),
        email = firstName + lastName + '@example.com',
        balance = Math.random() * 3000
      return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        balance: balance
      }
    }
    $scope.displayed = []
    for (var j = 0; j < 50; j++) {
      $scope.displayed.push(createRandomItem())
    }
    $scope.defaultPageSize = 20
    $scope.itemsPerPage = $scope.defaultPageSize
  }])
  .directive('stRatio', function () {
    return {
      link: function (scope, element, attr) {
        var ratio = +(attr.stRatio)
        element.css('width', ratio + '%')
      }
    }
  })
