gsap.registerPlugin(TextPlugin);

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {

	entries.map((entry) => {

		let element = entry.target;

		let tl = gsap.timeline({paused: true});
		tl.to(element.querySelector('h2'), {text: element.dataset.title, duration: 1}, 0.5)
		tl.fromTo(element.querySelector('h4'), {y: '-100%', opacity: 0}, {y: 0, opacity: 1}, 1.5)
		tl.fromTo(element.querySelector('p'), {y: '100%', opacity: 0}, {y: 0, opacity: 1}, 1.5)
		tl.fromTo(element.querySelector('img'), {filter: 'brightness(0)'}, {filter: 'brightness(1)'}, 2)
		
		if (entry.isIntersecting) {
		  	tl.play(0);
		} else {
			tl.progress(0);
			element.querySelector('h2').innerText = '';
		}
	  });
}, {
	threshold: 0.5,
})

sections.forEach(section => observer.observe(section));