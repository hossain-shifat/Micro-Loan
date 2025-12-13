import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl p-4 text-center">Customer Feedback</h1>
            </div>
            <div className="space-y-5">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={1} breakpoints={{
                    640: {
                        slidesPerView: 1.3,
                        coverflowEffect: { rotate: 20, depth: 150 }
                    },
                    768: {
                        slidesPerView: 2,
                        coverflowEffect: { rotate: 25, depth: 180 }
                    },
                    1024: {
                        slidesPerView: 3,
                        coverflowEffect: { rotate: 30, depth: 200 }
                    },
                }}
                    loop={true}
                    coverflowEffect={{
                        rotate: 30, stretch: 0, depth: 200, modifier: 6, slideShadows: true,
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper">
                    {
                        reviews.map(review => (
                            <SwiperSlide>
                                <div key={review.id} className="border border-base-200 shadow-lg space-y-3 rounded-xl p-4 max-w-[400px] mx-auto bg-base-100">
                                    <div className="text-[#14B8A566]">
                                        <Quote size={40} fill='#14B8A599' />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-gray-600 text-start pb-5 border-b-2 border-dashed border-primary">{review.review}</p>
                                        <div className="flex items-center gap-2">
                                            <img src={review.user_photoURL} className="w-12 h-12 rounded-full " />
                                            <div className="text-start">
                                                <h1 className="font-bold text-lg">{review.userName}</h1>
                                                <p>{review.user_email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="flex justify-between max-w-[350px] mx-auto">
                    <button className="swiper-button-prev bg-primary shadow-lg p-3 rounded-full text-black cursor-pointer z-10"><ArrowLeft stroke='white' /></button>
                    <div className="custom-pagination flex items-center justify-center"></div>
                    <button className="swiper-button-next bg-primary shadow-lg p-3 rounded-full text-black cursor-pointer z-10"><ArrowRight stroke='white' /></button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
