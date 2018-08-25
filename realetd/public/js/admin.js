firebase.auth().onAuthStateChanged(function(user) { 
	var user = firebase.auth().currentUser;
     if (user != null) { 
           // Do Nothing      
			//uid = user.uid;
		var email_id = user.email;
     }else{            
       // redirect to login page 
	   uid = null;
       window.location.replace("login.html") 
     }                                       
 });

function logOut(){
	firebase.auth().signOut();
}
