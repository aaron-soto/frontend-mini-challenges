let lastCommitDateText = document.getElementById('last-commit-date');

let url =
	'https://api.github.com/repos/aaron-soto/frontend-mini-challenges/commits/master';

fetch(url)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		lastCommitDateText.innerHTML = moment(data.commit.committer.date).format(
			'MMM Do YYYY'
		);
	})
	.catch(function () {
		console.log('Booo');
	});
