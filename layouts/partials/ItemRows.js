"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const ItemRows = ({ items }) => {
  return items.map((item, index) => {
    const isOdd = index % 2 > 0;
    return (
      <section
        key={`item-${index}`}
        className={`section ${isOdd && "bg-theme-light"} ${item.section_css_classes || ""}`}
      >
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Carousel */}
            <div className="item-carousel">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={
                  item.images.length > 1 ? { clickable: true } : false
                }
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                init={item?.images > 1 ? false : true}
              >
                {/* Slides */}
                {item?.images.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image src={slide} alt="" width={600} height={500} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Content */}
            <div className="item-content mt-5 md:mt-0">
              <h2 className="font-bold leading-[40px]">{item?.title}</h2>
              {markdownify(item?.content, 'div', 'content text-sm mb-2 mt-4')}

              {/* Call to Action */}
              <Link href={item?.cta?.link} className="btn btn-primary mt-5">
                {item?.cta?.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default ItemRows;
