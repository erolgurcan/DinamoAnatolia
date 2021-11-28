/*Page 2 News Page */

function news(){
    let news = [1, 2, 3, 4, 5, 6, 7, 8];
    let target = document.querySelector("section[id='news']");
    for (let i = 0; i<news.length; i++){
        let div = document.createElement('div');
        let img = document.createElement("img");
        div.id = "div_" + (i+1);
        div.className = "newsDiv";
        img.src = "images\\News\\" +   (i+1) + ".png";
        div.appendChild(img);
        div.setAttribute("onclick", "displayLarger(this);");    
        target.append(div);
    }  
        

        /* News output window*/
        let newsOutTarget = document.getElementById("newsPage");
        let newsOutDiv = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        img.id="newsParagraph"
        newsOutDiv.id = "newOutDiv";

        newsOutDiv.appendChild(p);
        newsOutDiv.appendChild(img);
        newsOutTarget.append(newsOutDiv);       

    let target2 = document.querySelector("select[id='newsOption']");
    for (let i = 0; i<news.length; i++){
        let option = document.createElement('option');
        option.value = i+1;
        option.innerText = i+1;
        option.value = i+1;
        option.style.fontSize = "1.3em";
        id = "newsOption_"
        option.id = "newsOption_" + (i+1);
        target2.append(option);
    } 
}

/*Page 2 Filter Number of News*/
function filterNews(){
    var numOfNews = document.querySelector("option[id^='newsOption_']:checked").value;
    console.log(numOfNews);

    var numOfDivs = document.querySelectorAll("div[id^=div_").length;
    let target = document.querySelector("section[id='news']");
    
    for (let i=0; i<numOfDivs; i++){
        var divId = ("div_" + (i+1));
        console.log(divId);
        var div = document.getElementById(divId);
        div.remove();
    }
    
    for (let i = 0; i<numOfNews; i++){
        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = "images\\News\\" +   (i+1) + ".png";
        div.id = "div_" + (i+1);
        div.className = "newsDiv";
        div.appendChild(img);
        div.setAttribute("onclick", "displayLarger(this);")
        target.append(div);
    }
}

/* News Output Window display images and paragrapg*/
function displayLarger(obj){
    let target = document.getElementById("newsParagraph");
    let img = obj.getElementsByTagName("img");
    img = img[0].currentSrc;
    target.src = img;

    let pTarget = document.getElementById("newOutDiv");
    pTarget = pTarget.getElementsByTagName("p");
    pTarget[0].innerText = "News will be displayed here";
}


function DisplayTeam(){
    let team = [1, 2, 3, 4, 5];
    let target = document.querySelector("section[id='left']");
    for (let i = 0; i<team.length; i++){
        let div = document.createElement('div');
        let img = document.createElement("img");
        div.id = "div_" + (i+1);
        img.src = "images\\Player\\" +   (i+1) + ".png";
        div.appendChild(img);
        div.setAttribute("onclick", "displayFeatures(this);")
        target.append(div);
    }
}

function displayFeatures(obj){

    if(document.getElementById("right").innerText==""){
         teamPlayerBox();
         rateBox();
    }
   
    if(obj.id == "div_1"){
        photo = "1.png";
        name = "Burçak C";
        id = "11111";
        pos = "Right Back";
        playerProperities(photo, name, id, pos);
    }      
   
    else if (obj.id == "div_2"){        
        photo = "2.png";
        name = "Kıvanç O";
        id = "22222";
        pos = "Left Back";
        playerProperities(photo, name, id, pos);
    }

    else if (obj.id == "div_3"){
        photo = "3.png";
        name = "Osman A";
        id = "33333";
        pos = "Goal Keeper";
        playerProperities(photo, name, id, pos);
    }

    else if (obj.id == "div_4"){
        photo = "4.png";
        name = "Burcak E";
        id = "4444";
        pos = "Defense";
        playerProperities(photo, name, id, pos);
   }
       
    else if (obj.id == "div_5"){
        photo = "5.png";
        name = "Sinan A";
        id = "55555";
        pos = "Defense";
        playerProperities(photo, name, id, pos);
   }  
}

function teamPlayerBox(){
    let target = document.querySelector("section[id='right']");
    let div = document.createElement('div');
    div.id = "teamBox";
    let img = document.createElement("img");
    img.id = "playerPhoto";
    let span = document.createElement("span");
    span.id = "playerInfo"
    let h1 = document.createElement("h1")
    h1.id = "playerName";
    let playerId = document.createElement("p")
    playerId.id = "playerId";
    let playerName = document.createElement("p")
    playerName.id = "playerName";
    let team = document.createElement("p");
    team.id = "team";
    let dof = document.createElement("p");
    dof.id = "dateOfBirth";
    let pos = document.createElement("p");
    pos.id = "playerPosition";

    div.appendChild(img);
    div.appendChild(span);
    span.append(playerId);
    span.append(playerName);
    span.append(team)
    span.append(dof);
    span.append(pos);
  
    target.append(div);
}

function playerProperities (photo, name, id, pos){
    document.getElementById("playerPhoto").src = "images\\Player\\" + photo;
    document.getElementById("playerName").innerText = "Player Name: " + name;
    document.getElementById("playerId").innerText = "Player ID: " + id;
    document.getElementById("team").innerText = "Team: " + "Dinamo Anatolia";
    document.getElementById("dateOfBirth").innerText = "Date of Birth: " + "XX/XX/XXXX";
    document.getElementById("playerPosition").innerText = "Player Position " + pos;
}

function rateBox(rate){
    let target = document.querySelector("section[id='right']");
    let div = document.createElement("div");
    div.id = "rateBox";
    
    let h1 = document.createElement("h1");
    h1.innerText = "Do you want to rate the player?: "
    div.appendChild(h1);
    
    let label = document.createElement("label");
    label.for = "ratePlayer";
    label.innerHTML="Rate:";
    
    let input = document.createElement("input");
    input.type = "range";
    input.id = "rateBox";
    input.name = "rateBox";
    input.min = "0";
    input.max="5";
    div.appendChild(input);
    input.innerText="Rate from 0 to 5";
    
    let playerRate = document.createElement("h1");
    playerRate.id = "rateOutput";
    div.appendChild(playerRate);
    
    let figure = document.createElement("figure");
    figure.id = "rateStarBox";
    div.appendChild(figure);

    let img = document.createElement("img");
    img.id="rateStar"
    figure.appendChild(img)

    
    
    div.setAttribute("onchange", "displayRate(this);")
    target.append(div);        
}

function displayRate(obj){
    console.log("----");
    var rate = document.querySelector("input[id='rateBox']").value;
    document.getElementById("rateOutput").innerText = "Player Rate is " + rate;
    var rateStar = document.getElementById("rateStar");
        
    if(rate==0){
        rateStar.src = "";
    }
    else if(rate==1){
        rateStar.src = "images\\Stars\\1.png"
    }
    else if(rate==2){
        rateStar.src = "images\\Stars\\2.png"
    }
    else if(rate==3){
        rateStar.src = "images\\Stars\\3.png"
    }
    else if(rate==4){
        rateStar.src = "images\\Stars\\4.png"
    }
    else if(rate==5){
        rateStar.src = "images\\Stars\\5.png"
    }
}

function changeCardColor(obj){
    var playerCard = document.getElementById("playerCard");
    color = obj.value;
    playerCard.style.backgroundColor = color;
    var PlayerCardText = document.getElementsByClassName("candidateFeatures");
    for(let i=0; i<PlayerCardText.length; i++){
        PlayerCardText[i].style.color="white";
    }

}

function changeCardBorderColor(obj){
    var playerCard = document.getElementById("playerCard");
    color = obj.value;
    playerCard.style.borderColor = color;
}

function changeEmoji(obj){
    console.log(obj.value);
    var emoji = document.getElementById("candidateEmj");
    emoji.innerText = obj.value;
}


function candidateText(form){
    var name = form.elements["candidateName"].value;
    var surname = form.elements["candidateSurName"].value;
    var email = form.elements["candidateEmail"].value;

    var fullname = name + " " + surname;
    var target = document.getElementById("candidateNameOutput");
    target.innerText = fullname;

    var email = document.getElementById("candidateEmail").value;
    var emailTarget = document.getElementById("candidateEmailOutput");
    emailTarget.innerText = email;

    var phone = document.getElementById("candidatePhone").value;
    var phoneTarget = document.getElementById("candidatePhoheNumberOutput");
    phoneTarget.innerText = phone;

    var position = form.querySelector("select[id='choosePosition']").value;
    var positionTarget = document.getElementById("candidatePositionOutput");
    positionTarget.innerText = position;
}

function validateForm(form){
    
    if( checkCandidateName(form) && checkCandidateName(form)  && 
    checkSurname(form)  &&  checkEmail(form)  &&    phoneNumber(form))
    {console.log("asd")}
}

function checkCandidateName(form){
    var name = form.elements["candidateName"];
    if (name.validity.valueMissing){
        console.log("asd");
        name.setCustomValidity("Enter a cool player name here...");
        return false;}

     else{
         name.setCustomValidity("");
         return true;
     }
}

function checkSurname(form){
    var surname = form.elements["candidateSurName"];
    if (surname.validity.valueMissing){
        surname.setCustomValidity("Enter your surname as well...");
        return false;}
       
     else{
         surname.setCustomValidity("");
         return true;
     }
}

function checkEmail(form){
    var email = form.elements["candidateEmail"];
    if (email.validity.valueMissing){
        email.setCustomValidity("You need to enter your email, so we can get back to you");
        return false;}

    else if (email.validity.typeMismatch){
        email.setCustomValidity("Enter your email in correct format");
    }

    else{
         email.setCustomValidity("");
         return true;
     }
}

function phoneNumber(form){
    var phoneNumber = form.elements["candidatePhone"];
    if (phoneNumber.validity.valueMissing){
        phoneNumber.setCustomValidity("Please type your phone number");
        return false;}

    else if (phoneNumber.validity.patternMismatch){
        phoneNumber.setCustomValidity("Enter 7 digit phone number");
    }

    else{
         phoneNumber.setCustomValidity("");
         return true;
     }
}