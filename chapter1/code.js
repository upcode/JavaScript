scoops = 5;
while (scoops > 0) {
	document.write("Another scoop!<br>");
	if (scoops < 3) {
		alert("Ice cream is running low!");
	} else if (scoops >= 5) {
		alert("Eat faster, the ice cream is going to melt!");
	}
	scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");


var word = "bottles";
var song = "of beer on the wall";
var count = 99;

while (count > 0) {
	document.write(count + " " + word + " " + song + "<br>");
	console.log(count + word + song);
	count = count -1; // decrement each time 
}


document.write("Life with out beer is'nt the same");