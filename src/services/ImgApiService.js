async function ImgApiService(){
  try{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    const imageUrl = data.results[0].picture.large;
    return imageUrl;
  }catch(error){
    console.error('Erro ao buscar imagem:', error);
    return 'Erro ao carregar imagem';
  }
}

export default ImgApiService;