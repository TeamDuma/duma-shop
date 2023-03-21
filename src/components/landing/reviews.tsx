import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
export type { SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

interface Review {
  time: string;
  id: number;
  author: string;
  text: string;
  rating: number;
  imageUrl: string;
}

interface Props {
  reviews: Review[];
}

const ReviewsCarousel: React.FC<Props> = ({ reviews }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{
        bulletClass:
          'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70 pagination ',
        bulletActiveClass: '!w-3 !h-3 !bg-accent',
        clickableClass: 'cursor-pointer',
        clickable: true,
      }}
      // pagination={{ clickable: true }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 250,
              backgroundColor: 'lightgray',
              padding: 20,
              borderRadius: 10,
              height: 250,
            }}
          >
            <img style={{ marginBottom: '4%' }} src={review.imageUrl} />

            <p className="mb-4 text-center">{review.text}</p>
            <h3 className="mb-2 text-center" style={{ color: 'gray' }}>
              {review.time} ago
            </h3>
            <h3 className="mb-2 text-center">{review.author}</h3>

            {/* <p className="mb-8 text-center"> {review.rating}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
