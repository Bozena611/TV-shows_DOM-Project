function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log (allEpisodes);

  //===== USE LATER WHEN I HAVE SHOWS ====
  /*let header = document.getElementById("header");
  header.style.backgroundImage = "url(./img/the-fosters.jpg)";*/
  //===============================================================
  addSearchLine();
  makePageForEpisodes(allEpisodes);
}

function addSearchLine() {
	const rootElem = document.getElementById("root");

	let searchContainer = document.createElement("div");
	searchContainer.setAttribute("id", "search-container");
	rootElem.appendChild(searchContainer);

	let searchInputDiv = document.createElement("div");
	searchInputDiv.setAttribute("id", "search-input-div");

	let searchInputLabel = document.createElement("label");
	searchInputLabel.setAttribute("for", "search-input");
	searchInputLabel.setAttribute("id", "search-label");
	searchInputLabel.innerHTML = `Search shows: `;
	searchInputDiv.appendChild(searchInputLabel);

	let searchInput = document.createElement("input");
	searchInput.setAttribute("type", "search");
	searchInput.setAttribute("id", "search-input");
	searchInput.setAttribute("name", "searchshows");
	searchInputDiv.appendChild(searchInput);
	searchContainer.appendChild(searchInputDiv);

	let displayCounterDiv = document.createElement("div");
	displayCounterDiv.setAttribute("id", "display-counter-div");
	searchContainer.appendChild(displayCounterDiv);
	let displayCounterText = document.createElement("p");
	displayCounterText.setAttribute("id", "display-counter-text");
	displayCounterText.innerHTML = `Displaying ?/? episodes`;
	displayCounterDiv.appendChild(displayCounterText);

	searchContainer.appendChild(displayCounterDiv);

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