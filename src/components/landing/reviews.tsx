import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
export type { SwiperOptions } from 'swiper';


SwiperCore.use([Navigation, Pagination]);

interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
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
      pagination={{ clickable: true }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div>
            <h3 className="mb-8 text-center">{review.author}</h3>
            <p className="mb-8 text-center">{review.text}</p>
            <p className="mb-8 text-center">Rating: {review.rating}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
