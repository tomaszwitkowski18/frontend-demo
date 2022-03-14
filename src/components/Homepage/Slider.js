import * as React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

const SwiperImage = styled.img`
  max-height: 400px;
  max-width: 100%;
  width: 100%;
  object-fit: contain;
`

const Slider = ({ slidesPerView, sliderImages }) => (
  <Swiper slidesPerView={slidesPerView}>
    {sliderImages.map(el => (
      <SwiperSlide key={el.image.sourceUrl}>
        <SwiperImage src={el.image.sourceUrl} />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default Slider
