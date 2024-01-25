const btn = document.getElementById("btn");
const images = document.getElementById("images");
btn.addEventListener('click', displayImages);
let page = 1;
 function displayImages(){
    images.innerHTML ="";
    const query = document.getElementById("search").value;
    let clientId = "wWaFl3HQp23U-57wQbpyyAU45vNU7IURh-9Zy8csxfQ";
    const API_URL = "https://api.unsplash.com/search/photos";
    let url = API_URL+"?client_id="+clientId+"&query="+query+"&page="+page+"&per_page=12";

    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=> {
        //create image elements
        data.results.forEach(element => {
            let imgEle = document.createElement("img");
            let imgSrc = element.urls.regular;
            imgEle.setAttribute("src", imgSrc);
            imgEle.setAttribute("class", "imgEle");
            imgEle.height = 100;
            images.appendChild(imgEle);

            imgEle.addEventListener('click',()=>{
                imgEle.style.maxHeight ="100vh";
                imgEle.style.width ="auto";
                         
                    })

        });
        const loadBtn = document.createElement("button");
        loadBtn.setAttribute("class", "loadBtn");
        loadBtn.addEventListener("click", loadMore);
        loadBtn.textContent = "Load More"
        images.appendChild(document.createElement("br"));
        images.appendChild(loadBtn);
        function loadMore(){
            page++;
            images.removeChild(loadBtn);

            showImages();
        }        
            })

}

function showImages(){
    const query = document.getElementById("search").value;
    let clientId = "wWaFl3HQp23U-57wQbpyyAU45vNU7IURh-9Zy8csxfQ";
    const API_URL = "https://api.unsplash.com/search/photos";
    let url = API_URL+"?client_id="+clientId+"&query="+query+"&page="+page+"&per_page=12";

    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=> {
        //create image elements
        data.results.forEach(element => {
            let imgEle = document.createElement("img");
            let imgSrc = element.urls.regular;
            imgEle.setAttribute("src", imgSrc);
            imgEle.setAttribute("class", "imgEle");
            imgEle.height = 100;
            images.appendChild(imgEle);

            imgEle.addEventListener('click',()=>{
                imgEle.style.maxHeight ="100vh";
                imgEle.style.width ="auto";
                         
                    })

        });
        const loadBtn = document.createElement("button");
        loadBtn.setAttribute("class", "loadBtn");
        loadBtn.addEventListener("click", loadMore);
        loadBtn.textContent = "Load More"
        images.appendChild(document.createElement("br"));
        images.appendChild(loadBtn);
        function loadMore(){
            page++;
            images.removeChild(loadBtn);

            showImages();
        }        
            })
}

