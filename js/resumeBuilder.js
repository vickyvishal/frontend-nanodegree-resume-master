var bio = {
	"name": "Vicky Vishal",
	"role": "Web Developer",
	"contacts": {
		"mobile": "9776973925",
		"email": "vicky.vishal.sahu@gmail.com",
		"twitter": "@realivishals",
		"github": "vickyvishal",
		"location": "Bangalore"
	},
	"welcomeMessage": "I am a Frontend Wizard. A wizard is never late nor he is early, he arrives precisely in the right time i.e when you want to design great responsive website",
	"skills": ["HTML5", "JavaScript", "CSS3", "Wizard"],
	"biopic": "images/fry.jpg"
};

var education = {
	"schools": [{
			"name": "Institute of Technical and Education Research",
			"url": "http://www.soauniversity.ac.in/iter/",
			"location": "Bhubaneswar",
			"dates": "2012-2016",
			"degree": "Bachelor in Technology",
			"majors": ["Computer Science and Engineering"]
		},
		{
			"name": "Bhagya College of Science",
			"url": "http://www.careerpoint.ac.in/",
			"location": "Bhubaneswar",
			"dates": "2009-2011",
			"degree": "CHSE",
			"majors": ["Science"]
		},
		{
			"name": "St Vincents Convent School",
			"url": "http://www.stvcsbrahmapur.com/",
			"location": "Berhampur",
			"dates": "Passed 2009",
			"degree": "CISCE",
			"majors": ["Science", "Art", "Literature", "Physical Education"]
		}
	],

	"onlineCourses": [{
		"title": "Frontend developer-Nano Degree",
		"school": "Udacity",
		"dates": "Deceember 2016",
		"url": "https://www.udacity.com/",
		"udacity": "Go to udacity"
	}]

};

var work = {
	"jobs": [{
			"employer": "Directi",
			"url": "https://zeta.in/",
			"title": "Application Support Specialist",
			"location": "Bangalore",
			"dates": "26th June to 01st December",
			"description": "Trobuleshooting the ios and android app."+" "+"Taking queries from end customer and solving it."+" "+"Queries include payment gateway failure, balance mismatch, product support."
		},

		{
			"employer": "Defacto",
			"url": "https://www.facebook.com/OdishaQA/",
			"title": "QuizMaster",
			"location": "Bhubaneswar",
			"dates": "1st June 2014 to 1st August 2015",
			"description": "Organize General quiz. Prepare awesome question which has awesome answers. Make the quiz session as interactive as possible."
		}
	]
};

var projects = {
	"projects": [{
			"title": "Smart room control",
			"dates": "Jan to March 2016",
			"description": "Save elctricity which is wasted due to human ignorance",
			"images": ["images/smart.jpg", "images/atmel.jpg"]
		},

		{
			"title": "Project Mayhem",
			"dates": "1999",
			"description": "To reset the economy debt",
			"images": ["images/projectMayhem.jpg"]
		}
	]
};

var data = "%data%";

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedrole = HTMLheaderRole.replace(data, bio.role);
	$("#header").prepend(formattedrole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);
	var formattedlocation = HTMLlocation.replace(data, bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedlocation);
	var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
	$("#header").append(formattedbioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace(data, skill);
		$("#skills").append(formattedSkill);
});
};
bio.display();

work.display = function() {
	work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(data, job.employer).replace("#", job.url);
		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace(data, job.location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDates = HTMLworkDates.replace(data, job.dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace(data, job.description);
		$('.work-entry:last').append(formattedDescription);
	});
};
work.display();

//for practice quiz
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
}); //practice quiz

//for practice quiz
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work)); //practice quiz

projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(data, project.title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace(data, project.dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace(data, project.description);
		$(".project-entry:last").append(formattedDescription);
		project.images.forEach(function(img) {
			var formattedImage = HTMLprojectImage.replace(data, img);
			$(".project-entry:last").append(formattedImage);
		});
	});
};
projects.display();


education.display = function() {
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace(data, school.name).replace("#", school.url);
			var formattedschoolDegree = HTMLschoolDegree.replace(data, school.degree);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
			var formattedschoolCity = HTMLschoolLocation.replace(data, school.location);
			$(".education-entry:last").append(formattedschoolCity);
			var formattedschoolDate = HTMLschoolDates.replace(data, school.dates);
			$(".education-entry:last").append(formattedschoolDate);
			school.majors.forEach(function(major) {
			var formattedschoolMajor = HTMLschoolMajor.replace(data, major);
			$(".education-entry:last").append(formattedschoolMajor);
		});
	});
		$(".education-entry:last").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(online) {
			var formattedonlineTitle = HTMLonlineTitle.replace(data, online.title);
			var formattedonlineSchool = HTMLonlineSchool.replace(data, online.school);
			$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
			var formattedonlineDates = HTMLonlineDates.replace(data, online.dates);
			$(".education-entry:last").append(formattedonlineDates);
			var formattedonlineURL = HTMLonlineURL.replace("#", online.url).replace(data, online.udacity);
			$(".education-entry:last").append(formattedonlineURL);
		});
};
education.display();


$("#mapDiv").append(googleMap);