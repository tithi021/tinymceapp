var myAppModule = angular.module('myApp', ['ui.tinymce']);

myAppModule.controller('TinyMceController', function($scope) {
  $scope.tinymceModel = 'Initial content';

  $scope.getContent = function() {
    console.log('Editor content:', $scope.tinymceModel);
  };

  $scope.setContent = function() {
    $scope.tinymceModel = 'Time: ' + (new Date());
  };
  $scope.customerList = ['Customer 1','Customer 2'];

console.log($scope.customerList.length)
  $scope.tinymceOptions = {
    
      formats: {
          customDrpdwn : {
              inline : 'span',
              styles : { 'color' : 'gray', 'text-decoration': 'underline' }, 
              attributes: { class: 'note' }
          }
      },

      toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code | customDrpdwn",
        setup : function ( editor ) {
             editor.addButton( 'customDrpdwn', {
                text : 'Customers List',
                type: 'menubutton',
                icon : false,
                menu:[{
                      text:"Select Customer:" , 
                      onclick: function() {editor.windowManager.open({
                        title: 'Category',
                        width : 270,
                        height : 70,
                        body: [
                          {
                            type: 'checkbox',
                            text: "Customer 1",
                            
                            onselect: function(e) {
    
                            }
                          },
                          {
                            type: 'checkbox',
                            text: "Customer 2",
                            
                            onselect: function(e) {
    
                            }
                          }
                        ]
                      });
                  }},
                ]
               
            });
        }, 
  };
});