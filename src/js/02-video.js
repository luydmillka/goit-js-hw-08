import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

onVideoStart()

player.on('timeupdate', throttle(onVideoPlayed, 1000));

function onVideoPlayed(data) {
    const playerCurrentTime = data.seconds
    console.log(playerCurrentTime)
    localStorage.setItem('videoplayer-current-time', playerCurrentTime)
}


function onVideoStart() {
    const savedTime = localStorage.getItem('videoplayer-current-time')

    if (savedTime) {
        player.setCurrentTime(savedTime).then(function(seconds) {

        }).catch(function(error) {
       switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });
    }
}