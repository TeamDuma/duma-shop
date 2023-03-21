import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
export type { SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

interface Shop {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

interface Props {
  shops: Shop[];
}

const ShopCarousel: React.FC<Props> = ({ shops }) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={5}
      navigation
      // pagination={{ clickable: true }}
    >
      {shops.map((shop) => (
        <SwiperSlide key={shop.id}>
          <div>
            <img src={shop.imageUrl} alt={shop.name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopCarousel;
