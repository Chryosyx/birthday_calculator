var birthday = document.querySelector(".input_date");
var calculate_button = document.querySelector(".calculate_button");
var output = document.querySelector(".output");

calculate_button.addEventListener("click", () => {
	output.innerText = calculateAge();
})

function calculateAge() {
	if (birthday.value === "") {
		output.style.color = "red";
		return output.innerText = "Bitte gib dein Geburtsdatum ein!";
	} else {
		output.style.color = "#fff"
		return getAge();
	}
}

function getAge() {
	var current_date = new Date();
	var birthday_date = new Date(birthday.value);

	var years = current_date.getFullYear() - birthday_date.getFullYear();
	var months = current_date.getMonth() - birthday_date.getMonth();
	var days = current_date.getDate() - birthday_date.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
		months += 12;
	}

	if (days < 0) {
		months--;
		var last_month = new Date(current_date.getFullYear(), current_date.getMonth() - 1, 1);
		days += (new Date(last_month.getFullYear(), last_month.getMonth() + 1, 0)).getDate();
	}

	return "Du bist " + years + " Jahre, " + months + " Monate, " + days + " Tage alt";
}

