import './styles/Gallery.css'
import GalleryImage1 from './images/GalleryImage1.jpeg'
import GalleryImage2 from './images/GalleryImage2.jpeg'
import GalleryImage3 from './images/GalleryImage3.jpeg'
import GalleryImage4 from './images/GalleryImage4.jpeg'
import GalleryImage5 from './images/GalleryImage5.jpeg'
import GalleryImage6 from './images/GalleryImage6.jpeg'

const Gallery = () => {
  return (
    <div id="gallery" className="gallery-background">
        <div className="gallery-container">
            <div className="gallery-titles-container">
                <p className="gallery-media-word">Media</p>
                <p className="gallery-title">Photo Gallery & Discography</p>
                <p className="gallery-sub-title-content">From working as a duo recording the complete set of Mozart’s four-hand piano sonatas, to accompanying a percussionist for BBC Young Musician, or helping students in their final exam recitals – my aim is to allow you to reach your full potential on stage.</p>
            </div>

            <div className="images-container">
                <img className="img-1" src={GalleryImage1}/>
                <img className="img-2" src={GalleryImage2}/>
                <img className="img-3" src={GalleryImage3}/>
                <img className="img-4" src={GalleryImage4}/>
                <img className="img-5" src={GalleryImage5}/>
                <img className="img-6" src={GalleryImage6}/>
            </div>

            <div className="discog-container">
                <div className="cd-column">
                    <p>2019 album release as a duo - 'Mozart: The Complete Four-Hand Piano Sonatas. Over 100k streams on Apple Music.</p>
                    <iframe src="https://embed.music.apple.com/us/album/mozart-the-complete-four-hand-piano-sonatas/1464356140?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style={{width: '100%', height: "450px", maxWidth: '660px', overflow: 'hidden', borderRadius: '10px', background: 'transparent'}}></iframe>
                </div>
                <div className="bbc-column">
                    <p>'Strawberry Therapy' & 'Concertino For Xylophone' in BBC Young Musician 2018.</p>
                    <iframe src="https://www.bbc.co.uk/programmes/p0642gsj/player" frameBorder="0" style={{width: "100%", height: '450px'}}></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery