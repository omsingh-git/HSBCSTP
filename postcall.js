stepThreeController.js @ Line 77

//parameter for POST call
    var title = angular.element("div#collapseOne").find("div.styledSelect").text().trim();
    var fName = angular.element("input#first_name").val().trim();
    var lName = angular.element("input#last_name").val().trim();
    var eMail = angular.element('input[placeholder="Email address"]').val().trim();
    var pNumber = angular.element("input#phone-number-input").val().trim();
    var bDate = angular.element('input[placeholder="Date of birth"]').val().trim();

    var parameter = {"title": title,
                     "fName": fName, 
                     "lName": lName, 
                     "eMail": eMail, 
                     "pNumber": pNumber, 
                     "bDate": bDate
                    };
    

    //Post Call url: http://localhost:1234/api/leadProcess
    $http.post('http://localhost:1234/api/leadProcess', parameter)
            .success(function (data, status, headers, config) {
                $scope.arnPostDataResponse = data;
            })
            .error(function (data, status, headers, config) {
                $scope.arnResponseDetails = "data: " + data,
                                             "status: " + status,
                                             "headers: " + headers
                                             "config: " + config; 
            });//parameter for POST call
    var title = angular.element("div#collapseOne").find("div.styledSelect").text().trim();
    var fName = angular.element("input#first_name").val().trim();
    var lName = angular.element("input#last_name").val().trim();
    var eMail = angular.element('input[placeholder="Email address"]').val().trim();
    var pNumber = angular.element("input#phone-number-input").val().trim();
    var bDate = angular.element('input[placeholder="Date of birth"]').val().trim();

    var parameter = {"title": title,
                     "fName": fName, 
                     "lName": lName, 
                     "eMail": eMail, 
                     "pNumber": pNumber, 
                     "bDate": bDate
                    };
    

    //Post Call url: http://localhost:1234/api/leadProcess
    $http.post('http://localhost:1234/api/leadProcess', parameter)
            .success(function (data, status, headers, config) {
                $scope.arnPostDataResponse = data;
            })
            .error(function (data, status, headers, config) {
                $scope.arnResponseDetails = "data: " + data,
                                             "status: " + status,
                                             "headers: " + headers
                                             "config: " + config; 
            });
