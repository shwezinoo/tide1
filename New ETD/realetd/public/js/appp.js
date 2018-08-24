function ok(){
	var year_text = document.getElementById("inputText").value;
	var year_string,author_string,str;
	str=year_text.length-5;
	alert(str);
	year_string=year_text.substring(0,4);
	author_string=year_text.substring(5, str.length).toLowerCase();
	alert(year_string.length);
	alert(author_string);
	alert(author_string.length);
	
	var ulTag = document.getElementById("unList");
	var tableTag = document.getElementById("hh");
	var textarea = document.getElementById("textArea");
	var databaseRefYear,databaseYearKey;
	var childCount;
	var mark=false;
	if(year_text==year_string){
		mark=true;
		alert(mark);
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
	childCount=dbRef.child(databaseYearKey);
	
	
	alert(databaseRefYear);
	alert(typeof(year_text));
	alert(typeof(databaseYearKey));
	
	if(mark!=true){
		if ((year_string==databaseYearKey)==true){
			// child counting
			childCount.once('value',function(snapshot){
					var results = snapshot.val();
					alert(results);
					var keys= Object.keys(results);
					alert(keys);
					var yearlength= keys.length;
					alert(yearlength);
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
				const li=document.createElement('li');
				li.innerText=name;
				ulTag.appendChild(li);
				
				textarea.value+=name+"\n";
				textarea.value+=title+"\n";
				textarea.value+=year+"\n";
				textarea.value+=abstractT+"\n";
				textarea.value+=pdf+"\n";
				
				$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
			} // Author Name
			}); // snap FIRST
			} //First for loop
			}); // child Counting
		}// IF 
	}// if mark condition False
	if(mark){
		if ((year_string==databaseYearKey)==true){
				// child counting
				childCount.once('value',function(snapshot){
						var results = snapshot.val();
						alert(results);
						var keys= Object.keys(results);
						alert(keys);
						var yearlength= keys.length;
						alert(yearlength);
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
					
					const li=document.createElement('li');
					li.innerText=name;
					ulTag.appendChild(li);
					
					textarea.value+=name+"\n";
					textarea.value+=title+"\n";
					textarea.value+=year+"\n";
					textarea.value+=abstractT+"\n";
					textarea.value+=pdf+"\n";
					
					$("#tt").append("<tr><td class='col s12 l2'>"+name+"</td><td class='col s12 l3'>"+title+"</td><td class='col s12 l2'>"+year+"</td><td class='col s12 l3'>"+abstractT+"</td><td class='col s12 l2'><a href='https://drive.google.com/file/d/1KCUBsGLIRr_rDXgDGvIxf9mmDM896lhr/view'>"+pdf+".pdf"+"</a></td></tr>");
				
				}); // snap SECOND 
				}//second for loop
				}); // child Counting
			}// IF 
		}// if mark condition True
} // function ok() button


function testing(){
	var childCount;
	//var yearChildren;
	alert("ok");
	var dbRef = firebase.database();
	childCount=dbRef.ref().child("testing");
	childCount.once('value',function(snapshot){
		var results = snapshot.val();
		var keys= Object.keys(results);
		var len= keys.length;
		console.log("Results:"+results+"Keys"+keys+"Length"+len);
	});
}