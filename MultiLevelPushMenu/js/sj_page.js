

// var department = "a";

// var number = $('#number :selected');

// var number = 3;
// var number = 1;
// var department = 2;


// if (number === "Not here"){
// 	number = document.getElementById('inputCN').textContent;
// }

var department, number, name, price, condition, sellerName, sellerContact, additionalComment;
$(function(){
	$('#submit').on('click',function(e){
		e.preventDefault();
		
		var selectDepart = document.getElementById('department');
		var indexDepart = selectDepart.selectedIndex;
		department = selectDepart.options[indexDepart].value;

		// issue with number and price (integer values)
		var selectNum = document.getElementById('number');
		var indexNum = selectNum.selectedIndex;

		// number = parseInt(selectNum.options[indexNum].value);
		number = selectNum.options[indexNum].value;

		console.log(number);

		if (isNaN(number)){
			number = document.getElementById('inputCN').value;
		}
		console.log(number);

		name = document.getElementById('bookName').value;
		price = parseFloat(document.getElementById('inputPrice').value);
		condition = document.getElementById('inputCondition').value;
		sellerName = document.getElementById('inputName').value;
		sellerContact = document.getElementById('inputContact').value;
		additionalComment = document.getElementById('textArea').value;

		if ((name == '') || (price == '') || (condition == '') || (sellerName == '') || (sellerContact == '')){
			alert('Please enter all required fields.')
			return false
		}

		else if (number == ''){
			alert('Please add the course number.')
			return false
		}

   	    var atpos = sellerContact.indexOf("@");
        var dotpos = sellerContact.lastIndexOf(".");
        if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=sellerContact.length) {
       		 alert("Not a valid e-mail address");
      	     return false;
      	}








		Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");

		var Book = Parse.Object.extend("Book");
		var book = new Book();

		book.set("department",department);
		book.set("courseNumber",number);
		book.set("name",name);
		book.set("condition",condition);
		book.set("price", price);
		book.set("sellerName",name);
		book.set("sellerContact",sellerContact);
		book.set("additional",additionalComment);

		book.save(null,{
		success: function(person){
			alert('New object created');
		},
		error:function(person,error){
			alert('Failed to create new object, with error code: ' + error.message);
		}
		});
	});
});