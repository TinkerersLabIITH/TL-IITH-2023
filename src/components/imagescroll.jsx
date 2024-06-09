import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

const images = [
  {
    original: "./imagescroll/Imagescroll1.png",
    thumbnail: "./imagescroll/Imagescroll1.png",
  },
  {
    original: "./imagescroll/imagescroll3.png",
    thumbnail: "./imagescroll/imagescroll3.png",
  },
  {
    original: "./imagescroll/imagescroll4.png",
    thumbnail: "./imagescroll/imagescroll4.png",
  },
  {
    original: "./imagescroll/imagescroll1.jpg",
    thumbnail: "./imagescroll/imagescroll1.jpg",
  },
  {
    original: "./imagescroll/imagescroll6.png",
    thumbnail: "./imagescroll/imagescroll6.png",
  },
  {
    original: "./imagescroll/imagescroll2.png",
    thumbnail: "./imagescroll/imagescroll2.png",
  },
];

export default function ImgGallery() {
  return (
    <ImageScrollStyled>
      <div className="contimg">
        <div className="imggal">
          <ImageGallery
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            items={images}
          />
        </div>
      </div>
    </ImageScrollStyled>
  );
}

const ImageScrollStyled = styled.section`
  .contimg {
    margin-top: 25rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 10rem;
    width: 100%;
  }

  .imggal {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 900px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  .image-gallery-slide .image-gallery-image {
    border-radius: 60px;
  }
`;
