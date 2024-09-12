function btnChangeTxt(Obj){
    if (Obj.value=="Click Me Again") Obj.value = "Click Me";
    else Obj.value = "Click Me Again";
}

function testingFocus(Obj){
    if (Obj.value=="Click Me Next") Obj.value = "Click Me";
    if (Obj.Value=="Click Me") Obj.value = "Click Me Next";
}

function changePage(Obj){
    if (Obj.className=="CenterItemAboutMe"){
        window.location.href="AboutMePage";
    }else if (Obj.className=="CenterItemSkill"){
        window.location.href="SkillPage";
    }else if (Obj.className=="CenterItemEducation"){
        window.location.href="EducationPage";
    }else if (Obj.className=="CenterItemContact"){
        window.location.href="ContactPage";
    }else{
        window.location.href="Index";
    }
}

function changeWindowFocus(Obj){
    if (Obj.className=="SkillIcon"){
        var element = document.getElementById("CenterItem");
        var element2 = document.getElementById("LeftItemId");
        var element3 = document.getElementById("RightItemId");
        element.className="CenterItemSkill";
        element.src="ImageFiles/Placeholder.png";
        
        element2.className="AboutmeIcon";
        element2.src="ImageFiles/AboutmeIcon.png";
        
        element3.className="EducationIcon";
        element3.src="ImageFiles/EducationIcon.png";
    }
    else if (Obj.className=="EducationIcon"){
        var element = document.getElementById("CenterItem");
        var element2 = document.getElementById("LeftItemId");
        var element3 = document.getElementById("RightItemId");
        element.className="CenterItemEducation";
        element.src="ImageFiles/Placeholder.png";
        
        element2.className="SkillIcon";
        element2.src="ImageFiles/SkillIcon.png";
        
        element3.className="ContactIcon";
        element3.src="ImageFiles/ContactIcon.png";
    }
    else if (Obj.className=="ContactIcon"){
        var element = document.getElementById("CenterItem");
        var element2 = document.getElementById("LeftItemId");
        var element3 = document.getElementById("RightItemId");
        element.className="CenterItemContact";
        element.src="ImageFiles/Placeholder.png";

        element2.className="EducationIcon";
        element2.src="ImageFiles/EducationIcon.png";

        element3.className="AboutmeIcon";
        element3.src="ImageFiles/AboutmeIcon.png";
    }
    else{
        var element = document.getElementById("CenterItem");
        var element2 = document.getElementById("LeftItemId");
        var element3 = document.getElementById("RightItemId");
        element.className="CenterItemAboutMe";
        element.src="ImageFiles/Placeholder.png";

        element2.className="ContactIcon";
        element2.src="ImageFiles/ContactIcon.png";

        element3.className="SkillIcon";
        element3.src="ImageFiles/SkillIcon.png";
    }
}

function showContent(){
    var selectionBox = document.getElementById("options");
    var selected = (selectionBox.options[selectionBox.selectedIndex].value);
    var hide1 = document.getElementById("AboutMe");
    var hide2 = document.getElementById("LikesDislikes");
    var hide3 = document.getElementById("Projects");
    var hide4 = document.getElementById("Person");
    if (selected == "About Me"){
        var pageToShow = document.getElementById("AboutMe");
        pageToShow.style.display = "block";
        hide4.style.display = "none";
        hide2.style.display = "none";
        hide3.style.display = "none";
    } else if (selected == "Person"){
        var pageToShow = document.getElementById("Person");
        pageToShow.style.display = "block";
        hide1.style.display = "none";
        hide2.style.display = "none";
        hide3.style.display = "none";
    } else if (selected == "Likes Dislikes"){
        var pageToShow = document.getElementById("LikesDislikes");
        pageToShow.style.display = "block";
        hide1.style.display = "none";
        hide3.style.display = "none";
        hide4.style.display = "none";
    } else{
        var pageToShow = document.getElementById("Projects");
        pageToShow.style.display = "block";
        hide1.style.display = "none";
        hide2.style.display = "none";
        hide4.style.display = "none";
    }
}

function wait(){
    var screenEffect = document.getElementById("staticScreen")
    screenEffect.style.display = "block";
    setTimeout(function(){
        screenEffect.style.display = "none";
    },1000)
}

function hide(h1, h2, h3, h4, h5){
    h1.style.display = "none";
    h2.style.display = "none";
    h3.style.display = "none";
    h4.style.display = "none";
    h5.style.display = "none";
}

function changeChannel(Obj){
    var hide1 = document.getElementById("tvBase")
    var hide2 = document.getElementById("tvProgramming")
    var hide3 = document.getElementById("tvDesign")
    var hide4 = document.getElementById("tvGame")
    var hide5 = document.getElementById("tvComputer")
    var hide6 = document.getElementById("tvCook")
    if (Obj.className == "programming" && hide2.style.display == "none"){
        wait();
        hide2.style.display = "block";
        hide(hide1, hide3, hide4, hide5, hide6);
    } else if (Obj.className == "design" && hide3.style.display == "none"){
        wait();
        hide3.style.display = "block";
        hide(hide1, hide2, hide4, hide5, hide6);
    } else if (Obj.className == "game" && hide4.style.display == "none"){
        wait();
        hide4.style.display = "block";
        hide(hide1, hide2, hide3, hide5, hide6);
    } else if (Obj.className == "computer" && hide5.style.display == "none"){
        wait();
        hide5.style.display = "block";
        hide(hide1, hide2, hide3, hide4, hide6);
    } else if (Obj.className == "cook" && hide6.style.display == "none"){
        wait();
        hide6.style.display = "block";
        hide(hide1, hide2, hide3, hide4, hide5);
    } else{
        wait()
        hide1.style.display = "block";
        hide(hide2, hide3, hide4, hide5, hide6);
    }
    
}

function backtotopFunction(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

let enterSound = document.getElementById("openVolume")
enterSound.volume = 0.05