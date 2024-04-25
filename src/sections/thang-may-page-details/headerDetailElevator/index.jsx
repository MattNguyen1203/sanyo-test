'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonSlide from '@/components/buttonSlideSixReasons/ButtonSLide'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import {Swiper, SwiperSlide} from 'swiper/react'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import {Navigation, Pagination, Thumbs, Autoplay} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import './styles.css'
const HeaderDetailElevator = ({lang}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <section className=''>
      <BreadcrumbContainer>
        <BreadcrumbLink href='/'>TRANG CHỦ /</BreadcrumbLink>
        <BreadcrumbLink href='/'>THANG MÁY NHẬT BẢN /</BreadcrumbLink>
        <BreadcrumbLink isLastLink>THANG MÁY GIA ĐÌNH</BreadcrumbLink>
      </BreadcrumbContainer>
      <div className='mt-[2.36rem] border-b border-[rgba(28,32,28,0.10)] pb-[2.14rem] max-md:pb-6'>
        <div className='pl-[6.25rem] w-[61.875rem] max-md:px-3 max-md:w-full'>
          <h1 className='relative font-SVNLagu text-[5.46506rem] font-semibold leading-1.3 text-grey-900 mb-[0.62rem] max-md:text-[1.875rem]'>
            Thang máy GIA ĐÌNH
            <Image
              src={'/images/familyElevator/headerFamilyElevator/bonghoa.png'}
              alt='hoabg'
              width={500}
              height={500}
              className='absolute w-[8.3125rem] h-[8rem] -right-[6%] bottom-[30%] max-md:hidden'
            />
          </h1>
          <span className='text-1 font-normal leading-1.5 font-Iciel max-md:text-[0.875rem]'>
            Thang máy gia đình rất thích hợp cho các toà nhà bị hạn chế về diện
            tích, thang có thể được lắp đặt bằng cách cải tạo một khu vực thích
            hợp bên trong hoặc bên ngoài toà nhà vì vậy tính linh hoạt của thang
            máy gia đình rất cao
          </span>
        </div>
      </div>
      <div className='pl-[6.25rem] pt-[2.38rem] flex items-center max-md:px-3 max-md:pt-6 flex-wrap'>
        <div className='flex flex-col'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem] '>
            Tải trọng lên đến
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5 py-2 text-yellow-500 max-md:text-[1.5rem] max-md:py-0'>
            <span className='text-[3.3125rem] text-yellow-500 max-md:text-[1.5rem]'>
              0.4 - 1.5
            </span>
            kg
          </span>
        </div>
        <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10 max-md:h-[2.99588rem]'></div>
        <div className='flex flex-col'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem]'>
            Tốc độ
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2 text-yellow-500 max-md:text-[1.5rem]  max-md:py-0'>
            <span className='text-[3.3125rem] max-md:text-[1.5rem]'>
              0.4 - 1.5
            </span>
            m/s
          </span>
        </div>
        <div className='w-[0.0625rem] h-[5.125rem] bg-[rgba(28,32,28,0.10)] mx-10 max-md:hidden'></div>
        <div className='flex flex-col max-md:pt-[1.12rem]'>
          <span className='uppercase text-1 font-medium leading-1.5 font-Iciel text-grey-500 opacity-80 max-md:text-[0.625rem] '>
            diện tích tối thiểu
          </span>
          <span className='font-SVNLagu text-2 font-semibold leading-1.5  py-2 text-yellow-500 max-md:text-[1.5rem]  max-md:py-0'>
            từ{' '}
            <span className='text-[3.3125rem] max-md:text-[1.5rem]'>0.95</span>
            m2
          </span>
        </div>
      </div>
      <div className='px-[3.75rem] mt-[4.94rem] relative max-md:px-3 max-md:mt-[1.17rem]'>
        <Swiper
          spaceBetween={10}
          thumbs={{swiper: thumbsSwiper}}
          pagination={{
            type: 'progressbar',
            el: '.paginationHeaderFE',
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-thumbFE',
            prevEl: '.swiper-button-prev-thumbFE',
          }}
          modules={[Navigation, Thumbs, Pagination, Autoplay]}
          className='mySwiperFather'
        >
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-1.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-2.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-4.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-5.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full !h-[43rem] rounded-[1rem] overflow-hidden max-md:!h-[13.375rem]'>
            <img
              src='https://swiperjs.com/demos/images/nature-6.jpg'
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={14}
          breakpoints={{
            0: {
              slidesPerView: 5,
              spaceBetween: 6,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={5}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className='mySwiperChild !absolute bottom-[2.5rem] right-[9.37rem] w-[40%] h-[4rem] z-10  max-md:!h-[2.5343rem] max-md:!relative max-md:w-full max-md:bottom-[unset] max-md:right-[unset] max-md: mt-[0.57rem]'
        >
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-1.jpg '
              className='w-full h-full object-cover '
            />
          </SwiperSlide>
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-2.jpg '
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-3.jpg '
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-4.jpg '
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-5.jpg '
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
          <SwiperSlide className='rounded-[0.125rem] overflow-hidden'>
            <img
              src='https://swiperjs.com/demos/images/nature-6.jpg '
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        </Swiper>
        <div className='flex justify-between mt-4'>
          <div className='flex justify-between max-md:justify-start'>
            <ButtonSlide
              className={
                ' swiper-button-prev-thumbFE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[48%] left-[9%] max-md:relative max-md:left-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-grey-900 max-md:w-[0.875rem] max-md:h-[0.875rem]'
              }
            />
            <ButtonSlide
              className={
                ' swiper-button-next-thumbFE border-[#fff] transition ease-in cursor-pointer w-[3.20513rem] h-[3.20513rem] mr-[0.75rem] bg-grey-0 md:hover:border-yellow-500 md:hover:bg-yellow-500 max-md:bg-yellow-500 max-md:border-yellow-500 max-md:w-[2.5rem] max-md:h-[2.5rem] absolute z-20  top-[48%] right-[9%] max-md:relative max-md:right-[unset] max-md:top-[unset] '
              }
              classNameSvg={
                'w-[1rem] h-[1rem] text-yellow-500 md:group-hover:text-white max-md:text-grey-900 max-md:w-[0.875rem] max-md:h-[0.875rem] rotate-180'
              }
            />
          </div>
          <div className='w-[6.25rem] relative md:hidden'>
            <div className='paginationHeaderFE rounded-full w-full !bg-[#E6E9F6] [&>.swiper-pagination-progressbar-fill]:!bg-yellow-500 [&>.swiper-pagination-progressbar-fill]:!rounded-full'></div>
          </div>
        </div>
        <Link
          href='/'
          className='md:hidden bg-[linear-gradient(180deg,_#D1B37B_0%,_#E4B867_100%)] w-[5.375rem] h-[5.375rem] rounded-[50%] flex items-center justify-center flex-col absolute -top-[3.8rem] right-[3rem] z-10'
        >
          <span className='font-Iciel text-[0.625rem] font-medium leading-1.2 text-white block w-[3rem] text-center mb-1'>
            {lang === 'vn' ? 'Tải xuống profile' : 'Download profile'}
          </span>
          <div className='flex flex-col justify-center items-center'>
            <Image
              src={'/images/familyElevator/connectLove/downArrow.svg'}
              width={16}
              height={16}
              alt='download icon'
              className='w-[0.95981rem] h-[0.84463rem] mb-[1px]'
            />
            <div className='bg-white w-[0.57588rem] h-[0.07038rem] rounded-full'></div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default HeaderDetailElevator