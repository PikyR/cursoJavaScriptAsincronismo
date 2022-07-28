const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=FLV0gFdtCZ_I7FzUZ16MErow&part=snippet&maxResults=2';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1084cdd1dmsh1af234db69288fep1029f3jsna7e7b7f57b7b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);

    let view = `
      ${videos.items.map(video => `
        <div> 
          <div>
            <img src="${video.snipet.thumbnail.high.url}" alt="${video.snippet.description}">
          </div>
        
          <div>
            <h3>
              <span>?</span>
              ${video.title}
            </h3>
          </div>
        </div>
      `).slice(0,4).join('')}
      
    `;
  } catch {

  }
})();