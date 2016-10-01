myApp.controller('cvController', function($scope) {

    $scope.specialElementHandlers = {
        '#somethingSpecial': function(element, renderer) {
            debugger;
            return true;
        }
    };

    $scope.generatePdf = function() {
        debugger;
        var doc = new jsPDF();
        doc.fromHTML($('#bodyElem').get(0), 20, 20, {
            'width': 500,
            'elementHandlers': $scope.specialElementHandlers
        });
        doc.save('Test.pdf');
    }

});
