fb = {};
fb = firebase;
function fnCreateQuestion(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}


function fnCreateContact(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}


function fnCreate(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}

function fnRead(path, successFunction, errorFunction){
	if(!path || !successFunction || !errorFunction) return;
	fb.database().ref(path).once('value').then(successFunction, errorFunction);
}


function fnReadID(path, successFunction, errorFunction){
	if(!path || !successFunction || !errorFunction) return;
	fb.database().ref(path).once('value').then(successFunction, errorFunction);
}


function fnUpdateTitle(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}


function fnUpdateName(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}


function fnUpdateDegree(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}


function fnUpdateSupervisor(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}


function fnUpdateYear(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}


function fnUpdateAbstract(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}

function fnDelete(path, callBack){
	if(!path) return;
	fb.database().ref(path).remove(callBack);
}


fb.data = {
	create: fnCreate,
	createContact: fnCreateContact,
	createQuestion: fnCreateQuestion,
	
	read: fnRead,
	
	updateTitle: fnUpdateTitle,
	updateName: fnUpdateName,
	updateDegree: fnUpdateDegree,
	updateSupervisor: fnUpdateSupervisor,
	updateYear: fnUpdateYear,
	updateAbstract: fnUpdateAbstract,
	
	delete: fnDelete,
	readid: fnReadID
}
