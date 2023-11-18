const apikey = 'IqHM7KGh5ZwVhvehHUmkfovFNIA6DTZW&q';
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}=Metallica&limit=15&offset=0&rating=g&lang=en`;

export default function getGifs({keyword = 'Black Sabbath'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}=${keyword}&limit=15&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      if(Array.isArray(data)){
        const gifs = data.map(image => {
           const {images, title, id} = image  
           const {url} = images.downsized_medium
           return {title, id, url}
      })
      return gifs
      }
    })
};