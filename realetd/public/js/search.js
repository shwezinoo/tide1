function ok(){
	var year_text = document.getElementById("inputText").value.toLowerCase();
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
	if(year_text.startsWith("2")){
		mark=true;
		//alert(mark);
	}
	
	var dbRef = firebase.database().ref();
	//alert(dbRef);
	var ys=year_text.substring(str+1,year_text.length);
	var aus=year_text.substring(0,str).toLowerCase();
	//alert(ys);
	//alert(aus);
	
	if(mark==false){
	dbRef.on('value',snapsnap=>{
		var resultsRef = snapsnap.val();
		var keysRef= Object.keys(resultsRef);
		yearlengthRef = keysRef.length;
		var year08="2008";
		var yyear=parseInt(year08);
		for(var yy=yyear;yy<=(yyear+yearlengthRef);yy+=1){
		var yearLevelYear=dbRef.child(yy.toString()).key;
		var childCount=dbRef.child(yy.toString());
		if(ys==yearLevelYear){
				databaseYearKey = yearLevelYear;
				databaseRefYear = dbRef.child(yearLevelYear);
				childCount.on('value',function(snapshot){
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
				var title=snap.child("ThesisTitle").val();
				name=snap.child("Name").val().toLowerCase();
				var year=snap.child("Year").val();
				if(year==null){
					year=ys;
				}
				var abstractT= snap.child("AbstractThesis").val();
				var degree=snap.child("Degree").val();
				var pdf= snap.child("pdf").val();
				
				if(year_text==name){
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				if(ys==databaseYearKey && aus==name){
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				}); // snap FIRST
				}// for child
				});// chilf counting
			}// if year
			if(ys.length>=4){
				databaseYearKey = yearLevelYear;
				databaseRefYear = dbRef.child(yearLevelYear);
				childCount.on('value',function(snapshot){
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
				var title=snap.child("ThesisTitle").val();
				name=snap.child("Name").val().toLowerCase();
				var year=snap.child("Year").val();
				var degree=snap.child("Degree").val();
				if(year==null){
					year=databaseYearKey;
				}
				var abstractT= snap.child("AbstractThesis").val();
				var pdf= snap.child("pdf").val();
				var degree=snap.child("Degree").val();
				
				if(year_text==name){
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				}); // snap FIRST
				}// for child
				});// chilf counting
			}// if year
			if(aus.length>=20){ // search TITLE
				databaseYearKey = yearLevelYear;
				databaseRefYear = dbRef.child(yearLevelYear);
				childCount.on('value',function(snapshot){
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
				for(i=1;i<=(yearChildren*6);i+=1){
						if(i<10){
							zero="00";
						}
						else{
							zero="0";
						}
				indexYear=zero+i.toString();
				var db001=databaseRefYear.child(indexYear);
				db001.on('value',snap=>{
				var title=snap.child("ThesisTitle").val().toLowerCase();
				name=snap.child("Name").val().toLowerCase();
				var year=snap.child("Year").val();
				if(year==null){
					year=databaseYearKey;
				}
				var abstractT= snap.child("AbstractThesis").val();
				var pdf= snap.child("pdf").val();
				var degree=snap.child("Degree").val();
				
				if(year_text==title){
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				}); // snap FIRST
				}// for child
				});// chilf counting
			}// if TITLE
			if(year_text.length<=9 || year_text.length>=4){ // search DEGREE
				databaseYearKey = yearLevelYear;
				databaseRefYear = dbRef.child(yearLevelYear);
				childCount.on('value',function(snapshot){
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
				for(i=1;i<=(yearChildren*6);i+=1){
						if(i<10){
							zero="00";
						}
						else{
							zero="0";
						}
				indexYear=zero+i.toString();
				var db001=databaseRefYear.child(indexYear);
				db001.on('value',snap=>{
				var title=snap.child("ThesisTitle").val().toLowerCase();
				name=snap.child("Name").val().toLowerCase();
				var year=snap.child("Year").val();
				if(year==null){
					year=databaseYearKey;
				}
				var abstractT= snap.child("AbstractThesis").val();
				var pdf= snap.child("pdf").val();
				var degree=snap.child("Degree").val();
				
				if(year_text==degree.toLowerCase()){
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				}); // snap FIRST
				}// for child
				});// chilf counting
			}// if Degree
		}//  For loop year
	});// snapsnap dbRef
}// if author and year
	else {
	dbRef.on('value',snapsnap=>{
		var resultsRef = snapsnap.val();
		var keysRef= Object.keys(resultsRef);
		yearlengthRef = keysRef.length;
		var year08="2008";
		var yyear=parseInt(year08);
		for(var yy=yyear;yy<=(yyear+yearlengthRef);yy+=1){
		var yearLevelYear=dbRef.child(yy.toString()).key;
		var childCount=dbRef.child(yy.toString());
		if(year_string==yearLevelYear){
				databaseYearKey = yearLevelYear;
				databaseRefYear = dbRef.child(yearLevelYear);
				childCount.on('value',function(snapshot){
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
				var title=snap.child("ThesisTitle").val();
				name=snap.child("Name").val().toLowerCase();
				var year=snap.child("Year").val();
				if(year==null){
					year=year_string;
				}
				var abstractT= snap.child("AbstractThesis").val();
				var pdf= snap.child("pdf").val();
				var degree=snap.child("Degree").val();
				
				if(year_text==databaseYearKey){ // 2008
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				if((year_string==databaseYearKey || ys==databaseYearKey) && (author_string==name || aus==name)){ // 2008 and author
					$("th").show();
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+degree+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				}
				}); // snap FIRST
				}// for child
				});// chilf counting
			}// if year
		}//  For loop year
	});// snapsnap dbRef
	}// if unmark
	
} // function ok() button