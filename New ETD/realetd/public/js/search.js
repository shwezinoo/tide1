function ok(){
	var year_text = document.getElementById("inputText").value;
	//alert(year_text);
	var year_string,author_string,str;
	str=year_text.length-5;
	//alert(str);
	year_string=year_text.substring(0,4);
	author_string=year_text.substring(5, str.length).toLowerCase();
	//alert(year_string.length);
	//alert(author_string);
	//alert(author_string.length);
	
	var ulTag = document.getElementById("unList");
	var tableTag = document.getElementById("hh");
	//var textarea = document.getElementById("textArea");
	var databaseRefYear,databaseYearKey;
	var childCount;
	var mark=false;
	if(year_text==year_string){
		mark=true;
		//alert(mark);
	}
	
	var dbRef = firebase.database().ref();
	alert(dbRef);

	if(year_string=="2008"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2009"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string)
	}
	if(year_string=="2010"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if((year_string=="2011")==true){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2012"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2013"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2014"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2015"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	if(year_string=="2016"){
	var databaseYearKey = dbRef.child(year_string).key;
	var databaseRefYear = dbRef.child(year_string);
	}
	// children counting
	if(year_text!="2008" || year_text!="2009" || year_text!="2010" || year_text!="2011" || year_text!="2012" || year_text!="2013" || year_text!="2015" || year_text!="2016"){
		//alert(year_text);
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
						if(year_text==name){
							$("th").show();
							$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
								
						} // Author Name 
					}); // snap FIRST
				} //First for loop
			}); // child Counting datasnapshot
		}// for loop year level
	});	// snapshot close()
	}
	childCount=dbRef.child(databaseYearKey);
	//alert(databaseRefYear);
	//alert(typeof(year_text));
	//alert(typeof(databaseYearKey));
	//$("#hh").append("<tr><th class='col l2'>Name</th><th class='col l3'>Title</th><th class='col l2'>Year</th><th class='col l2'>Abstract</th><th class='col l2'>PDF</th>");
	if(mark!=true){
		if ((year_string==databaseYearKey)==true){
			// child counting
			childCount.once('value',function(snapshot){
					var results = snapshot.val();
					//alert(results);
					var keys= Object.keys(results);
					//alert(keys);
					var yearlength= keys.length;
					//alert(yearlength);
				// close()
			var yearChildren=yearlength;
			var indexYear,zero,name;
			var i=0;
			for(i=1;i<=yearChildren;i+=1){
					if(i<10){
						zero="00";
					}
					else{
						zero="0";
					}
			indexYear=zero+i.toString();
			var db001=databaseRefYear.child(indexYear);
			
			
			db001.on('value',snap=>{
			var title=snap.child("1_ThesisTitle").val();
			name=snap.child("2_Name").val().toLowerCase();
			var year=snap.child("5_Year").val();
			if(year==null){
				year=year_string;
			}
			var abstractT= snap.child("6_AbstractThesis").val();
			var pdf= snap.child("7_pdf").val();
			if(author_string==name){
                $("th").show();
				$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
			} // Author Name
			}); // snap FIRST
			} //First for loop
			}); // child Counting
		}// IF 
	}// if mark condition False
	else if(mark){
		if ((year_string==databaseYearKey)==true){
				// child counting
				childCount.once('value',function(snapshot){
						var results = snapshot.val();
						//alert(results);
						var keys= Object.keys(results);
						//alert(keys);
						var yearlength= keys.length;
						//alert(yearlength);
					// close()
				var yearChildren=yearlength;
				
				var indexYear,zero,name;
				var i=0;
				for(i=1;i<=yearChildren;i+=1){
						if(i<10){
							zero="00";
						}
						else{
							zero="0";
						}
				indexYear=zero+i.toString();
				var db001=databaseRefYear.child(indexYear);
				
				db001.on('value',snap=>{
					var title=snap.child("1_ThesisTitle").val();
					name=snap.child("2_Name").val().toLowerCase();
					var year=snap.child("5_Year").val();
					if(year==null){
						year=year_string;
					}
					var abstractT= snap.child("6_AbstractThesis").val();
					var pdf= snap.child("7_pdf").val();
					
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				
				}); // snap SECOND 
				}//second for loop
				}); // child Counting
			}// IF 
		}// else if mark condition True
} // function ok() button