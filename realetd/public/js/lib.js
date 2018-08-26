var internsApp = {};

(function(){
	//var uid = "1";
		/*
				// User is signed in
				uid = user.uid;
			}else{
				// redirect to login page
				uid = null;
				window.location.replace("login.html");
			}
		});
	*/
	function logOut(){
		firebase.auth().signOut();
	}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	
	//CREATING CONTACT//
	function fnCreateContact(){
		var fullName = $("#fullName").val();
		var email = $("#email1").val();
		var message = $("#textarea1").val();
		var path='ContactUs/' + 1;
		var data = {
			
			FullName: fullName,
			Email: email,
			Message: message
		}
		fb.data.createContact(path, data, messageHandler);
	}
	
	//CREATING QUESTION//
	function fnCreateQuestion(){
		var qqName = $("#qname").val();
		var qqFeedback = $("#qfeedback").val();
		var qqEmail = $("#qemail").val();
		
		var path='QuestionSection/' + 1;
		var data = {
			
			UserName: qqName,
			UserFeedback: qqFeedback,
			UserEmail: qqEmail
		}
		fb.data.createQuestion(path, data, messageHandler);
	}
	//	CREATING PAPERS	//
	function fnCreate(){
		uid = $('#thesisIDCreate').val();
		var year = $("#thesisYearCreate").val();
		
		if(year == 2017){
			var path='2017/' + uid;
		}
		else if(year == 2018){
			var path='2018/' + uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		var thesisTitle = $("#thesisTitleCreate").val();
		var name = $("#thesisNameCreate").val();
		var degree = $("#thesisDegreeCreate").val();
		var thesisSupervisor = $("#thesisSupervisorCreate").val();
		var thesisAbstract = $("#thesisAbstractCreate").val();
		var data = {
			
			ThesisTitle: thesisTitle,
			Name: name,
			Degree: degree,
			SupervisorName: thesisSupervisor,
			Year: year,
			AbstractThesis: thesisAbstract
		}
		fb.data.create(path, data, messageHandler);
	}
	
	//	UPDATING TITLE OF PAPER	//
	function fnUpdateTitle(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var title = $('#thesisTitleUpdate').val();
		
		var data = {
			ThesisTitle: title,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year == 2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year == 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateTitle(path, data, messageHandler);
	}
	
	//	UPDATING NAME OF PAPER	//
	function fnUpdateName(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var name = $('#thesisNameUpdate').val();
		
		var data = {
			Name: name,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year == 2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year == 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateName(path, data, messageHandler);
	}
	
	//	UPDATING DEGREE OF PAPER	//
	function fnUpdateDegree(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var degree = $('#thesisDegreeUpdate').val();
		
		var data = {
			Degree: degree,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year == 2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year == 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateDegree(path, data, messageHandler);
	}
	
	//	UPDATING SUPERVISOR OF PAPER	//
	function fnUpdateSupervisor(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var supervisor = $('#thesisSupervisorUpdate').val();
		
		var data = {
			SupervisorName: supervisor,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year ==2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year === 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateSupervisor(path, data, messageHandler);
	}
	
	//	UPDATING MONTH&YEAR OF PAPER	//
	function fnUpdateYear(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var upyear = $('#thesisMonthUpdate').val();
		
		var data = {
			Year: upyear,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year ==2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year == 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateYear(path, data, messageHandler);
	}
	
	//	UPDATING ABSTRACT OF PAPER	//
	function fnUpdateAbstract(){
		var uid = $('#thesisIDUpdate').val();
		var year = $('#thesisYearUpdate').val();
		
		var abstract = $('#thesisAbstractUpdate').val();
		
		var data = {
			AbstractThesis: abstract,
		}
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year == 2016){
			var path='2016/' + uid;
		}
		else if(year == 2017){
			var path='2017/'+uid;
		}
		else if(year == 2018){
			var path='2018/'+uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.updateAbstract(path, data, messageHandler);
	}
	
	//	READING ALL PAPERS FOR DESIRED YEAR	//
	function fnRead()
	{   
	  
		var year = $("#thesisYearRead").val();
		//var uid = $("#thesisIDRead").val();
		
		if(year == 2008){
			var path='2008/' ;
		}
		else if(year == 2009){
			var path='2009/' ;
		}
		else if(year == 2010){
			var path='2010/' ;
		}
		else if(year == 2011){
			var path='2011/' ;
		}
		else if(year == 2012){
			var path='2012/' ;
		}
		else if(year == 2013){
			var path='2013/' ;
		}
		else if(year == 2015){
			var path='2015/' ;
		}
		else if (year ==2016){
			var path='2016/';
		}
		else if(year ==2017){
			var path='2017/';
		}
		else if(year == 2018){
			var path='2018/';
		}
		else if(year == 2019){
			var path='2019/' ;
		}
		else if(year == 2020){
			var path='2020/' ;
		}
		else if(year == 2021){
			var path='2021/' ;
		}
		else if(year == 2022){
			var path='2022/' ;
		}
		else {
			var path='2023/' ;
		}
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}
			else{
				snapShot.forEach(function (childSnapshot){
					 $("#hh").show();
					var key = childSnapshot.key;
					var childData = childSnapshot.val();
					var tr = '<tr>' + 
							'<td>' + key + '</td>' +
							'<td>' + childData.ThesisTitle + '</td>' +
							'<td>' + childData.Name + '</td>' +
							'<td>' + childData.Degree + '</td>' +
							'<td>' + childData.SupervisorName + '</td>' +
							'<td>' + childData.Year + '</td>' +
							'<td>' + childData.AbstractThesis + '</td>' +
						  '</tr>';
					$('#lstTable').append(tr);
					console.log(snapShot.val());
				
				})
			}
		}
	}
	
	//	READING PAPER FOR DESIRED ID	//
	function fnReadID()
	{
		var year = $("#thesisYear").val();
		var uid = $("#thesisID").val();
		
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if(year == 2016){
			var path='2016/' + uid;
		}
		else if(year ==2017){
			var path='2017/' + uid;
		}
		else if(year == 2018){
			var path='2018/' + uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.readid(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}
			else{
				$("#yearid").show();
				console.log(snapShot.val());
				$("#internIDResult").html(uid);
				$("#internTitleResult").html(snapShot.val().ThesisTitle);
				$("#internNameResult").html(snapShot.val().Name);
				$("#internDegreeResult").html(snapShot.val().Degree);
				$("#internSupervisorResult").html(snapShot.val().SupervisorName);
				$("#internYearResult").html(snapShot.val().Year);
				$("#internAbstractResult").html(snapShot.val().AbstractThesis);
				
			}
			
		}
	}
	
	// DELETING DESIRED ID OF DESIRED YEAR	//
	function fnDelete(){
		var uid = $("#thesisIDDelete").val();
		var year =$('#thesisYearDelete').val();
		
		if(year == 2008){
			var path='2008/' + uid;
		}
		else if(year == 2009){
			var path='2009/' + uid;
		}
		else if(year == 2010){
			var path='2010/' + uid;
		}
		else if(year == 2011){
			var path='2011/' + uid;
		}
		else if(year == 2012){
			var path='2012/' + uid;
		}
		else if(year == 2013){
			var path='2013/' + uid;
		}
		else if(year == 2015){
			var path='2015/' + uid;
		}
		else if (year ==2016){
			var path='2016/' + uid;
		}
		else if(year ==2017){
			var path='2017/' + uid;
		}
		else if(year == 2018){
			var path='2018/' + uid;
		}
		else if(year == 2019){
			var path='2019/' + uid;
		}
		else if(year == 2020){
			var path='2020/' + uid;
		}
		else if(year == 2021){
			var path='2021/' + uid;
		}
		else if(year == 2022){
			var path='2022/' + uid;
		}
		else {
			var path='2023/' + uid;
		}
		fb.data.delete(path, messageHandler);
	}

	internsApp.Create = fnCreate;
	internsApp.CreateContact = fnCreateContact;
	internsApp.CreateQuestion = fnCreateQuestion;
	internsApp.Read	= fnRead;
	
	internsApp.UpdateTitle = fnUpdateTitle;
	internsApp.UpdateName = fnUpdateName;
	internsApp.UpdateDegree = fnUpdateDegree;
	internsApp.UpdateSupervisor = fnUpdateSupervisor;
	internsApp.UpdateYear = fnUpdateYear;
	internsApp.UpdateAbstract = fnUpdateAbstract;
	
	internsApp.Delete = fnDelete;
	internsApp.ReadID = fnReadID;

	internsApp.logOut = logOut;
})()
