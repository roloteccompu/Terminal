
var app = angular.module('ABMangularPHP', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  
 
$stateProvider

    .state('grillaEmpresas', {
    url: '/grillaEmpresas',
    views: {
      'principal': { templateUrl: 'template/templateGrillaEmpresas.html',controller: 'controlGrillaEmpresas' },
      'menuSuperior': {templateUrl: 'template/menuSuperior.html',controller:'controlMenu'}
    }
    })

    .state('grillaHorarios', {
    url: '/grillaHorarios/{id}',
    views: {
      'principal': { templateUrl: 'template/templateGrillaHorarios.html',controller: 'controlGrillaHorarios' },
      'menuSuperior': {templateUrl: 'template/menuSuperiorHorarios.html'}
    }
    })

    //ABM viajes
    .state('altaViaje', {
    url: '/altaViaje',
    views: {
      'principal': { templateUrl: 'template/templateAlta.html',controller: 'controlAlta' },
      'menuSuperior': {templateUrl: 'template/menuSuperior.html',controller:'controlMenu'}
    }
    })


//       .state('modificar', {
//     url: '/modificar/{id}?:nombre:correo:clave:foto',
//      views: {
//       'principal': { templateUrl: 'template/templateModificacion.html',controller: 'controlModificacion' },
//       'menuSuperior': {templateUrl: 'template/menuSuperior.html',controller:'controlMenu'}
//     }

//    })


$urlRouterProvider.otherwise('/grillaEmpresas');
});
