var movieName = document.getElementById("moviename");
var searchBtn = document.getElementById("search-button");

var content = document.getElementById("moviecontainer");


searchBtn.addEventListener("click",function(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        content.innerHTML= `<h1 style="font-size: 100px; text-align: center; margin:auto; color:#ffeeff"> It's Movie Time...</h1>`
    
        if(xhttp.readyState==4){
            content.innerHTML = "";
            
            var movielist = JSON.parse(this.responseText); 
            console.log(movielist)
            if(movielist.Response == "True"){  
                movielist.Search.map((item,i)=>{
                    content.innerHTML+=`<div class="imagecontainer">
                    <img src="${item.Poster}" style="border-top-right-radius:10px;border-top-left-radius:10px" alt="MoviePoster">
                    <p><b>Title</b>: ${item.Title}</p>
                    <p><b>Year</b>: ${item.Year}</p> 
                    <p><b>Type</b>: ${item.Type}</p>
                    </div>`;
            })}
            else{
                content.innerHTML = `<h1  style="text-align:center;margin:auto; color:white;font-size:50px">No Movie Is Found</h1>`
            }
        }
    }
 
    xhttp.open("GET",`https://www.omdbapi.com/?apikey=45f0782a&s=${movieName.value}`,true);
    xhttp.send();
})
