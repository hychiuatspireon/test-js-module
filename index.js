// module.exports = function(width, height) {
//        	return width * height;
// };

function getListObjects(listObjs) {
  console.log(listObjs); 

  for (var i = 0; i < listObjs.length ; i++) {
  	addNewDateToObject(listObjs[i]);
  }

  console.log(listObjs);
}

function addNewDateToObject(obj) {
	var date = new Date();
	var newDate = new Date(date.getTime() - 36000000); // minus 10 hours from current time
	var regex = /\.\d{3}/;
	var newDateStr = newDate.toISOString().replace(regex, ""); // remove .xxx in the timestamp string

	obj.newDate = newDateStr;
}

module.exports = {
	getListObjects
}

