var constants = {
	cssClosed : "closed"
}

var numberList = {
	list : [],
	
	twoInList : function(number){
		var flag = 0;
		for(var i = 0; i < this.list.length ; i++){
			if(this.list[i] == number){
				flag++;
			}
		}
		if(flag == 2)
			return true;
			
		this.list.push(number);
		return false;
	}
};

$(document).ready(function() {
  iterateAllFileds(addClass);
  iterateAllFileds(addSign);
});

function randomiseNumbers(){
	iterateAllFileds(addRandomNumber)
};

function addRandomNumber(element){
	var number = 1 + Math.floor(Math.random() * 6);
	
	if(numberList.twoInList(number)){
		
	}else{
		element.text(number);
	}
	
};
function addSign(element){
	element.text("x");
};
function addClass(element){
	element.addClass(constants.cssClosed);
};
function iterateAllFileds(doAction){
	for(var i=1; i < 4; i++){
		for(var j=1; j < 5; j++){
			var idString = i+''+j;
			var $field = $( "#"+idString );
			doAction( $field );
		}
	}
}

function addListeners(){
	$( "#shuffle" ).on('click', function(){
		randomiseNumbers();
	});
};

var pair  = function(){
	
}; 