var mrToolBox = function (id, settings) {
	var box = this;
	box.set = {
		chk : (id + "_Check"),
		sld : (id + "_Slider"),
		wth : (window.innerWidth > 860) ? 350 : (window.innerWidth / 3),
		txt : (settings != null && settings.text != null) ? settings.text : (window.navigator.language.indexOf("da") != -1 ? "Gem Menu" : "Hide Menu")
	};
	box.slide = false;
	box.elem = document.getElementById(id);
	box.init = function() {
		var hideBox = document.createElement("div");
		hideBox.style.right = "0";
		hideBox.style.top = "0";
		hideBox.style.position = "fixed";
		hideBox.style.zIndex = "999";
		hideBox.style.color = "#777";
		var hideLabel = document.createElement("label");
		hideLabel.innerHTML = box.set.txt;
		var hideCheck = document.createElement("input");
		hideCheck.setAttribute("id", box.set.chk);
		hideCheck.setAttribute("type", "checkbox");
		hideCheck.setAttribute("checked", true);
		hideBox.appendChild(hideLabel);
		hideBox.appendChild(hideCheck);
		hideBox.addEventListener("click", function () {
			var show = document.getElementById(box.set.chk).checked == true;
			var roller;
			var current = show ? 0 : box.set.wth;
			var time = 1;
			if (show) {
				box.elem.style.display = "block";
				roller = setInterval(function () {
					if (current < box.set.wth) {
						current += 25;
						box.elem.style.width = current + "px";
					}
					else {
						clearInterval(roller);
					}					
				}, time);			
			}
			else {
				roller = setInterval(function () {
					if (current > 0) {
						current -= 25;
						box.elem.style.width = current + "px";
					}
					else {
						clearInterval(roller);
						box.elem.style.display = "none";
					}					
				}, time);
			}			
		});
		document.getElementsByTagName("body")[0].appendChild(hideBox);
		box.elem.style.borderRadius = "5px";
		box.elem.style.background = "rgba(133,133,123,0.9)";
		box.elem.style.width = box.set.wth + "px";
		box.elem.style.padding = "10px";
		box.elem.style.top = "0";
		box.elem.style.right = "0";
		box.elem.style.height = "100%";
		box.elem.style.position = "fixed";
		box.elem.style.zIndex = "998";
		box.elem.style.transition = "0.1s";
		var slider = document.createElement("div");
		slider.style.position = "absolute";
		slider.style.width = "8px";
		slider.style.background = "silver";
		slider.style.height = "100%";
		slider.style.left = "0";
		slider.style.top = "0";
		slider.style.transition = "0.1s";
		slider.style.cursor = "w-resize";
		slider.addEventListener("mouseenter", function(event) {
			this.style.boxShadow = "2px 2px 1px grey, 4px 4px 2px snow, 6px 6px 3px Lavender, -3px -3px 5px lavenderblush, -3px 3px 2px navajowhite, 3px -3px 2px mintcream, inset 3px 3px 0 grey, inset -3px -3px 0 grey";
		});
		slider.addEventListener("mouseleave", function(event) {
			this.style.boxShadow = "initial";
		});
		slider.addEventListener("mousedown", function() {
			box.slide = true;
		});
		window.addEventListener("mouseup", function(event) {
			if (box.slide == true) {
				box.set.wth = (window.innerWidth -  event.pageX - 16);
				box.elem.style.width = box.set.wth + "px";
				box.slide = false;
			}
		});
		window.addEventListener("mousemove", function(event) {			
			if (box.slide == true) {
				event.preventDefault();
				box.set.wth = (window.innerWidth -  event.pageX - 16);
				box.elem.style.width = box.set.wth + "px";
			}
		});
		box.elem.appendChild(slider);
	};
	box.init();
	
};