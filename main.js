// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  var total = 0;
  var ans = 0;
  for(i=0;i<data.length;i++){
  	
  	total = total+data[i].price;

  	
  }
  ans = total/data.length;
  ans = Math.round(ans * 100) / 100;
  console.log("The average price is $"+ans);
 
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
	var ans2 = [];
	for(i=0;i<data.length;i++){
		if(data[i].price>=14.00&&data[i].price<=18.00){
			ans2.push(data[i].title);
		}
	}
	console.log(ans2);
  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
	var ans3 = "";
	for(i=0;i<data.length;i++){
		if(data[i].currency_code =="GBP"){
			console.log(data[i].title+ " costs "+data[i].price+" pounds.");
		}
	}
	console.log(ans3);
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
	var ans4=[];
	for(i=0;i<data.length;i++){
		for(j=0;j<data[i].materials.length;j++){
			if(data[i].materials[j]=="wood"){
				ans4.push(data[i].title);
			}
		}
}
console.log(ans4);
  // Answer:
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for(i=0;i<data.length;i++){
  	
  		if(data[i].materials.length>=8){
  			console.log(data[i].title+" has "+ data[i].materials.length + " materials: ");
  			for(j=0;j<data[i].materials.length;j++){
  				console.log("- " +data[i].materials[j]);
  			}

  		
  	}
  		

  	

  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
var ans6 = 0;
	for(i=0;i<data.length;i++){
		if(data[i].who_made=="i_did"){
			ans6 = ans6+1;
		}
	}
	console.log(ans6+" items were made by their sellers.");
  // Answer:
}