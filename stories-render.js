const storiesDiv=document.getElementById("stories")

const viewer=document.createElement("div")
viewer.id="storyViewer"

viewer.innerHTML=`
<span id="storyClose">×</span>
<img id="storyImg">
`

document.body.appendChild(viewer)

const storyImg=document.getElementById("storyImg")

stories.forEach(story=>{

const div=document.createElement("div")

div.className="story"

div.innerHTML=`
<div class="story-avatar">
<img src="${story.avatar}">
</div>
<div>${story.user}</div>
`

div.onclick=()=>{
viewer.style.display="flex"
storyImg.src=story.image
}

storiesDiv.appendChild(div)

})

document.getElementById("storyClose").onclick=()=>{
viewer.style.display="none"
}

viewer.onclick=e=>{
if(e.target===viewer){
viewer.style.display="none"
}
}