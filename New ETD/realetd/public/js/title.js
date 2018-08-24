function titleSearch(){
	
	var author_text = document.getElementById("inputText").value.toUpperCase();
	//alert(author_text);
	if(author_text.startsWith("2008")){
		alert("Your Input Wrong\n PLEASE TRY AGAIN!");
	}
	var ulTag = document.getElementById("unList");
	//var textarea = document.getElementById("textArea");
	var databaseRefYear,databaseYearKey;
	var childCountYear;
	
	var dbRef = firebase.database().ref();
	//alert(dbRef);
	
	dbRef.on('value',function(snapshot){
		var latestYear;
		var results = snapshot.val();
		//alert(results);
		var keys= Object.keys(results);
		//alert(keys);
		var yearlength= keys.length;
		//alert(yearlength);
		var yearStart=2008;
		var childCount;
		for(var y=yearStart;y<=(yearStart+yearlength);y+=1){
			var yearLevel=dbRef.child(y); // year level
			// child counting
			yearLevel.once('value',function(datasnapshot){
					var result = datasnapshot.val();
					//alert(results);
					var key= Object.keys(results);
					//alert(keys);
					var yearlen= keys.length;
					//alert(yearlen);
				// close()
					var yearChildrens=yearlen;
					var indexYear,zero,name;
					var i=0;
					for(i=1;i<=yearChildrens;i+=1){
						if(i<10){
								zero="00";
							}
						else{
								zero="0";
							}
					indexYear=zero+i.toString();
					var db001=yearLevel.child(indexYear);
					db001.on('value',snap=>{
						name=snap.child("2_Name").val().toLowerCase();
						var title=snap.child("1_ThesisTitle").val();
						var year=snap.child("5_Year").val();
						if(year==null){
							year=yearLevel.key;
						}
						var abstractT= snap.child("6_AbstractThesis").val();
						var pdf= snap.child("7_pdf").val();
						if(author_text==title){
								$(".collection").hide();
								$("th").show();
								$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
						} // Author Name 
					}); // snap FIRST
				} //First for loop
			}); // child Counting datasnapshot
		}// for loop year level
	});	// snapshot close()
	// YEAR for loop
} // function ok() button