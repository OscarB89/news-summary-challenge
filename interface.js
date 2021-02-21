fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2020-02-20&api-key=test')
.then(response => {
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("ERROR");
    }
    return response.json();
})
.then(data => {
  let newsContainer = document.getElementById('news-title');
  let newsArray = data.response.results
  for(let i = 0; i < 10; i++) {
    let newsStory = `<div>${newsArray[i].webTitle}</div>`
    newsContainer.innerHTML += newsStory
  }
})
.catch(error => console.error(error));