var bio = {
  "name": "Jonathan Somer",
  "role": "Web developer",
  "welcomeMessage": "Welcome to my resume",
  "biopic": "images/me1.jpg",
  "contacts": {
      "mobile": "+9721234567",
      "email": "jonathan.somer@gmail.com",
      "github": "jonathan6655321",
      "location": "Israel"
    },
  "skills": ["strong", "fast", "cool"]
};

var education = {
  "schools": [
    {
      "name": "Tel Aviv Univerity",
      "locaion": "Tel Aviv",
      "degree dates": "2015-2018",
      "url": "https://www.tau.ac.il/",
      "majors": ["CS", "Biology"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web developer",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "AngelSense, Doron Somer (CEO)",
      "title": "Customer Service",
      "location": "Kadima",
      "dates": "2015-2016",
      "description": "Managing the customer service part of this startup. In addition,\
      being that it was a small startup I also created content (web pages, FAQ), and \
      made sales calls."
    },
    {
      "employer": "Canvas Earth",
      "title": "CO-founder and Product Manager",
      "location": "Tel-aviv",
      "dates": "2016-",
      "description": "A project that started with the goal of participation in a hackathon, upon\
      winning that hackathon became a small startup."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Project1",
      "dates": "2000-2001",
      "description": "A description of the project",
      "images": ["http://placehold.it/300x300", "http://placehold.it/300x300", "http://placehold.it/300x300"]
    },
    {
      "title": "Project2",
      "dates": "2000-2001",
      "description": "A description of the project",
      "images": ["http://placehold.it/300x300", "http://placehold.it/300x300", "http://placehold.it/300x300"]
    }
  ]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var contactsList = [formattedMobile, formattedEmail, formattedGithub];
for (contactIndex in contactsList) {
  $("#topContacts").append(contactsList[contactIndex]);
}

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length != 0) {
  $("#header").append(HTMLskillsStart);
  for (skillIndex in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillIndex]));
  }
}

function displayWork() {
  for (jobIndex in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}
displayWork();

function internationalize(oldName) {
    var finalName = oldName;
    var names = finalName.split(' ');
    names[1] = names[1].toUpperCase();
    names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");


    return finalName;
}

$("#main").append(internationalizeButton);

function inName(oldName) {
  return internationalize(oldName);
}

projects.display = function() {
  for (projectIndex in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[projectIndex].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description));
    for (imageIndex in projects.projects[projectIndex].images) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imageIndex]));
    }
  }
}

projects.display();

$("#mapDiv").append(googleMap);
