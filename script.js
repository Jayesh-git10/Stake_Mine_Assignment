console.log("working")
const random_Num = 4 * Math.random() + 1;
const img1 = 'https://png.pngtree.com/png-clipart/20190629/original/pngtree-green-diamond-png-image_4099243.jpg'
const img2 = 'https://png.pngtree.com/png-clipart/20250110/original/pngtree-red-bomb-illustration-in-cartoon-style-vector-png-image_19863241.png'
const start_btn = document.getElementsByClassName('start')
const reset_btn = document.getElementsByClassName('reset')
const imgAdd = document.getElementsByClassName('diamond')
const images = document.getElementsByTagName('img')
let isRunning = false;

async function start() {
    isRunning = true;
    if (isRunning) {
        for (let i = 0; i < imgAdd.length; i++) {
            const img = document.createElement('img')
            let random_Num = 4 * Math.random() + 1;
            if (random_Num <= 4) {
                img.src = img1
            }
            else {
                img.src = img2

            }
            imgAdd[i].appendChild(img);
        }
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("click", selectImg)
        }
    }
}
let gameOver = false
async function selectImg(e) {
    if (gameOver) return
    else {
        if (e.target.src == img2) {
            e.target.style.opacity = 1;
            show_all();
            gameOver = true;
            alert("GAME OVER")
        }
        else {
            e.target.style.opacity = 1;
        }
    }

}
async function show_all() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 1;
    }
}
start_btn[0].addEventListener("click", start);
reset_btn[0].addEventListener("click", () => {
    location.reload()
})

