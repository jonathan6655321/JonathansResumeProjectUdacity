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
    "skills": ["strong", "fast", "cool"],
    "display": function() {
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            $("#header").prepend(formattedRole);
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(formattedName);

            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var contactsList = [formattedMobile, formattedEmail, formattedGithub];
            for (var contactIndex in contactsList) {
                $("#topContacts").append(contactsList[contactIndex]);
            }

            var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(formattedbioPic);

            var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(formattedWelcomeMessage);

            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (var skillIndex in bio.skills) {
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillIndex]));
                }
            }
        } // described later.
};

bio.display();

var education = {
    "schools": [{
        "name": "Tel Aviv Univerity",
        "locaion": "Tel Aviv",
        "degree": "B.sc",
        "majors": ["CS", "Biology"],
        "dates": "2015-2018",
        "url": "https://www.tau.ac.il/",
    }],
    "onlineCourses": [{
        "title": "Front End Web developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        for (var i in education.schools) {
            var educationStart = HTMLschoolStart;
            $("#education").append(educationStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            for (var j in education.schools[i].majors) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        if (education.onlineCourses.length > 0) {
            var onlineCoursesStart = HTMLonlineClasses;
            $("#education").append(onlineCoursesStart);
            for (i in education.onlineCourses) {
                var onlineStart = HTMLschoolStart;
                $("#education").append(onlineStart);
                var onlineCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var onlineCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                $(".education-entry:last").append(onlineCoursesTitle + onlineCoursesSchool);
                var onlineCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                $(".education-entry:last").append(onlineCoursesDates);
            }
        }
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "Employer1",
        "title": "title1",
        "location": "location1",
        "dates": "2015-2016",
        "description": "The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae. The commonly used term African lion collectively denotes the several subspecies in Africa. With some males exceeding 250 kg (550 lb) in weight,[4] it is the second-largest living cat after the tiger. Wild lions currently exist in sub-Saharan Africa and in India (where an endangered remnant population resides in Gir Forest National Park). In ancient historic times, their range was in most of Africa, including North Africa, and across Eurasia from Greece and southeastern Europe to India. In the late Pleistocene, about 10,000 years ago, the lion was the most widespread large land mammal after humans: Panthera leo spelaea lived in northern and western Europe and Panthera leo atrox lived in the Americas from the Yukon to Peru.[5] The lion is classified as a vulnerable species by the IUCN, having seen a major population decline in its African range of 30–50% per two decades during the second half of the twentieth century.[2] Lion populations are untenable outside designated reserves and national parks. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are the greatest causes of concern. Within Africa, the West African lion population is particularly endangered."
    }, {
        "employer": "employer2",
        "title": "title2",
        "location": "location2",
        "dates": "2016-2020",
        "description": "In the wild, males seldom live longer than 10 to 14 years, as injuries sustained from continual fighting with rival males greatly reduce their longevity.[6] In captivity they can live more than 20 years. They typically inhabit savanna and grassland, although they may take to bush and forest. Lions are unusually social compared to other cats. A pride of lions consists of related females and offspring and a small number of adult males. Groups of female lions typically hunt together, preying mostly on large ungulates. Lions are apex and keystone predators, although they are also expert scavengers obtaining over 50 percent of their food by scavenging as opportunity allows. While lions do not typically hunt humans, some have. Sleeping mainly during the day, lions are active primarily at night (nocturnal), although sometimes at twilight (crepuscular).[7][8]"
    }],
    "display": function() {
        for (var jobIndex in work.jobs) {
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
};

work.display();

var projects = {
    "projects": [{
        "title": "Project1",
        "dates": "2000-2001",
        "description": "A description of the project",
        "images": ["http://placehold.it/300x300", "http://placehold.it/300x300", "http://placehold.it/300x300"]
    }, {
        "title": "Project2",
        "dates": "2000-2001",
        "description": "A description of the project",
        "images": ["http://placehold.it/300x300", "http://placehold.it/300x300", "http://placehold.it/300x300"]
    }],
    "display": function() {
        for (var projectIndex in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[projectIndex].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description));
            for (var imageIndex in projects.projects[projectIndex].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imageIndex]));
            }
        }
    }
};

projects.display();

// function internationalize(oldName) {
//     var finalName = oldName;
//     var names = finalName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//
//
//     return finalName;
// }
//
// $("#main").append(internationalizeButton);
//
// function inName(oldName) {
//   return internationalize(oldName);
// }


$("#mapDiv").append(googleMap);
