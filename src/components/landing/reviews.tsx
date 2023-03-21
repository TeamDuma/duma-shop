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
    <Swiper spaceBetween={5} slidesPerView={4} navigation>
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
              backgroundColor: '#EEEEEE',
              padding: 20,
              borderRadius: 10,
              height: 200,
            }}
          >
            <img style={{ marginBottom: '4%' }} src={review.imageUrl} />

            <p className="mb-4 text-center">{review.text}</p>
            <h3 className="mb-2 text-center" style={{ color: 'gray' }}>
              {review.time} ago
            </h3>
            <h3 className="mb-2 text-center">{review.author}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
