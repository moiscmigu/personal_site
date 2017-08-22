var myApp = angular.module('myApp', []);


myApp.controller("mainController", function($http) {


    this.sendEmail = () => {

        let errorCount = 0;

        let emailMessage = {
            email:this.email,
            name:this.name,
            subject:this.subject,
            message:this.message
        };

        errorCount = checkContactObject(emailMessage);


        if (errorCount === 0) {
            $http.post('/', emailMessage).then((res) => {
                this.email = '';
                this.name = '';
                this.subject = '';
                this.message = '';
                swal(
                    'Message Sent',
                    'I will get back to you ASAP!',
                    'success'
                );
            });
        }


    };//end of sendEmail function
});

let checkContactObject = (obj) => {
    let count = 0;
    for(x in obj) {
        if (obj[x] === undefined || obj[x] === " " ) {
            if (x === 'email') {
                swal(
                    'Error',
                    'Please enter a valid email',
                    'error'
                );
                count++;
            } else {
                swal(
                    'Error',
                    'Please enter fill out a ' + x,
                    'error'
                );
                count++;
            }
        } else {
            continue;
        }
    }
    return count;
};//end of checkContactObject
