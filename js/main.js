    
    var backImage = document.querySelector(".background-svg");
    var menuIcon = document.querySelector(".menu-icon");
    var button = document.querySelectorAll("button");
    var iconLine = document.getElementById("iconLine");
    var navUl = document.querySelector(".nav-ul");
    menuIcon.onclick = e=>{
        menuIcon.classList.toggle("show-menu");
        navUl.classList.toggle("menu");
        const lineOne = iconLine.firstElementChild;
        const lineTwo = iconLine.lastElementChild;
        if(menuIcon.classList.contains("show-menu")){
            lineOne.setAttribute('x1', 25);
            lineOne.setAttribute('x2', 75);
            lineTwo.setAttribute('x1', 25);
            lineTwo.setAttribute('x2', 75);
        }else {
            lineOne.setAttribute('x1', 35);
            lineOne.setAttribute('x2', 65);
            lineTwo.setAttribute('x1', 35);
            lineTwo.setAttribute('x2', 65);
        }       
    }

    var bannerCover = document.querySelector(".banner-body");
    var banner = document.querySelectorAll(".banner");
    var indicator = document.querySelector(".banner-indicators");
    var prev = indicator.firstElementChild;
    var next = indicator.lastElementChild;
    var index = 0;
    var dotField = document.querySelector(".dot-item");
    next.onclick = ()=>{
        if(index == banner.length - 1){
            index = 0;
        }else{
            index++;
        }
        dispalyBanner();
        pas();
        background(index);
    }
    prev.onclick = ()=>{
        if (index == 0) {
			index = banner.length - 1;
		}
		else{
			index--;
		}
        dispalyBanner();
        pas();
        background(index);
    }
    function dispalyBanner(){
		for(var i=0; i<banner.length; i++)
		{
			banner[i].classList.remove('active');	
		}
		banner[index].classList.add('active');
		
	}
    function creatEle(){
		for(var i=0; i<banner.length; i++){
			var li = document.createElement('li');
            var a = document.createElement('a'); a.href = "#";
            li.appendChild(a);
			li.setAttribute('onclick', 'indicate(this)');
			li.id = i;
			if (i==0) {
				li.className = 'active';
			}
			dotField.appendChild(li);
		}
	}
	creatEle();
    function indicate(e){
		index = e.id;
		dispalyBanner();
		pas();
        background(index);
	}

    // add  and remove class when active p element
	function pas(){
		for(var i=0; i<dotField.children.length; i++){
			dotField.children[i].classList.remove('active');
		}
		dotField.children[index].classList.add('active');
	}


    function background(index){
        if(index == 1){
            backImage.style.fill = "#490049";
            button[index].style.background = "#490049";
            menuIcon.style.background = "#490049";
        }
        else if(index == 2){
            backImage.style.fill = "#904600";
            button[index].style.background = "#904600";
            menuIcon.style.background = "#904600";
        }
        else if(index == 3){
            backImage.style.fill = "orange";
            button[index].style.background = "orange";
            menuIcon.style.background = "orange";
        }
        else{
            backImage.style.fill = "#222";
            menuIcon.style.background = "#222";
        }
    }

   