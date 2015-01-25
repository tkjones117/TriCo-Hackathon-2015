var swarthmore = ["Ancient History",
"Anthropology",
"Arabic",
"Art",
"Art History",
"Asian Studies",
"Astronomy",
"Biochemistry",
"Biology",
"Black Studies",
"Chemistry",
"Chinese",
"Classics",
"Cognitive Science",
"Comparative Literature",
"Computer Science",
"Dance",
"Economics",
"Educational Studies",
"Engineering",
"English Literature",
"Environmental Studies",
"Film & Media Studies",
"French & Francophone Studies",
"Gender & Sexuality Studies",
"German Studies",
"Greek",
"History",
"Interpretation Theory",
"Islamic Studies",
"Japanese",
"Latin",
"Latin American Studies",
"Linguistics",
"Math and Stats",
"Medieval Studies",
"Modern Languages & Literatures",
"Music",
"Peace & Conflict Studies",
"Philosophy",
"Physics",
"Political Science",
"Psychology",
"Public Policy",
"Religion",
"Russian",
"Sociology",
"Spanish",
"Statistics",
"Theater"]

	// initialization code to add department names

$(function(){
	var department;
	for (var i = 0; i< swarthmore.length;i++){
		// Key: use string and use inspect element
		department = swarthmore[i];
		var li = "<li class='icon icon-arrow-left'><a  href='#'>";
		li += department + "</a><div class='mp-level' ><h2>" +department +"</h2>";
		li += "<a class='mp-back' href='#'>back</a>";
		li += "<ul id =" + department;
		li += "> <li class='icon icon-arrow-left'> <a href = '#'> 05</a> </li><li><a href='#'>22</a></li> </ul></div>"
		li += "</li>";

		// $('#ul').append(li);
		// $('#li').append(li);
		// $('#ul').append('<li class="icon icon-arrow-left"><a class="icon icon-phone" href="#">Education</a><div class="mp-level"><h2>Education</h2><a class="mp-back" href="#">back</a><ul><li><a href="#">Super Smart Phone</a></li><li><a href="#">Thin Magic Mobile</a></li><li><a href="#">Performance Crusher</a></li><li><a href="#">Futuristic Experience</a></li></ul></div></li>')

		// var li = "<li><a href='#'>" + department + "</a></li>";
		$('#').append(li);
	}
	// var aa = "<li><a href='#'>" + department + "</a></li>";
	// $('#Chinese').append(aa);
});


// code to react when user clicks on a specific course number
var $a=$("a[href='#']").not('.icon').not('.mp-back').not('.mp-forward').not('.menu-trigger');
$a.on('click',function(){
	$parents = $a.parents();
	var courseNumber = $(this).text();
	var $department = $parents.find('a.department');
	var $college = $parents.find('a.college');
	console.log($department.text() + $college.text() + courseNumber);

	var list, name,condition;
	// creating Parse query
	Parse.initialize("puHovjluHz95PXkN2Wj5xAwZ6pEB3KQfw5k3ZbGt", "BYcb3EbT8VAt08L4wdO1SNvBFxmiP02CimiiZz04");
	var Book = Parse.Object.extend("Book");
	var query = new Parse.Query("Book");
	query.equalTo("courseNumber",courseNumber);
	query.equalTo("department",$department.text());
	query.equalTo("college",$college.text());

	query.find({
		success:function(results){
			alert("working");
			// alert("successfully retrieved" +results.length + " books");
			var text="";
			for (var i =0; i<results.length; i++){
				var book = results[i];
				// text += book.get("price") + "<br>"
				// text += book.get("name") +" " + book.get("price") + "<br>"
				// add block and block-50 here 
				text += "<p class ='message block block-50'><span class ='department'><b> " + book.get("department")
				text +=" </b></span> <span class ='courseNumber'>" +book.get("courseNumber") + " </span><span class ='name'>" 
				text += book.get("name") +"</span><br />Price:$ <span class ='price'>" + book.get("price") 
				text +=" </span> <br />Condition: <span class ='condition'>" + book.get("condition") 
				text += "</span> <br />Seller Name: <span class ='sellerName'>" + book.get("sellerName") 
				text += "</span><br />Contact: <span class ='sellerContact'>" + book.get("sellerContact") 
				text += "</span><br /> Additional comment: <span class='additional_comment'>" 
				text +=  book.get("additionalComment") +" </span><br /></p>"
				// alert("a");
				// $("#loadItems").append(book.get("price"));
				// alert(book.get("price"));
			}
			$('form').hide(0);
			$("#loadItems").append(text);
			// alert(text);
		},
		error: function(err){
			alert("Error: " + error.code +error.message);
		}
	});


});

// $(function(){
// 	var $a=$('a');
// 	// console("length of a is " + $('li').length);
// 	// alert("hello");
// 	console($a.size());

// });
// var $a=$('a').not('.icon').not('.mp-back').not('mp-forward');
// var $a=$('a');
// var $b = $('a').getElementsByClassName();
// alert($a.length);
// console.log($a.length);
