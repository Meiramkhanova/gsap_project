var tl  =  gsap.timeline(
	{scrollTrigger:{
		trigger: ".second",
		start: "0% 92%",  
		end: "42% 40%",
		scrub : true,
		markers: true
	}}
)

tl.to("#fuseTea" , {
	top: "102%",
	left: "4%"
}, 'firstTimeRegulator')

tl.to("#orange-cut", {
	top: "155%",
	left : "23%"
}, 'firstTimeRegulator')

tl.to("#orange", {
	width: "12%",
	top: "170%",
	right: "5%",
}, 'firstTimeRegulator')

tl.to("#leaf", {
	rotate: "130deg",
	top: "100%",
	left: "70%",
}, 'firstTimeRegulator')

tl.to("#leaf2", {
	rotate: "130deg",
	top: "105%",
	left: "0%"
}, 'firstTimeRegulator')


var tl2 = gsap.timeline({scrollTrigger:{
	trigger: ".third",
	start: "0% 95%",
	end: "20% 50%",
	scrub : true,
	// markers: true
}})

tl2.to("#orange-cut",{
	width: "18%",
	left:"41%",
	top: "206%"
},'secondTimeRegulator')

tl2.to("#fuseTea",{
	width: "28%",
	top: "214%",
	left: "36%",
}, 'secondTimeRegulator')

