
var config; //firebase config



var Login = function(){
  model : function(){
        signIn : function(email,password){
             // call presenter methods based on response
        }
  }
  presenter : function(){
         signIn : function(){
                 Login.view.showProgess();
                 Login.model.signIn(this.Login.email,this.Login.password);
         }
         signInSuccess : function(){
                //Redirect to the Main Navigation Page
         }
         signInFailure : function(Error e){
                Login.view.showError(e);
         }

  }
  view : function(){
         init : function(){
              //Define DOM elements
              var email,password;
              //Show Login form
              //Hide Progress & error message place holder
              //Add onClickListener to login button and attach presenter.signIn method to it
         }

         showProgess : function(){
           //Hide error message
           //Hide Login form
           //Show Progress
         }
         showError : function(Error e){
           //Show Login form
           //Show error message
         }
  }
}

// Unused Object
var navigationPage = function(){
          view : function(){
                  init : function(){
                  // Initialise and append DOM elements
                  }
          }
}


var AddUser = function(){
            model : function(){
                isUserSignedIn : function(){
                  //check with firebase if the user is signed in or not
                }
                addUser : function(email,password){
                  //call presenter method based on response from server
                }
            }
            presenter : function(){
                   init : function(){
                          AddUser.model.isUserSignedIn();

                   }
                   addUser : function(){
                           AddUser.model.addUser(this.AddUser.email,this.AddUser.password);
                   }
                   addUserSuccess : function(){
                            AddUser.view.showSuccess();
                   }
                   addUserFailure : function(Error e){
                            AddUser.view.showError(e);
                   }
            }
            view : function(){
                       init : function(){
                         //Initialise DOM
                         var email,password;
                         //Show User Detail Form and Hide all other elements
                         //Add onClickListener with AddUser Button and call addUser method of presenter

                       }
                       showProgess : function(){
                         //Hide error message
                         //Hide User Detail Form
                         //Hide Success & Error message
                         //Show Progress
                       }
                       showSuccess : function(){
                          //Show Success message & hide all other divs
                       }
                       showError : function(Error e){
                         //Show Login form
                         //Show error message
                         //Hide
                       }

            }
}

var UsersList = function(){
              model : function(){
                    isUserSignedIn : function(){
                        //check with firebase if the user is signed in or not
                    }
              }
              presenter : function(){
                    init : function(){
                           UserList.model.isUserSignedIn();

                    }
              }
              view : function(){
                    init : function(){
                      //Initialise DOM Elements
                    }

              }
}

var AddPassage = function(){
  model : function(){
      isUserSignedIn : function(){
        //check with firebase if the user is signed in or not
      }
      addPassage : function(passage){
        //call presenter method based on response from server
      }
  }
  presenter : function(){
         init : function(){
                AddPassage.model.isUserSignedIn();
         }
         addPassage : function(){
                 AddPassage.model.addPassage(this.AddPassage.passage);
         }
         addPassageSuccess : function(){
                  AddPassage.view.showSuccess();
         }
         addPassageFailure : function(Error e){
                  AddPassage.view.showError(e);
         }
  }
  view : function(){
             init : function(){
               //Initialise DOM
               var passage;
               //Show User Passage and Hide all other elements
               //Add onClickListener with AddPassage Button and call addPassage method of presenter

             }
             showProgess : function(){
               //Hide error message
               //Hide Passage Form
               //Hide Success & Error message
               //Show Progress
             }
             showSuccess : function(){
                //Show Success message & hide all other divs
             }
             showError : function(Error e){
               //Show Passage Form
               //Show error message
               //Hide
             }
    }
}

var PassagesList = function(){
            model : function(){

            }
            presenter : function(){

            }
            view : function(){

            }
}

var EditPassage = function(){
            model : function(){

            }
            presenter : function(){

            }
            view : function(){

            }
}
