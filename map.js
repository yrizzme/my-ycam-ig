const map=L.map('map').setView([20,0],2)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map)

posts.forEach(post=>{

if(!post.lat) return

L.marker([post.lat,post.lng])
.addTo(map)
.bindPopup(`<img src="${post.image}" width="120"><br>${post.caption}`)

})