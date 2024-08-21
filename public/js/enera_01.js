function updateDateTime(){
    var now = new Date();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[now.getDay()];
    var date = String(now.getDate()).padStart(2, '0');
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var currentTime = hours + ':' + minutes + ':' + seconds;
    document.querySelectorAll('#day').forEach(function(el) {
        el.textContent = day;
    });
    document.querySelectorAll('#date').forEach(function(el) {
        el.textContent = date;
    });
    document.querySelectorAll('#month').forEach(function(el) {
        el.textContent = month;
    });
    document.querySelectorAll('#year').forEach(function(el) {
        el.textContent = year;
    });
    document.querySelectorAll('#clock').forEach(function(el) {
        el.textContent = currentTime;
    });
}
setInterval(updateDateTime, 1000);

window.addEventListener('scroll',function(){
    const img1 = document.querySelector('.img2-1-cover');
    const img1Position = img1.getBoundingClientRect().top;
    const img1screenPosition = window.innerHeight / 1.5;
    const txt2Element = document.querySelector('.txt2-1-animation1');
    const vert1 = document.querySelector('.vert-line-1');
    const btn2 = document.querySelector('.btn2-1btn');
    if(img1Position < img1screenPosition){
        img1.style.transform = 'translateX(0%)';
        img1.style.opacity = '1';
        vert1.style.height = '70px';
        vert1.style.opacity = '1';
        btn2.classList.add('btn2-animate');
        if (!txt2Element.dataset.animated){
            const txt2Char = txt2Element.innerText;
            txt2Element.innerHTML = '';
            txt2Char.split('').forEach((char,index)=>{
                const spantxt2 = document.createElement('span');
                spantxt2.className = 'letter';
                spantxt2.innerText = char;
                spantxt2.style.animationDelay = `${index * 0.02}s`;
                txt2Element.appendChild(spantxt2);
            });
            txt2Element.dataset.animated = "true";
        }
    }else{
        img1.style.transform = 'translateX(-20%)';
        img1.style.opacity = '0';
        vert1.style.height = '0px';
        vert1.style.opacity = '0';
        btn2.classList.remove('btn2-animate');
        const spanstxt2 = txt2Element.querySelectorAll('.letter');
        spanstxt2.forEach((span)=>{
            span.style.transform = 'translate(-20px)';
            span.style.opacity = '0';
        });
        txt2Element.dataset.animated = "";
    }
});

window.addEventListener('scroll',function(){
    /*Header*/
    const header = document.querySelector('.top-menu');
    /*Home2*/
    const img2_2 = document.querySelector('.img2-2-cover');
    const img2_3 = document.querySelector('.img2-3-cover');
    const img2Position = img2_2.getBoundingClientRect().top;
    const img2Screen = window.innerHeight / 1.5;
    const vert2 = document.querySelector('.vert-line-2');
    const btn2_2 = document.querySelector('.btn2-2btn');
    
    if(window.scrollY > 0){
        header.style.borderBottom = '1px solid rgb(206, 206, 206)';
    }else{
        header.style.borderBottom = '1px solid rgb(255, 255, 255)';
    }
    if(img2Position < img2Screen){
        console.log(img2Position);
        img2_2.style.transform = 'translateX(0%)';
        img2_3.style.transform = 'translateX(0%)';
        img2_2.style.opacity = '1';
        img2_3.style.opacity = '1';
        vert2.style.height = '70px';
        vert2.style.opacity = '1';
        btn2_2.classList.add('btn2-2animate');
    }else{
        img2_2.style.transform = 'translateX(20%)';
        img2_3.style.transform = 'translateX(-20%)';
        img2_2.style.opacity = '0';
        img2_3.style.opacity = '0';
        vert2.style.height = '0px';
        vert2.style.opacity = '0';
        btn2_2.classList.remove('btn2-2animate');
    }
    /*Home3*/
    const home3_content = document.querySelector('.home3-content');
    const home3_contents = document.querySelectorAll('.home3-content>*');
    const content3Pos = home3_content.getBoundingClientRect().top;
    if(content3Pos < img2Screen){
        home3_contents.forEach((content,index)=>{
            content.style.opacity = '1';
            switch(index){
                case 0:
                    content.style.transform = 'translateY(0%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.2s,transform 0.5s ease-out 0.2s';
                break;
                case 1:
                    content.style.transform = 'translateY(0%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.4s,transform 0.5s ease-out 0.4s';
                break;
                case 2:
                    content.style.transform = 'translateY(0%)';
                    content.style.height = '40px';
                    content.style.transition = 'opacity 0.5s ease-out 0.6s,height 0.5s ease-out 0.6s,transform 0.5s ease-out 0.6s';
                break;
                default:
                    content.style.transform = 'translateY(0%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.8s,transform 0.5s ease-out 0.8s';
                break;
            }
        });
    }else{
        home3_contents.forEach((content,index)=>{
            content.style.opacity = '0';
            switch(index){
                case 0:
                    content.style.transform = 'translateY(10%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.2s,transform 0.5s ease-out 0.2s';
                break;
                case 1:
                    content.style.transform = 'translateY(10%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.4s,transform 0.5s ease-out 0.4s';
                break;
                case 2:
                    content.style.transform = 'translateY(10%)';
                    content.style.height = '0px';
                    content.style.transition = 'opacity 0.5s ease-out 0.6s,height 0.5s ease-out 0.6s,transform 0.5s ease-out 0.6s';
                break;
                default:
                    content.style.transform = 'translateY(10%)';
                    content.style.transition = 'opacity 0.5s ease-out 0.8s,transform 0.5s ease-out 0.8s';
                break;
            }
        });
    }
});

const trend2_leftArrow = document.querySelector('.trend2-left-arrow img');
const trend2_cover =  document.querySelector('.top-trend-2-cover');
const trend2_rightArrow = document.querySelector('.trend2-right-arrow img');
let isProcessing = false;
function updatePanah() {
    const computedTransform = window.getComputedStyle(trend2_cover).transform;
    console.log('Computed Transform:', computedTransform);
    let translateX = 0;
    if (computedTransform !== 'none') {
        const values = computedTransform.match(/matrix\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/);
        if (values) {
            translateX = parseFloat(values[5]);
        }
    }
    
    if (translateX === 0) {
        trend2_leftArrow.style.pointerEvents = 'none';
        trend2_rightArrow.style.pointerEvents = 'auto';
        trend2_leftArrow.style.filter = 'invert(65%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
        trend2_rightArrow.style.filter = 'invert(15%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
    } else if ( translateX === -2650) {
        trend2_leftArrow.style.pointerEvents = 'auto';
        trend2_rightArrow.style.pointerEvents = 'none';
        trend2_rightArrow.style.filter = 'invert(65%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
        trend2_leftArrow.style.filter = 'invert(15%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
    }else{
        trend2_leftArrow.style.pointerEvents = 'auto';
        trend2_rightArrow.style.pointerEvents = 'auto';
        trend2_rightArrow.style.filter = 'invert(15%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
        trend2_leftArrow.style.filter = 'invert(15%) sepia(7%) saturate(3%) hue-rotate(180deg) brightness(90%) contrast(90%)';
    }
}
function disableBtnTemp() {
    isProcessing = true;
    trend2_cover.addEventListener('transitionend', () => {
        isProcessing = false;
        updatePanah();
    }, { once: true });
}
trend2_leftArrow.addEventListener('click',function(){
    if(!isProcessing){
        const currentTransform = window.getComputedStyle(trend2_cover).transform;
        let translateX = 0;
        if(currentTransform !== 'none'){
            const values = currentTransform.match(/matrix\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/);
            if(values){
                translateX = parseFloat(values[5]);
            }
        }
        const newTranslateX = translateX + 530;
        trend2_cover.style.transform = `translate(${newTranslateX}px)`;
        currentTranslateX = newTranslateX;
        disableBtnTemp();
    }
});
trend2_rightArrow.addEventListener('click',function(){
    if(!isProcessing){
        const currentTransform = window.getComputedStyle(trend2_cover).transform;
        let translateX = 0;
        if(currentTransform !== 'none'){
            const values = currentTransform.match(/matrix\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/);
            if(values){
                translateX = parseFloat(values[5]);
            }
        }
        const newTranslateX = translateX - 530;
        trend2_cover.style.transform = `translate(${newTranslateX}px)`;
        disableBtnTemp();
        currentTranslateX = newTranslateX;
    }
});

updatePanah();

const playerCover = document.querySelector('.player-cover');
const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const durationDisplay = document.getElementById('duration-display');
const barDot = document.querySelector('.bar-dot');
const barFront = document.querySelector('.player-bar-front');
function updateMusicInfo(title, artist, genre) {
    document.getElementById('music-title-main').textContent = title;
    document.getElementById('music-title-artist').textContent = artist;
    document.getElementById('music-title-genre').textContent = genre;
}
function changeAudioSource(newSrc, title, artist, genre) {
    audio.src = newSrc;  
    audio.load();       
    audio.play();        

    updateMusicInfo(title, artist, genre);
    playPauseBtn.classList.toggle('pause');  
}
function updateDurationDisplay(){
    const duration = audio.duration;

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    durationDisplay.textContent = `${formattedDuration}`;
    const musicListDuration = document.querySelectorAll('.music-list-dur p');
    musicListDuration.forEach((music,index)=>{
        music.textContent = formattedDuration;
    });
}

function updateBarDotPosition(){
    const percentage = (audio.currentTime/audio.duration)*100;
    barDot.style.left = `${percentage}%`;
    barFront.style.width = `${percentage}%`;
}
playerCover.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        playPauseBtn.classList.add('pause');
        playPauseBtn.classList.toggle('play');
    }else{
        audio.pause();
        playPauseBtn.classList.add('pause');
        playPauseBtn.classList.toggle('play');
    }
});

document.querySelectorAll('.li-music-list').forEach(item => {
    item.addEventListener('click',function(){
        const newSrc = this.getAttribute('data-src');
        const title = this.querySelector('.music-list-title span:nth-child(2)').textContent;
        const artist = this.querySelector('.music-list-title span:nth-child(1)').textContent;
        const genre = "Pop";

        changeAudioSource(newSrc, title, artist, genre);
    });
});


audio.addEventListener('timeupdate',updateBarDotPosition);
audio.addEventListener('loadedmetadata',updateDurationDisplay);

audio.addEventListener('ended',()=>{
    barDot.style.left='0%';
    barFront.style.width = '0%';
    playPausebtn.classList.remove('pause');
});