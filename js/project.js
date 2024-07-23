var modalInfo = {
    1: {
      title: "CatWeather ChatBot",
      info: "For all cat lovers this bot is used to get weather data for cats in different cities.",
      link: "https://d2xh80wvwfgclj.cloudfront.net",
      github: "https://github.com/alivia-23/CatWeatherChatBot"
    },
    2: {
      title: "Shortify",
      info: "It is the backend of a URL shortening service. It takes a long URL and converts it into a shorter one.",
      link: "https://github.com/alivia-23/URLShortener",
      github: "https://github.com/alivia-23/URLShortener"
    },
    3: {
      title: "Simple Calculator",
      info: "A simple calculator which can perform basic arithmetic operations.",
      link: "https://alivia-23.github.io/CalculatorApp/",
      github: "https://github.com/alivia-23/CalculatorApp"
    },
    4: {
      title: "Personal Portfolio",
      info: "Created my Persnal Portfolio😀 using HTML,CSS and JS.",
      link: "https://alivia-23.github.io/Alivia-portfolio/",
      github: "https://github.com/alivia-23/Alivia-portfolio"
    },
    5: {
      title: "Tic Tac Toe",
      info: "It is a game between two player",
      link: "https://alivia-23.github.io/Tic-Tac-Toe-Game/",
      github: "https://github.com/alivia-23/Tic-Tac-Toe-Game"
    },
    6 : {
      title: "Todo List",
      info: "Users can list to-do items with functionalities like sort, add, delete and strike out the items which are done",
      link: "https://github.com/alivia-23/react-todo-app",
      github: "https://github.com/alivia-23/react-todo-app"
    },
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
