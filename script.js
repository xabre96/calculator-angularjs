var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.digit = "";
    $scope.digit2 = "";
    $scope.display = "";
    $scope.opera = "";
    $scope.solve = false;
    $scope.point = false;
    $scope.decimal = function () {
        if ($scope.point === false) {
            if ($scope.opera !== "") {
                if ($scope.digit2 === "") {
                    $scope.display = "";
                }
                $scope.digit2 = $scope.digit2 + ".";
            }
            $scope.display = $scope.display + ".";
            $scope.point = true;
        }
    };
    $scope.del = function () {
        if ($scope.solve === true) {
            $scope.display = "";
            $scope.reset();
        }
        var x = $scope.display.length;
        var y = $scope.display.slice(x - 1, x);
        $scope.display = $scope.display.slice(0, x - 1);
        if (y === "+" || y === "-" || y === "*" || y === "/") {
            $scope.opera = "";
        }
        else if (y === ".") {
            if ($scope.digit2 !== "") {
                $scope.digit2 = $scope.digit2.slice(0, x - 1);
            }
            $scope.point = false;
        }
        else if ($scope.digit2 !== "") {
            $scope.digit2 = $scope.digit2.slice(0, x - 1);
        }

    };

    $scope.numButton = function (num) {
        if ($scope.opera !== "") {
            if ($scope.digit2 === "") {
                $scope.display = "";
            }
            $scope.digit2 = $scope.digit2 + "" + num;
            $scope.display = $scope.display + "" + num;
        }
        else {
            //$scope.digit = $scope.digit + "" + num;
            if ($scope.solve === true) {
                $scope.display = "";
                $scope.solve = false;
            }
            $scope.display = $scope.display + "" + num;
        }
    };
    $scope.compute = function () {
        $scope.digit = parseFloat($scope.digit);
        $scope.digit2 = parseFloat($scope.digit2);
        switch ($scope.opera) {
            case '+':
                $scope.display = $scope.digit + $scope.digit2;
                break;
            case '-':
                $scope.display = $scope.digit - $scope.digit2;
                break;
            case '*':
                $scope.display = $scope.digit * $scope.digit2;
                break;
            case '/':
                $scope.display = $scope.digit / $scope.digit2;
                break;
            default:
                $scope.display;
        }
        $scope.digit = "";
        $scope.digit2 = "";
        $scope.opera = "";
        $scope.solve = true;
        //$scope.solve = false;
        $scope.point = false;
    };
    $scope.reset = function () {
        $scope.digit = "";
        $scope.digit2 = "";
        $scope.display = "";
        $scope.opera = "";
        $scope.point = false;
        $scope.solve = false;
    };
    $scope.operator = function (opt) {
        if ($scope.opera !== "" && $scope.digit2 === "") {
            $scope.solve = false;
            $scope.opera = opt;
            var x = $scope.display.length;
            $scope.display = $scope.display.slice(0, x - 1);
            $scope.display = $scope.display + opt;
        }
        else if ($scope.opera !== "" && $scope.digit2 !== "") {
            $scope.compute();
        }
        else {
            $scope.opera = opt;
            $scope.digit = $scope.display;
            $scope.display = $scope.display + opt;
        }
        $scope.point = false;
    };
}
);





















///////////////////////
//Author: Xan Gutierrez
//Date: 2015-08-01
//////////////////////