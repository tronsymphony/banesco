'use strict'

const videoEmbed = [...document.querySelectorAll('.videos-instruction-new__video-embed')]

videoEmbed.map((video) => {
  const iframe = video.querySelector('iframe')

  video.addEventListener('click', () => {
    const videoUrl = iframe.src
    const videoId = videoUrl.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/)[1]

    video.classList.add('active')

    new YT.Player(video.querySelector('.videos-instruction-new__iframe-wrapper'), {
      videoId: videoId,
      height: '259',
      width: '460',
      events: {
        onReady: (event) => {
          event.target.playVideo()
        },
      },
    })
  })
})
