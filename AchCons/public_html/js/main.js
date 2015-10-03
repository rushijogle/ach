 var app = angular.module('countryApp', ['ngRoute', 'ui.bootstrap']);
                    app.config(function ($routeProvider) {
                        $routeProvider
                                .when('/home', {
                                    templateUrl: 'View/home.html',
                                    controller: 'MainCtrl'
                                })
                                .when('/aboutus', {
                                    templateUrl: 'View/aboutUs/aboutus.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/our_values', {
                                    templateUrl: 'View/aboutUs/our_values.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/client_testimonial', {
                                    templateUrl: 'View/aboutUs/client_testimonial.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/candidate_testimonial', {
                                    templateUrl: 'View/aboutUs/candidate_testimonial.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/fmcg', {
                                    templateUrl: 'View/aboutUs/fmcg.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/our_responsibility', {
                                    templateUrl: 'View/aboutUs/our_responsibility.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/dnaofach', {
                                    templateUrl: 'View/aboutUs/DNAOFACH.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/industry_outlook', {
                                    templateUrl: 'View/aboutUs/Industry_outlook.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/initiative', {
                                    templateUrl: 'View/aboutUs/initiative.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/orgonogram', {
                                    templateUrl: 'View/aboutUs/orgonogram.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/our_consultant', {
                                    templateUrl: 'View/ourConsultant/our_consultant.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/exe_search', {
                                    templateUrl: 'View/Services/executive_search.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/ceosearch', {
                                    templateUrl: 'View/Services/CEO&DirecSearch.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/diversity_inclusion', {
                                    templateUrl: 'View/Services/Diversity_inclusion.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/family_buisness', {
                                    templateUrl: 'View/Services/Family_Buisness.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/ach_infoquest', {
                                    templateUrl: 'View/associate_companies/ach_infoquest.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/bejobbed', {
                                    templateUrl: 'View/associate_companies/bejobbed.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/jobs', {
                                    templateUrl: 'View/jobs/jobs.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/careeersnaps', {
                                    templateUrl: 'View/careeersnaps/careeersnaps.html'
                                            // controller: 'MainCtrl'
                                })
                                .when('/careers', {
                                    templateUrl: 'View/career/career.html',
                                    /*  controller: 'MainCtrl' */
                                })
                                .when('/contact', {
                                    templateUrl: 'View/contact/contact.html',
                                    /*  controller: 'MainCtrl' */
                                })
                                .otherwise({
                                    redirectTo: '/',
                                    templateUrl: 'View/home.html',
                                    controller: 'MainCtrl'
                                });
                    })
                    app.controller('MainCtrl', function ($scope, $http) {
                        $scope.listOfCustomers = null;
                        $scope.items2 = ["img/1.jpg",
                            "img/2.jpg",
                            "img/3.jpg",
                            "img/4.jpg",
                            "img/5.jpg",
                            "img/6.jpg",
                            "img/7.jpg",
                            "img/8.jpg",
                            "img/9.jpg",
                            "img/10.jpg",
                            "img/11.jpg",
                            "img/12.jpg",
                            "img/13.jpg",
                            "img/14.jpg",
                            "img/15.jpg",
                            "img/16.jpg",
                            "img/17.jpg",
                            "img/18.jpg",
                            "img/19.jpg",
                            "img/20.jpg",
                            "img/21.jpg",
                            "img/22.jpg",
                            "img/23.jpg",
                            "img/24.jpg",
                            "img/25.jpg",
                            "img/26.jpg",
                            "img/27.jpg",
                            "img/28.jpg",
                            "img/29.jpg",
                            "img/30.jpg",
                            "img/31.jpg",
                            "img/32.jpg",
                            "img/33.jpg",
                            "img/34.jpg",
                            "img/35.jpg",
                            "img/36.jpg",
                            "img/37.jpg"];
                        $http.get('js/brand_photos.json').success(function (data) {
                            $scope.listOfCustomers = data;
                            console.log($scope.listOfCustomers.length)
                        })
                                .error(function (data, status, headers, config) {
                                    //  Do some error handling here
                                });
                    });
                    app.directive("owlCarousel", function () {
                        return {
                            restrict: 'E',
                            transclude: false,
                            link: function (scope) {
                                scope.initCarousel = function (element) {
                                    // provide any default options you want
                                    var defaultOptions = {
                                    };
                                    var customOptions = scope.$eval($(element).attr('data-options'));
                                    // combine the two options objects
                                    for (var key in customOptions) {
                                        defaultOptions[key] = customOptions[key];
                                    }
                                    // init carousel
                                    $(element).owlCarousel(defaultOptions);
                                };
                            }
                        };
                    })

                    app.directive('owlCarouselItem', [function () {
                            return {
                                restrict: 'A',
                                transclude: false,
                                link: function (scope, element) {
                                    // wait for the last item in the ng-repeat then call init
                                    if (scope.$last) {
                                        scope.initCarousel(element.parent());
                                    }
                                }
                            };
                        }]);