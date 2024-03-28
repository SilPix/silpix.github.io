const everything = document.querySelector(".content");
let sectionList = document.querySelectorAll(".box");
let fadeSectionList = document.querySelectorAll(".fade-in-section");
console.log(sectionList.length);

function start(){
	if(everything.classList.contains("hidden")){
		everything.classList.remove("hidden");
	} else {
		everything.classList.add("hidden");
	}
}

function slidefade(entries, section){
	entries.forEach((entry) => {
		/*if(entry.isIntersecting){
			section = entry.target;
			section.classList.add("is-visible");
		}/*else{
			section = entry.target;
			section.classList.remove("is-visible");
		}*/

		if(entry.intersectionRatio > 0.1){
			section = entry.target;
			section.classList.add("is-visible");
		}
	});
}

let options = {
	root: null,
	rootMargin: "0px",
	threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
};

let observer = new IntersectionObserver(slidefade, options);
for(let i=0; i < sectionList.length; i++){
	observer.observe(sectionList[i]);

	sectionList[i].addEventListener("animationend", () => {
		fadeSectionList[i].style.opacity = 1;
		fadeSectionList[i].style.transform = "none";
	});
}