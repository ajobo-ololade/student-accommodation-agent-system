import { Carousel } from 'react-carousel-minimal';
import one from "../assets/citybackpackers1.jpg"
import two from "../assets/Como-Montar-um-Hostel-1200x900.jpg"
import three from "../assets/jztna-tzVt5ELC89w-unsplash.jpg"
import four from "../assets/marcus-loke-WQJvWU_HZFo-unsplash.jpg"
import five from "../assets/merlin_174147483_ab6611b2-b57f-49ac-86bd-baa4c4892881-mobileMasterAt3x.jpg"
import six from "../assets/mosaic-hostel-belgrade.jpg"
import seven from "../assets/nick-kimel-GrLnSHJT1fI-unsplash.jpg"
import eight from "../assets/sreesanth-p-NHVI1dkl6WU-unsplash.jpg"
import nine from "../assets/toa-heftiba-bnoPZ9aTyWQ-unsplash.jpg"


const Carousels = () => {
 const data = [
    // {
    //   image: one,
    //   caption: "San Francisco"
    // },
    {
      image: two,
      caption: "Scotland"
    },
    {
      image: three,
      caption: "Darjeeling"
    },
    {
      image: four,
      caption: "San Francisco"
    },
    {
      image: five,
      caption: "Scotland"
    },
    {
      image: six,
      caption: "Darjeeling"
    },
    {
      image: seven,
      caption: "San Francisco"
    },
    {
      image: eight,
      caption: "Scotland"
    },
    {
      image: nine,
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}> */}
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius=""
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              // margin: "40px auto",
            }}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Carousels;

