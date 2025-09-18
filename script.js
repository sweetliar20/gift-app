const giftBox = document.getElementById('giftBox');
const surprise = document.getElementById('surprise');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackName = document.getElementById('trackName');

// Danh sách bài nhạc
const playlist = [
  { src: 'song1_vedaumaitocnguoithuong.mp3', name: 'Bài này đẹp như em vậy' }
 // { src: 'song2.mp3', name: 'Bài hát 2' },
 // { src: 'song3.mp3', name: 'Bài hát 3' }
];

let currentTrack = 0;
let isPlaying = false;
let audio = new Audio(playlist[currentTrack].src);

// Hiển thị tên bài hát hiện tại
function updateTrackName() {
  trackName.textContent = playlist[currentTrack].name;
}
updateTrackName();

// Mở quà
giftBox.addEventListener('click', () => {
  giftBox.style.display = 'none';
  surprise.style.display = 'block';
});

// Play / Pause
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

// Bài trước
prevBtn.addEventListener('click', () => {
  audio.pause();
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  audio = new Audio(playlist[currentTrack].src);
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸';
  updateTrackName();
});

// Bài tiếp
nextBtn.addEventListener('click', () => {
  audio.pause();
  currentTrack = (currentTrack + 1) % playlist.length;
  audio = new Audio(playlist[currentTrack].src);
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸';
  updateTrackName();
});
