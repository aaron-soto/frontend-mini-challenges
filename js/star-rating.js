let stars = document.querySelectorAll('.fa-star');

stars.forEach((star, idx) => {
	star.addEventListener('mouseover', (event) => {
		for (let i = 0; i < stars.length; i++) {
			if (i <= idx) {
				stars[i].classList.remove('fa-regular');
				stars[i].classList.add('fa-solid');
			}
		}
	});

	star.addEventListener('mouseout', (event) => {
		for (let i = 0; i < stars.length; i++) {
			stars[i].classList.remove('fa-solid');
			stars[i].classList.add('fa-regular');
		}
	});
});

console.log(stars);
