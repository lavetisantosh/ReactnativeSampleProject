



 export const getMoviesApi = async() => {
  try {
    let response = await fetch('https://mocki.io/v1/69475ecc-8eb2-48a9-8b46-6a9d846dd238');
    let json =  response.json();
    return json.users;

  } catch (error) {
      console.log('Unable to fetch data');
  }
    

}