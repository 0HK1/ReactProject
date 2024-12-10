const NameApiService = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const randomName = `${data.results[0].name.first} ${data.results[0].name.last}`;
      return randomName; 
    } catch (error) {
      console.error("Erro ao buscar nome:", error);
      return "Erro ao carregar nome"; 
    }
  };
  
  export default NameApiService;