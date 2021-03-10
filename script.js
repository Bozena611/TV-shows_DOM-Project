function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log (allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function formatSeasonNum(num){
	if (num<10) {
		return "0" + num;
	} else {
		return num;
	}
}

function makePageForEpisodes(allEpisodes) {
	const rootElem = document.getElementById("root");
  //console.log(allEpisodes[0].id)
  let episodesContainer = document.createElement("div");
	episodesContainer.setAttribute("id", "episodes-container");
	rootElem.appendChild(episodesContainer);

	allEpisodes.forEach((element) => {
		let episodeDiv = document.createElement("div");
		episodeDiv.setAttribute("class", "episode-div")
		let episodeTitle = document.createElement("h2");
		episodeTitle.setAttribute("class", "episode-title");
		let season = element.season;
		let eppy = element.number;
		episodeTitle.innerHTML = `${element.name} - S${formatSeasonNum(season)}E${formatSeasonNum(eppy)}`
		let episodeImg = document.createElement("img");
		episodeImg.src = element.image.medium;
		let episodeSummary = document.createElement("div");
		episodeSummary.innerHTML = element.summary;
		episodeDiv.append(episodeTitle, episodeImg, episodeSummary);
		episodesContainer.appendChild(episodeDiv)
	})
	console.log (episodesContainer);
}

window.onload = setup;