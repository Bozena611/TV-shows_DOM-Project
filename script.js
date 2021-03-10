//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  //console.log (allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(allEpisodes) {
	const rootElem = document.getElementById("root");
  //console.log(allEpisodes[0].id)
  //rootElem.textContent = `Got ${allEpisodes.length} episode(s)`;
  
  let episodesContainer = document.createElement("div");
	episodesContainer.setAttribute("id", "episodes-container");
	rootElem.appendChild(episodesContainer);

	allEpisodes.forEach((element) => {
		let episodeDiv = document.createElement("div");
		episodeDiv.setAttribute("class", "episode-div")
		

		let episodeTitle = document.createElement("h2");
		episodeTitle.setAttribute("class", "episode-title");
		episodeTitle.innerHTML = element.name
		let episodeImg = document.createElement("img");
		episodeImg.src = element.image.medium;
		let episodeSummary = document.createElement("p");
		episodeSummary.innerHTML = element.summary;
		episodeDiv.append(episodeTitle,episodeImg,episodeSummary);
		episodesContainer.appendChild(episodeDiv)
	})
	
	console.log (episodesContainer);
}

window.onload = setup;