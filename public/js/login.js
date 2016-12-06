   var datoP = [{
        "client_type_id": 1,
    "name": "Karito",
    "lastname" : "lalala",
    "phone": "995555522",
    "password" : "123",
    "email" : "carito",
    "is_company" : 1
  }];

     $.ajax({
           url: 'http://sandbox.urbaner.com/api/client',
           type: 'post',
           dataType: 'json',
           cache:    false,
           data: datoP,
           success: function () {
              console.log(datoP);
              
           },
           error : function (XMLHttpRequest, textStatus,errorThrown) {
               console.log(textStatus);
           }
           
       });
