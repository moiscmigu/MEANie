var myApp = angular.module('myApp', []);

myApp.controller('WhereMyPeeps', function(PeepsService) {
  var vm = this;

  vm.newPeep = function() {
    console.log('in newPeep');
    var peepToAdd = {
      name: vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep(peepToAdd);
  }; //end whereMyPeepsAt

  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:');
      console.log( PeepsService.allMyPeeps.data);
      vm.peepArray = PeepsService.allMyPeeps.data;
      console.log(vm.peepArray);
    });
  }; //end whereMyPeepsAt
}); // end controller
