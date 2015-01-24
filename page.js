$(function(){
	$('submit').on('click',function(e){
		e.preventDefault();

var selectDepart = document.getElementById('department');
var indexDepart = selectDepart.selectedIndex;
var department = selectDepart.options[indexDepart].textContent;


// var department = "a";
var selectNum = document.getElementById('number');
var indexNum = selectNum.selectedIndex;
var number = selectNum.options[indexNum].val;
// var number = $('#number :selected');

// var number = 3;
// var number = 1;
// var department = 2;


// if (number === "Not here"){
// 	number = document.getElementById('inputCN').textContent;
// }
// var name = "a";
// var price = 15;
// var condition = "c";
// var sellerName = "d";
// var sellerContact = "e";
// var additionalComment="f";

var name = document.getElementById('bookName');
// var name = $('#bookName:input');
var price = document.getElementById('inputPrice').val;
var condition = document.getElementById('inputCondition').textContent;
var sellerName = document.getElementById('inputName').textContent;
var sellerContact = document.getElementById('inputContact').textContent;
var additionalComment = document.getElementById('textArea').textContent;




Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");

var Book = Parse.Object.extend("Book");
var book = new Book();

book.set("department",department);
book.set("number",number);
book.set("name",name);
book.set("condition",condition);
book.set("price", price);
book.set("sellerName",name);
book.set("sellerContact",sellerContact);
book.set("additional",additionalComment);


		// $('h1').append('abc');

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