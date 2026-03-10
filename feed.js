const feed=document.getElementById("feed")

posts.slice().reverse().forEach(post=>{

const div=document.createElement("div")

div.className="post"

div.innerHTML=`

<div class="post-image">

<img src="${post.image}">

<div class="big-heart">♥</div>

</div>

<div class="post-info">

<div class="post-actions">

<span class="likeBtn">♡</span>

</div>

<div class="likes"></div>

<div>${post.caption}</div>

<div class="meta">shot on: ${post.shotton} · ${post.date} · ${post.location}</div>

</div>

`

feed.appendChild(div)

const likeBtn=div.querySelector(".likeBtn")
const likeText=div.querySelector(".likes")
const bigHeart=div.querySelector(".big-heart")
const img=div.querySelector(".post-image img")

let likes=parseInt(localStorage.getItem("like"+post.id))||0
let liked=localStorage.getItem("liked"+post.id)==="true"

if(liked) likeBtn.innerText="♥"

likeText.innerText=likes+" likes"

likeBtn.onclick=()=>{

if(!liked){
likes++
liked=true
}else{
likes--
liked=false
}

localStorage.setItem("like"+post.id,likes)
localStorage.setItem("liked"+post.id,liked)

likeText.innerText=likes+" likes"

likeBtn.innerText=liked?"♥":"♡"

}

let lastTap=0

img.onclick=()=>{

const now=Date.now()

if(now-lastTap<300){

if(!liked){

likes++
liked=true

localStorage.setItem("like"+post.id,likes)
localStorage.setItem("liked"+post.id,true)

likeText.innerText=likes+" likes"

likeBtn.innerText="♥"

}

bigHeart.classList.add("show")

setTimeout(()=>{

bigHeart.classList.remove("show")

},600)

}

lastTap=now

}

})