async function getData(url)
{
    try {
    
        let res=await fetch(url)
        let data = await res.json();
        return data;
    }
    catch(err) {
        console.log('err:', err)
        
    }
     
}

function appendData(parent,data) {
    var { articles } = data;
    
    articles.forEach(({ title, content, urlToImage }) => {
        
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "dataDiv")
        
        let divTitle = document.createElement("div");
        divTitle.setAttribute("id","divTitle")
        let divContent = document.createElement("div");
        let divImage = document.createElement("div");
        divImage.setAttribute("id","divImage")
        let pTitle = document.createElement("p");
        let pContent = document.createElement("p");
        pTitle.innerHTML = title;
        pContent.innerHTML = content;
        let image = document.createElement("img");
        image.src = urlToImage;
        divTitle.append(pTitle);
        divContent.append(pContent);
        divImage.append(image);
        dataDiv.append(divTitle,divContent,divImage)
        parent.append(dataDiv);
        
       
        dataDiv.addEventListener("click", moreDetails);
        dataDiv.addEventListener("mouseover", sizeincrease);
        dataDiv.addEventListener("mouseout", colorChange);
       
    });

}
 
function DetailAppendData(parent, data) {
    var { articles } = data;
    
    articles.forEach(({ title, content, urlToImage }) => {
        
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "detailDiv")
        
        let divTitle = document.createElement("div");
        divTitle.setAttribute("id", "divTitle")
        let divContent = document.createElement("div");
        let divImage = document.createElement("div");
        divImage.setAttribute("id", "divImage")
        let pTitle = document.createElement("p");
        let pContent = document.createElement("p");
        pTitle.innerHTML = title;
        pContent.innerHTML = content;
        let image = document.createElement("img");
        image.src = urlToImage;
        divTitle.append(pTitle);
        divContent.append(pContent);
        divImage.append(image);
        dataDiv.append(divTitle, divContent, divImage)
        parent.append(dataDiv);
        
        
    });
}
export { getData,appendData ,DetailAppendData}