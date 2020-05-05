import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const video1 = document.getElementById('video1')
  const video2 = document.getElementById('video2')
  const video3 = document.getElementById('video3')
  const [mouseHoverOnVid1, setMouseHoverOnVid1] = useState(false)
  const [mouseHoverOnVid2, setMouseHoverOnVid2] = useState(false)
  const [mouseHoverOnVid3, setMouseHoverOnVid3] = useState(false)
  const [showSideScreenForVid1, setShowSideScreenForVid1] = useState(false)
  const [showSideScreenForVid2, setShowSideScreenForVid2] = useState(false)
  const [showSideScreenForVid3, setShowSideScreenForVid3] = useState(false)
  const [inputForVid1, setInputForVid1] = useState('')
  const [inputForVid2, setInputForVid2] = useState('')
  const [inputForVid3, setInputForVid3] = useState('')

  const hoverOnVid1Handler = () => {
    setMouseHoverOnVid1(!mouseHoverOnVid1)
  }
  const hoverOnVid2Handler = () => {
    setMouseHoverOnVid2(!mouseHoverOnVid2)
  }
  const hoverOnVid3Handler = () => {
    setMouseHoverOnVid3(!mouseHoverOnVid3)
  }
  const showSideScreenForVid1Handler = () => {
    setShowSideScreenForVid1(!showSideScreenForVid1)
  }
  const showSideScreenForVid2Handler = () => {
    setShowSideScreenForVid2(!showSideScreenForVid2)
  }
  const showSideScreenForVid3Handler = () => {
    setShowSideScreenForVid3(!showSideScreenForVid3)
  }

  const inputForVid1Handler = (event) => {
    if (event.keyCode === 13) {
      if (inputForVid1 === 'meow') {
        alert('Yes! MEOW!')
      } else {
        alert('nope.')
      }
    }
  }
  const inputForVid2Handler = (event) => {
    if (event.keyCode === 13) {
      if (inputForVid2 === 'good') {
        alert('Yes! The Good!')
      } else {
        alert('nope.')
      }
    }
  }
  const inputForVid3Handler = (event) => {
    if (event.keyCode === 13) {
      if (inputForVid3 === 'brainz') {
        alert('Yum!')
      } else {
        alert('nope.')
      }
    }
  }

  useEffect(() => {
    mouseHoverOnVid1 && video1.play()
    mouseHoverOnVid2 && video2.play()
    mouseHoverOnVid3 && video3.play()
  }, [
    mouseHoverOnVid1,
    video1,
    mouseHoverOnVid2,
    video2,
    mouseHoverOnVid3,
    video3,
  ])

  return (
    <div className='App'>
      {showSideScreenForVid1 && (
        <>
          <div className='sidescreen'>
            <h3>You have clicked on a typing cat.</h3>{' '}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque libero, odio laboriosam cupiditate, incidunt sequi unde quae
              rerum corporis aliquam alias. Officiis aut voluptatum ratione
              harum temporibus placeat culpa?
            </p>
            <button onClick={showSideScreenForVid1Handler}>
              click to close
            </button>
            <p>type in "meow"</p>
            <input
              type='text'
              onInput={(event) => setInputForVid1(event.target.value)}
              onKeyUp={inputForVid1Handler}
            ></input>
          </div>
          <div className='coverscreen'></div>
        </>
      )}
      {showSideScreenForVid2 && (
        <>
          <div className='sidescreen'>
            <h3>You have clicked on Clint Eastwood.</h3>{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              sapiente neque laboriosam unde iusto debitis voluptates
              consequuntur blanditiis aspernatur nemo, molestias architecto quae
              qui placeat perspiciatis delectus consequatur repudiandae tempora.
            </p>
            <button onClick={showSideScreenForVid2Handler}>
              click to close
            </button>
            <p>type in "good"</p>
            <input
              type='text'
              onInput={(event) => setInputForVid2(event.target.value)}
              onKeyUp={inputForVid2Handler}
            ></input>
          </div>
          <div className='coverscreen'></div>
        </>
      )}
      {showSideScreenForVid3 && (
        <>
          <div className='sidescreen'>
            <h3>You have clicked on a zombie.</h3>{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              dicta, repudiandae similique quas alias dolore distinctio. Illum,
              quidem inventore! Eveniet aut quia inventore unde. Modi
              reprehenderit quia exercitationem doloremque nam.
            </p>
            <button onClick={showSideScreenForVid3Handler}>
              click to close
            </button>
            <p>type in "brainz"</p>
            <input
              type='text'
              onInput={(event) => setInputForVid3(event.target.value)}
              onKeyUp={inputForVid3Handler}
            ></input>
          </div>
          <div className='coverscreen'></div>
        </>
      )}
      <video
        id='video1'
        className='clickable'
        src='https://media.giphy.com/media/LHZyixOnHwDDy/giphy.mp4'
        onMouseEnter={hoverOnVid1Handler}
        onMouseLeave={hoverOnVid1Handler}
        onClick={showSideScreenForVid1Handler}
      >
        Your browser doesn't support HTML5 video tag.
      </video>
      <video
        id='video2'
        className='clickable'
        src='https://media.giphy.com/media/IRQBDU7x2LZUQ/giphy.mp4'
        onMouseEnter={hoverOnVid2Handler}
        onMouseLeave={hoverOnVid2Handler}
        onClick={showSideScreenForVid2Handler}
      >
        Your browser doesn't support HTML5 video tag.
      </video>
      <video
        id='video3'
        className='clickable'
        src='https://media.giphy.com/media/I0Z7xEnYL3Fu0/giphy.mp4'
        onMouseEnter={hoverOnVid3Handler}
        onMouseLeave={hoverOnVid3Handler}
        onClick={showSideScreenForVid3Handler}
      >
        Your browser doesn't support HTML5 video tag.
      </video>
    </div>
  )
}

export default App
