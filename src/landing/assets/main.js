const API =
  "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=FLV0gFdtCZ_I7FzUZ16MErow&part=snippet&maxResults=6";

const content = null || document.getElementById("content");


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d1084cdd1dmsh1af234db69288fep1029f3jsna7e7b7f57b7b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Error name:', error.name);
    console.log('Error message:', error.message);
    alert(error);
  }
}

function renderVideos(thumbnailURL, title) {
  const article = document.createElement("article");
  article.classList.add("video");
  // contiene image
  const sectionThumbnail = document.createElement("section");
  sectionThumbnail.classList.add("video__thumbnail");

  const image = document.createElement("img");
  image.src = thumbnailURL;

  sectionThumbnail.appendChild(image);
  //
  // contiene title
  const sectionTitle = document.createElement("section");
  sectionTitle.classList.add("video__description");

  const titleH3 = document.createElement("h3");
  const titleText = document.createTextNode(title);

  titleH3.appendChild(titleText);
  sectionTitle.appendChild(titleH3);
  //

  article.append(sectionThumbnail, sectionTitle);
  content.appendChild(article);
}

async function loadVideos() {
  const videos = await fetchData(API);
  const videosItems = videos.items;
  
  content.innerHTML = "";

  videosItems.map((video) => {
    renderVideos(video.snippet.thumbnails.high.url, video.snippet.title);
  });
}

loadVideos();

