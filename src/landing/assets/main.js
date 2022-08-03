const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=FLV0gFdtCZ_I7FzUZ16MErow&part=snippet&maxResults=6';

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
    const copiaVideos = videos;
    console.log(copiaVideos);

    let view = `
      ${copiaVideos.items.map(video => `
        <div class="video"> 
          <section class="video__thumbnail">
            <img src="${video.snippet.thumbnails.high.url}" alt="Video thumbnail">
          </section>

          <section class="video__description">
            <h3>
              ${video.snippet.title}
            </h3>            
          </section>
        </div>
      `).slice(0,6).join('')}      
    `;
    content.innerHTML = view;
  } catch(error) {
    console.log(error);
  }
})();