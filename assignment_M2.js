
findGradeLevel("John", 500)

function findGradeLevel(name, marks) {
    
    if (marks <= 10 || marks >= 100) {
        console.log(name + " Invalid marks")
    }

    else if (marks >= 90 && marks <= 100) {
        console.log(name + " You have received S grade")
    }
  

    else if (marks >= 80 && marks < 90) {
        console.log(name + " You have received A grade")
    }

    else if (marks >= 70 && marks < 80) {
        console.log(name + " You have received B grade")
    }

    else if (marks >= 60 && marks < 70) {
        console.log(name + " You have received C grade")
    }

    else if (marks >= 50 && marks < 60) {
        console.log(name + " You have received D grade")
    }
    else if (marks >= 10 && marks < 50) {
        console.log(name + " Student has failed")
    }


}