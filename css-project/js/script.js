const movie = document.querySelector("#movie");
const btn = document.querySelector("button");

const getNewMovie = async () =>{
    const movieText = await getNewMovie();
    const newLi = document.createElement("li");
    newLi.append(movieText);
    movie.append(newLi);
}
const getnewMovie = async()=>{
try {
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://imdb-api.com/api#SearchTitle-body", config)
    return res.data.movie
} 
catch (err){
  return "No movie available"
}}

btn.addEventListener("click", addNewmovie)