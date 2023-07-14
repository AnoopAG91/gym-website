import React from 'react'
import Styles from './AboutSection.module.css' 
import YouTube from 'react-youtube';

function AboutSection() {

  const videoID="yABKyYFRLy8"
  const playerOptions = {
    height: '300',
    width: '300',
    playerVars: {
      // Add any additional YouTube player parameters
      autoplay: 0, // Disable autoplay
      controls: 0, // Show player controls (0 = hide, 1 = show)
      modestbranding: 1, // Hide YouTube logo in the player (0 = show, 1 = hide)
      start: 30, // Start the video at the 30-second mark
      end: 120, // End the video at the 120-second mark
      loop: 0, // Disable video looping (0 = off, 1 = on)
      showinfo: 0, // Hide video information (0 = hide, 1 = show)
      rel: 0, // Hide related videos at the end (0 = hide, 1 = show)
      fs: 1, // Show fullscreen button (0 = hide, 1 = show)
    },
  };
  return (
    <div className={Styles.AboutSection}>
        <div className={Styles.Video}>
         <YouTube videoId={videoID} opts={playerOptions}>

         </YouTube>
        </div>
        <div className={Styles.content}>
             <h1>About Us</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
             <button>Learn More</button>
        </div>

    </div>
  )
}

export default AboutSection