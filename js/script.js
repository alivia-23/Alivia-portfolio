function sixty(x) {
    x.src="./images/sixty.png";
}
function sixtyFive(x) {
    x.src="./images/sixtyfive.png";
}
function seventy(x) {
    x.src="./images/seventy.png";
}
function seventyFive(x) {
    x.src="./images/seventyfive.png";
}
function eighty(x) {
    x.src="./images/eighty.png";
}
function ninety(x) {
    x.src="./images/ninety.png";
}
function eightyFive(x) {
    x.src="./images/eightyfive.png";
}
function displayJava(x) {
    x.src="./images/java.png";
}
function displayJS(x) {
    x.src="./images/js.jpeg";
}
function displayPython(x) {
    x.src="./images/python_new.png";
}
function displayHtml(x) {
    x.src="./images/html.png";
}
function displayCSS(x) {
    x.src="./images/css.png";
}
function displaySwift(x) {
    x.src="./images/Swift.jpeg";
}
function displaySql(x) {
    x.src="./images/sql.webp";
}
function displayOOPS(x) {
    x.src="./images/OOPs.jpeg";
}
function displayDS(x) {
    x.src="../images/algorithms.png";
}
function displayDbms(x) {
    x.src="./images/dbms.webp";
}
function displayReact(x) {
    x.src="./images/react-logo.png";
}
function displayRubyOnRails(x) {
    x.src="./images/rubyonrails.png";
}
function displayAngular(x) {
    x.src="./images/Angular.png";
}
function mysql(x) {
    x.src="./images/mysql.png";
}
function mssql(x) {
    x.src="./images/mssql.jpeg";
}
function github(x) {
    x.src="./images/GitHub-Mark.png";
}

window.onload = function() {
    var aboutMe = document.getElementById('about-me');
    aboutMe.innerHTML = "I am a Full Stack Developer and a Java Programmer. I graduated from Northeastern University by completing my Masters in Information Systems, specialized in Computer Software Engineering.\
    I can't stop learning new things, the more, the better. Being a Software Engineer, Coding is like a hobby to me.\
    I believe I am an enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a successful\
    career. I keep myself motivated and active and I want to learn more from experienced people.\<br><br>\
    I love solving problems. I have worked on multiple technologies like Java, Javascript, Python, SQL, HTML, React, Ruby on Rails, Angular,  CSS, MySQL, PosgreSQL.\
    I am passionate about implementing and launching new projects."
};

function DownloadFile(fileName) {
    //Set the File URL.
    var url = "images/" + fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};
