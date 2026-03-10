const grid=document.getElementById("grid")

const viewer=document.getElementById("viewer")
const viewerImg=document.getElementById("viewer-img")
const viewerCaption=document.getElementById("viewer-caption")

posts.forEach(post=>{

const img=document.createElement("img")

img.src=post.image
img.className="grid-photo"

img.onclick=()=>{

viewer.classList.add("show")

viewerImg.src=post.image
viewerCaption.innerText=post.caption+" · "+post.date

}

grid.appendChild(img)

})

document.getElementById("viewer-close").onclick=()=>{
viewer.classList.remove("show")
}

viewer.onclick=e=>{
if(e.target===viewer){
viewer.classList.remove("show")
}
}