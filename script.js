//You can edit ALL of the code here
function setup() {
  const oneEpisode = getOneShow();
  console.log (oneEpisode);
  makePageForEpisodes(oneEpisode);
}

function makePageForEpisodes(episode) {
  const rootElem = document.getElementById("root");
  console.log(episode)
  rootElem.textContent = `Got ${episode.name} episode(s)`;
}

window.onload = setup;