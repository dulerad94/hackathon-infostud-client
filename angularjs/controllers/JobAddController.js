angular.module('app.controller.jobadd', [])

    .controller('JobAddController', ['$scope','$location','$window','JobService',
        function ($scope,$location,$window,JobService) {
            $window.localStorage.clear();
            JobService.getAllTags().then(function (res) {
                $scope.positions=res.data.tags;
            });

            jQuery(function ($) {
                    var tags=null;
                    $(document).ready(function () {
                        $(".profession").on('focusin',function () {
                            $.ajax({
                                method: "POST",
                                url: "http://localhost/hackathon-api/public/tag/filter",
                                data: {name: ""}
                            }).done(function (result) {
                                tags = result.tags;
                                for (var i = 0; i < tags.length; i++) {
                                    $("#profession-list").append("<ul>" + tags[i].name + "</ul>");
                                }
                            });
                        });
                        $(".profession").on('focusout',function () {
                            for(var k=0;k<$("#profession-list").children().length;){
                                $("#profession-list").children()[k].remove();
                            }
                        });
                        $(".profession").on('keyup',function () {
                            for(var k=0;k<$("#profession-list").children().length;){
                                $("#profession-list").children()[k].remove();
                            }
                            for(var i=0;i<tags.length;i++) {
                                $("#profession-list").append("<ul>" + tags[i].name + "</ul>");
                            }
                            for(var j=0;j<$("#profession-list").children().length;j++){
                                    if(!$("#profession-list").children()[j].innerHTML.startsWith($(".profession").val())){
                                        $("#profession-list").children()[j].remove();
                                        j--;
                                    }
                            }
                            if($("#profession-list").children().length===1){
                                $(".profession").val($("#profession-list").children()[0].innerHTML);
                                for(var l=0;l<$("#profession-list").children().length;){
                                    $("#profession-list").children()[l].remove();
                                }
                            }
                        });
                    });

            });
            $scope.tags=[{'name':'','show':true}];
            $scope.addTag=function(name){
                $scope.tags[$scope.tags.length-1].name=name;
                $scope.tags[$scope.tags.length-1].show=false;
                $scope.tags.push({"name":"",'show':true});

            };
            $scope.deleteTag=function(name){
                for(var i=0;i<$scope.tags.length;i++){
                    if($scope.tags[i].name===name){
                        $scope.tags.splice(i-1,1);
                        return;
                    }
                }

            };

            $scope.submit=function () {
                scope.tags[$scope.tags.length-1].name=name;
                $scope.tags[$scope.tags.length-1].show=false;
                if($scope.tags[$scope.tags.length-1].name==="") $scope.tags.pop();
                $scope.job.tags=$scope.tags;
                $window.localStorage.tags=$scope.job.tags[0];
                $window.localStorage.sex=$scope.job.sex;
                $window.localStorage.age=$scope.job.age;
                $window.localStorage.pay=$scope.job.pay;
                $window.location="#!/job/add-2";
            };

        }]);
