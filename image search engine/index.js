// const accessKey= "IMrD9bDzhEOWvAy6i05T_o1M5aoybjd8Tzi5JRDUmWE ";
// const searchForm=document.getElementById("search-form");
// const searchBox=document.getElementById("search-box");
// const searchResult=document.getElementById("search-result");
// const showMoreBtn=document.getElementById("show-more-btn");


// let keyword="";
// let page=1;
// async function searchImages(){
//     keyword=searchBox.value;
//     const url='https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accessKey}&per_page=12';

// //get the response from the browser
// const response =await fetch(url);
// const data = await response.json();
// const results= data.results;
// results.map((result)=>{
// const image=document.createElement("img");
// image.src= result.urls.small;
// const imageLink=document.createElement("a");
// imageLink.href=result.links.html;

// //for new tab
// imageLink.target="_blank";
// imageLink.appendChild(image);
// searchResult.appendChild(imageLink);

// })
// showMoreBtn.style.display ="block";
// } 
// searchForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     page=1;
//     searchImages();
// })
// showMoreBtn.addEventListener("click",()=>{
//     page++;
//     searchImages();
// })

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const searchResult = document.getElementById("search-result");
    const showMoreBtn = document.getElementById("show-more-btn");

    let query = '';
    let page = 1;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        query = searchBox.value;
        page = 1;
        searchImages(true);  // Pass true to show the button initially
    });

    showMoreBtn.addEventListener("click", () => {
        page++;
        searchImages(false);  // Pass false to hide the button after it's clicked
        showMoreBtn.style.display = 'none';  // Hide the button
    });

    function searchImages(showButton) {
        const clientId = 'IMrD9bDzhEOWvAy6i05T_o1M5aoybjd8Tzi5JRDUmWE ';
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (page === 1) {
                    searchResult.innerHTML = '';
                }
                data.results.forEach(result => {
                    const img = document.createElement('img');
                    img.src = result.urls.small;
                    searchResult.appendChild(img);
                });

                if (showButton && data.total_pages > page) {
                    showMoreBtn.style.display = 'block';
                } else {
                    showMoreBtn.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }
});
