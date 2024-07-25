const numObjects = 6;

for (let i = 1; i <= numObjects; i++) {
  const videoPlayer = document.getElementById(`videoPlayer${i}`);
  const videoModal = document.getElementById(`videoModal${i}`);

  if (videoModal) {
    videoModal.addEventListener('hidden.bs.modal', () => {
      if (videoPlayer) {
        videoPlayer.pause();
      }
    });
  }
}
