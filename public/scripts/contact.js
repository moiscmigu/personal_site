var myApp = angular.module('myApp', []);


myApp.controller("mainController", function($http) {

    this.sendEmail = () => {
        let emailMessage = {
            email:this.email,
            name:this.name,
            subject:this.subject,
            message:this.message
        };
        console.log(emailMessage);
        $http.post('/', emailMessage).then((res) => {
            console.log('Back from the server with', res);
        });

    };//end of sendEmail function
});
