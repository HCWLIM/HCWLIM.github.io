let video = document.getElementById("myVideo")

let playBtn = document.getElementById("playBtn")
playBtn.addEventListener("click", function(){
    video.play()
})

let pauseBtn = document.getElementById("pauseBtn")
pauseBtn.addEventListener("click", function(){
    video.pause()
})

let freezeBtn = document.getElementById("freezeBtn")
freezeBtn.addEventListener("mousedown", function(){
    video.pause()
})
freezeBtn.addEventListener("mouseup", function(){
    video.play()
})

let seekbar = document.getElementById("seekbar")
seekbar.addEventListener("change", function(){
    let time = video.duration * (seekbar.value/100)
    video.currentTime = time
})

video.addEventListener("timeupdate", function(){
    let value = (100/video.duration) * video.currentTime
    seekbar.value = value
})

let volumeControl = document.getElementById("volume")
volumeControl.addEventListener("change", function(){
    video.volume = volumeControl.value
})