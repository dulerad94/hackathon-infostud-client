angular.module('app.controller.jobadd', [])

    .controller('JobAddController', ['$scope','$location','$window','JobService',
        function ($scope,$location,$window,JobService) {
            JobService.getAllTags().then(function (res) {
                $scope.professions=res.data.tags;
            });

            jQuery(function ($) {
                    var tags=null;
                    $(document).ready(function () {
                        $("#profession").focusin(function () {
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
                        $("#profession").focusout(function () {
                            for(var k=0;k<$("#profession-list").children().length;){
                                $("#profession-list").children()[k].remove();
                            }
                        });
                        $("#profession").keyup(function () {
                            for(var k=0;k<$("#profession-list").children().length;){
                                $("#profession-list").children()[k].remove();
                            }
                            for(var i=0;i<tags.length;i++) {
                                $("#profession-list").append("<ul>" + tags[i].name + "</ul>");
                            }
                            for(var j=0;j<$("#profession-list").children().length;j++){
                                    if(!$("#profession-list").children()[j].innerHTML.startsWith($("#profession").val())){
                                        $("#profession-list").children()[j].remove();
                                        j--;
                                    }
                            }
                            if($("#profession-list").children().length===1){
                                $("#profession").val($("#profession-list").children()[0].innerHTML);
                                for(var l=0;l<$("#profession-list").children().length;){
                                    $("#profession-list").children()[l].remove();
                                }
                            }
                        });
                    });

            });
            $scope.addProfession=function () {

            };
            $scope.requirements=[{'name':'','show':true}];

            $scope.addRequirements=function(name){
                $scope.requirements[$scope.requirements.length-1].name=name;
                $scope.requirements[$scope.requirements.length-1].show=false;
                $scope.requirements.push({"name":"",'show':true});

            };
            $scope.deleteRequirements=function(name){
                for(var i=0;i<$scope.requirements.length;i++){
                    if($scope.requirements[i].name===name){
                        $scope.requirements.splice(i,1);
                        return;
                    }
                }

            };
            $scope.offers=[{'name':'','show':true}];

            $scope.addOffer=function(name){
                $scope.offers[$scope.offers.length-1].name=name;
                $scope.offers[$scope.offers.length-1].show=false;
                $scope.offers.push({"name":"",'show':true});

            };
            $scope.deleteOffer=function(name){
                for(var i=0;i<$scope.offers.length;i++){
                    if($scope.offers[i].name===name){
                        $scope.offers.splice(i,1);
                        return;
                    }
                }

            };

            $scope.submit=function () {
                if($scope.requirements[$scope.requirements.length-1].name==="") $scope.requirements.pop();
                if($scope.offers[$scope.offers.length-1].name==="") $scope.offers.pop();
                $scope.job.requirements=$scope.requirements;
                var offers="";
                for(var i=0;i<$scope.offers.length-1;i++){
                    offers+=$scope.offers[i].name+";";
                }
                if($scope.offers.length>0){
                        offers+=$scope.offers[$scope.offers.length-1].name;
                }
                $scope.job.what_we_offer=offers;
                JobService.postJob($scope.job).then(function (res) {

                });
            };

        }]);
