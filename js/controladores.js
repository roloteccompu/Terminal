app.controller('controlGrillaEmpresas', function($scope,$http,$state,$interval) { 
 
  console.log("ingreso controlador grilla");

       $http.post('nexo.php', { queHacer:"traerTodasLasEmpresas"})
      .then(function(respuesta) { 

         console.log(respuesta);
          // $scope.arrayEmpresas=respuesta.data;

      },function errorCallback(response) {        
         
          console.log( response);           
      });

      //   var promise = $interval(function(){ 
      //       console.log("cada cuanto ejecuto esta funcion ????");
      // }, 
      // 1000);
});

app.controller('controlGrillaHorarios', function($scope,$http,$stateParams,$state,$interval) { 

  var nombre=$stateParams.nomEmpresa;

  console.log("id pasado por parametro"+ nombre);

   $http.post('nexo.php', { nomEmpresa:nombre,queHacer:"verHorarios"})
      .then(function(respuesta) { 

        console.log(respuesta.data);

         $scope.arrayHorarios=respuesta.data;
        
      },function errorCallback(response) {        
         
          console.log( response);           
      });

});
app.controller('controlMenu', function($scope,$http,$stateParams,$state) { 
  
});
app.controller('controlAlta', function($scope,$http,$stateParams,$state) { 
      
     //traigo todos los nombre de las empresas
      $http.post('nexo.php', { queHacer:"traerTodasLasEmpresas"})
      .then(function(respuesta) { 

         console.log(respuesta.data);
        $scope.arrayEmpresas=respuesta.data;
        $scope.arrayProvincias=RetornarProvincias();
        $scope.arrayFechas=RetornarFechaActual();
        $scope.arrayHoras=RetornarHoras();

      },function errorCallback(response) {        
         
          console.log( response);           
      });
      
      $scope.guardar=function(){

        $scope.viaje={};
        $scope.viaje.empresa=document.getElementById("empresa").value;
        $scope.viaje.origen=document.getElementById("origen").value;
        $scope.viaje.fechaSalida=document.getElementById("fechaSalida").value;
        $scope.viaje.horaSalida=document.getElementById("horaSalida").value;
        $scope.viaje.destino=document.getElementById("destino").value;
        $scope.viaje.fechaLlegada=document.getElementById("fechaLlegada").value;
        $scope.viaje.horaLlegada=document.getElementById("horaLlegada").value;
        
        console.log($scope.viaje);
        alert("falta implemetar el guardado de datos");

      //   $http.post('nexo.php', { queHacer:"altaNuevoViaje",viaje:$scope.viaje})
      // .then(function(respuesta) { 

      //     console.log(respuesta.data);
      //    // $scope.arrayEmpresas=respuesta.data;

      // },function errorCallback(response) {        
         
      //     console.log( response);           
      // });
      }

});






/*
app.controller('controlMenu', function($scope,$http,$auth,$state) { 
 
  var objetoAuth={};
   objetoAuth=$auth.getPayload();
  $scope.userActual=" "+objetoAuth.correo;
  
   var objeto={};
   objeto=$auth.getPayload();
   console.log(objeto.correo);
   $scope.deslogear=function() {
   
        $auth.logout()
        .then(function(respuestaAuth){

            if($auth.isAuthenticated())
            
               $state.go('menu');
             else
               $state.go('login');
        })
        .catch(function(parametro){
             console.info("Error Catch", parametro.error);
        });
   };
});
app.controller('controlAlta', function($scope,$auth, $http ,$state,FileUploader,cargadoDeFoto) {
  
  $scope.uploader = new FileUploader({url: 'Datos/imagen'});
  $scope.uploader.queueLimit = 1;

  //inicio las variables
  $scope.usuario={};
  $scope.usuario.nombre= "" ;
  $scope.usuario.correo= "" ;
  $scope.usuario.clave= "" ;
  $scope.usuario.foto="pordefecto.png";
  
  cargadoDeFoto.CargarFoto($scope.usuario.foto,$scope.uploader);

  $scope.Guardar=function(){
      console.log($scope.uploader.queue);
      
      if($scope.uploader.queue[0].file.name!='pordefecto.png'){

        var pathFoto = $scope.uploader.queue[0]._file.name;
        $scope.usuario.foto=pathFoto;
      }
          $scope.uploader.uploadAll();
          console.log("usuario a guardar:");
          console.log($scope.usuario);
  }
     $scope.uploader.onSuccessItem=function(item, response, status, headers)
    {
      var usuarioNuevo=$scope.usuario;
      $http.post('Datos/insertar', { usuario:usuarioNuevo})
      .then(function(respuesta) {       
                 
          console.log(respuesta.data);
          $state.go("grilla");

      },function errorCallback(response) {        
         
          console.log( response);           
      });
     console.info("Ya guardé el archivo.", item, response, status, headers);
    };
});

app.controller('controlGrilla', function($scope, $auth,$http,$state,factoryUsuarios) {
           
  factoryUsuarios.traerUsers().then(function(respuesta){
  $scope.ListadoUsuarios =respuesta;
  });
 
    $scope.Borrar=function(usuarioABorrar){ 
    $http.post("Datos/Borrar",{usuario:usuarioABorrar})
      .then(function(respuesta) {       

            console.log(respuesta.data);
            $http.get('Datos/grilla')
            .then(function(respuesta) {       

                 $scope.ListadoUsuarios = respuesta.data;
                 console.log(respuesta.data);

            },function errorCallback(response) {
                  $scope.ListadoUsuarios= [];
                  console.log(response);     
            });

      },function errorCallback(response) {        
          console.log( response);           
      });
   	}
});

app.controller('controlModificacion', function($scope, $http, $state, $stateParams, FileUploader,cargadoDeFoto){
  
  $scope.usuario={};
  $scope.uploader = new FileUploader({url:'Datos/imagen'});
  $scope.uploader.queueLimit = 1;
  $scope.usuario.id=$stateParams.id;
  $scope.usuario.nombre=$stateParams.nombre;
  $scope.usuario.correo=$stateParams.correo;
  $scope.usuario.clave=$stateParams.clave;
  $scope.usuario.foto=$stateParams.foto;

    cargadoDeFoto.CargarFoto($scope.usuario.foto,$scope.uploader);
    
      $scope.Guardar=function(usuario){
        if($scope.uploader.queue[0].file.name!='pordefecto.png'){
            var pathFoto = $scope.uploader.queue[0]._file.name;
            $scope.usuario.foto=pathFoto;
        }
            $scope.uploader.uploadAll();
      }

      $scope.uploader.onSuccessItem=function(item, response,status, headers){
          $http.post('Datos/modificar', {usuario:$scope.usuario})
          .then(function(respuesta){      
               console.log(respuesta.data);
               $state.go("grilla");
          },
          function errorCallback(response)
          {
               console.log( response);           
          });
               console.info("Ya guardé el archivo.", item, response, status, headers);
      };

});*/