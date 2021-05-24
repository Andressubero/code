let video = document.getElementById('video')

let btnCLose = document.getElementById('btn-close')
btnCLose.onclick= function() {
    video.setAttribute("src", 0)
}
let img = document.getElementById('image')

img.onclick = function (){

    video.setAttribute("src", "https://www.youtube.com/embed/TcMBFSGVi1c?start=1")

}