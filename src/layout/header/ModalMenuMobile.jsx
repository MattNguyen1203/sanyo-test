import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  modalMenuJapanElevator,
  modalMenuService,
} from '../../../data/header/modal-menu'
import Accordion from './Accordion'
import LangDropdownPopup from '@/components/header/LangDropdownPopup'

export default function ModalMenuMobile({
  lang,
  isOpenModalMenu,
  isMobile,
  setIsOpenModalMenu,
}) {
  return (
    <div
      className={clsx(
        'fixed top-0 left-0 z-50 w-full h-screen bg-grey-600 transition-500 py-4 px-[0.87rem] overflow-auto',
        {
          'translate-x-full': !isOpenModalMenu,
        },
      )}
    >
      <div className='flex flex-row items-center w-full'>
        <Link
          href={`/${lang}`}
          className='flex flex-col'
        >
          <Image
            src={`/images/layout/header/logo-name-white.svg`}
            alt='sanyo yusoki'
            className='w-[9rem] h-[1.2rem] ml-1'
            width={120}
            height={120}
          />
          <Image
            src={`/images/layout/header/logo-name-jap-white.svg`}
            alt='sanyo yusoki'
            className='w-[6.62rem] h-[0.41rem] mt-[0.31rem]'
            width={120}
            height={120}
          />
        </Link>
        <button
          className='ml-auto'
          onClick={() => setIsOpenModalMenu(false)}
        >
          <Image
            src={`/images/layout/header/x-mark-white.svg`}
            alt='close modal menu'
            className='size-5'
            width={120}
            height={120}
          />
        </button>
      </div>
      <div className='grid grid-cols-1 gap-[1.12rem] mt-[2.7rem]'>
        <Accordion
          text={modalMenuJapanElevator.text}
          accordionData={modalMenuJapanElevator.child}
          href={`${lang}/${modalMenuJapanElevator.href}`}
        />
        <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
        <Accordion
          text={modalMenuService.text}
          accordionData={modalMenuService.child}
          href={`${lang}/${modalMenuService.href}`}
        />
        <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
        <Link
          href={`/${lang}`}
          className='flex flex-row items-center text-grey-0 text-1.25 font-Iciel'
        >
          DỰ ÁN NỔI BẬT
        </Link>
        <div className='w-full h-[0.3rem] rounded-full bg-grey-0 opacity-5' />
        <Link
          href={`/${lang}`}
          className='flex flex-row items-center text-grey-0 text-1.25 font-Iciel'
        >
          VỀ CHÚNG TÔI
        </Link>
      </div>
      <div className='mt-[3rem] flex flex-row items-end mb-[1.56rem]'>
        <div className='flex flex-col'>
          <Link
            href={`/${lang}`}
            className='mb-5 text-grey-0 text-0.875 font-Iciel'
          >
            BLOG
          </Link>
          <Link
            href={`/${lang}`}
            className='text-grey-0 text-0.875 font-Iciel'
          >
            LIÊN HỆ
          </Link>
        </div>
        <div className='flex flex-col ml-auto mr-10'>
          <p className='mb-1 text-grey-0/60 text-0.625 font-Iciel leading-1.4'>
            Chọn ngôn ngữ
          </p>
          <button className='relative flex flex-row items-center text-grey-0 text-0.75 font-medium leading-1.5 font-Iciel group'>
            <Image
              src={`/images/layout/header/vietnam-lang.png`}
              alt='vietnam language'
              className='rounded-[0.0625rem] w-[1.0625rem] h-[0.625rem] mr-[0.4rem]'
              width={120}
              height={120}
            />
            VIỆT NAM
            <Image
              src={`/images/layout/header/arrow-down-white.svg`}
              alt='arrow down'
              className='w-[0.8125rem] h-[0.5625rem] ml-2'
              width={120}
              height={120}
            />
            <LangDropdownPopup
              isMobile={isMobile}
              lang={lang}
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col mb-[0.88rem]'>
        <p className='text-grey-0 font-Iciel text-0.75 leading-1.5 opacity-60'>
          Địa chỉ:{' '}
        </p>
        <p className='font-Iciel text-0.875 leading-1.5 text-grey-0'>
          Số 8BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội
        </p>
      </div>
      <div className='flex flex-col mb-[1.88rem]'>
        <p className='text-grey-0 font-Iciel text-0.75 leading-1.5 opacity-60'>
          Hotline:{' '}
        </p>
        <p className='font-Iciel text-0.875 leading-1.5 text-grey-0'>
          0983859969 - 0393580688
        </p>
      </div>
      <Link
        href={`/${lang}`}
        className='w-full py-3 text-center border border-yellow-500 bg-yellow-500 rounded-full font-Iciel text-grey-900 text-0.75 font-medium leading-1.5 block mb-[0.88rem]'
      >
        ĐĂNG KÍ TƯ VẤN
      </Link>
      <div className='flex flex-row items-center justify-center'>
        <Link href={`/${lang}`}>
          <Image
            src={`/images/layout/header/facebook.svg`}
            alt='facebook'
            className='size-[2.25rem]'
            width={120}
            height={120}
          />
        </Link>
        <Link href={`/${lang}`}>
          <Image
            src={`/images/layout/header/instagram.svg`}
            alt='instagram'
            className='size-[2.25rem] ml-[0.6rem]'
            width={120}
            height={120}
          />
        </Link>
      </div>
    </div>
  )
}