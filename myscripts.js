/* This is your JavaScript file. You will use this file to create actions in your HTML pages */

/** Home page down arrow, clicking it moves you to bottom of page */
/*Code from https://fedingo.com/how-to-automatically-scroll-to-bottom-of-page-in-js/ */
function scrollToBottom(){
  window.scrollTo(0, document.body.scrollHeight);
 }
 
/** Faq page, makes faq answers visible and invisible*/
function getAnswer(faqA, faqX){
	/* Code from https://www.w3schools.com/jsref/prop_style_display.asp */
	/* Make the answer visible or not visble depending on current state */
	 var x = document.getElementById(faqA);
	  if (x.style.display === 'none') {
		x.style.display = 'block';
	  } else {
		x.style.display = 'none';
	  }
	  
	/* Make either 'x' or 'v' depending on if answer open or closed */
	var symbol = document.getElementById(faqX);
	
	if(symbol.textContent == 'v'){
		symbol.textContent = 'x';
	} else {
		symbol.textContent = 'v';
	}
}

/** Faq Page - Other questions users may have form, confirms have received message*/
function validateFormFAQ(){
	var msg = document.forms["question"]["msg"].value;
	var email = document.forms["question"]["email"].value;
	/* Check email field to respond to user, and message field are filled */
	if(msg!=" Message " && msg!="" && email!="" && email!=" Email "){
		alert("Your message has been sent. Expect a reply within 3 working days");
	} else if (msg == "" || msg == " Message ") {
		alert("Please enter a message before hitting send");
	} else {
		alert("Please enter your email so that we can respond to you");
	}
}

/** Services Page, calls showDivs_images() with upped slideIndex number*/
function plusDivs_images(n) {
	showDivs_images(slideIndexx += n);
}

/** Services Page, controls the gallery of images*/
function showDivs_images(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {
		/*if at end, go back to beginning slide*/
		slideIndexx = 1
	}
	if (n < 1) {
		/*if at start, go to end of slide */
		slideIndexx = x.length
	}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	x[slideIndexx-1].style.display = "block";
	
	/* Changes text of what the type of wheels is */
	var typeText = document.getElementById("type");
	typeText.textContent = types[slideIndexx-1];
}

/** Responds to registration/log in form*/
function validateFormReg() {
	if (document.getElementById('exist').checked) {
		alert("You are now logged in!");
	} else {
		alert("You are now registered!");
	}
}

/** Responds to calculate total button on order form */
function validateFormRent(event){ 
	/* Variables getting entered information from rent form */
	var size = document.getElementsByName("size")[0].value;
    var hireLength = document.getElementById("length").value;
    var total = document.getElementById("total");
	
	/*Calculating the cost of hiring depending on length of hire and size*/
	if(hireLength == ""){
		alert("Please choose a length of hire");
		total.textContent = "Your Total is: ";
		return false;
	}
	if(hireLength == '0.5'){
		if(size == "kid"){
			total.textContent = "Your Total is: $7";
		}
		if(size == "adult"){
			total.textContent = "Your Total is: $10";
		}
	} else {
		if(size == "kid"){
			total.textContent = "Your Total is: $" + (10*(hireLength-1) + 14);
		}
		if(size == "adult"){
			total.textContent = "Your Total is: $" + (15*(hireLength-1) + 20);
		}
		
	}
	
	/* prevents page from refreshing after changing total text */
	/*https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript#:~:text=Using%20%E2%80%9Creturn%20false%E2%80%9D%20to%20stop%20page%20refresh%20on%20form%20submit&text=The%20%E2%80%9Creturn%20false%E2%80%9D%20cancels%20the%20page%20refresh.*/
	 event.preventDefault(); 
	
}

/**Responds to Payment button */
function validateFormPay(event){
	/* Variables getting entered information from payment form */
	var name = document.forms["pay"]["nameCard"].value;
	var expiry = document.forms["pay"]["expiry"].value;
	var num = document.forms["pay"]["num"].value;
	var cw = document.forms["pay"]["cw"].value;
	
	/* Check all fields are filled in*/
	if(name != "" && expiry !="" && num != "" && cw != ""){
		alert("Your message has been sent. Expect a reply within 3 working days");
	} else if (name == "") {
		alert("Please fill out name on card");
	} else if (num == "") {
		alert("Please fill out card number");
	} else if (expiry == "") {
		alert("Please fill out the expiry date");
	} else {
		alert("Please fill out cw");
	}
	
	event.preventDefault(); 
}