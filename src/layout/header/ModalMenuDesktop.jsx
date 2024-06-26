import Image from 'next/image'
import Link from 'next/link'
import HeaderModalLink from './HeaderModalLink'
import HeaderModalExpand from './HeaderModalExpand'
import {
  modalMenuJapanElevator,
  modalMenuService,
} from '../../../data/header/modal-menu'
import clsx from 'clsx'

export default function ModalMenuDesktop({
  isOpenModalMenu,
  activeModalMenuLink,
  handleClickModalLink,
  setIsOpenModalMenu,
  activeModalMenuChildLink,
  setActiveModalMenuLink,
  setActiveModalMenuChildLink,
  data,
}) {
  return (
    <>
      <div
        className={clsx(
          'fixed top-0 left-0 -z-20 w-full h-screen bg-black/70 transition-500',
          {
            'opacity-0 pointer-events-none': !isOpenModalMenu,
            'opacity-100 pointer-events-auto': isOpenModalMenu,
          },
        )}
        onClick={() => setIsOpenModalMenu(false)}
      />
      <div
        className={clsx(
          'pt-[5.5rem] transition-500 -z-10 bg-grey-600 h-screen transition-500 fixed top-0 left-0',
          {
            '-translate-x-full pointer-events-none': !isOpenModalMenu,
            'translate-x-0 pointer-events-auto': isOpenModalMenu,
            'max-w-[72.5rem]': activeModalMenuLink,
            'max-w-[27rem]': !activeModalMenuLink,
          },
        )}
      >
        <div className='flex flex-col pl-10 pt-11'>
          <Link
            href={`/`}
            className='flex flex-col mb-[1.74rem] hover-opacity w-fit'
            onClick={handleClickModalLink}
          >
            <Image
              src={`/images/layout/header/logo-name-white.svg`}
              alt='sanyo yusoki'
              className='w-[15rem] h-8 ml-1 mb-[0.38rem]'
              width={120}
              height={120}
            />
            <Image
              src={`/images/layout/header/logo-name-jap-white.svg`}
              alt='sanyo yusoki'
              className='w-[11rem] h-[0.7rem]'
              width={120}
              height={120}
            />
          </Link>
          <div className='flex flex-row items-center border-y-[0.0625rem] border-white/10 overflow-hidden'>
            <nav className='flex-none grid grid-cols-1 w-[24.5rem]'>
              <HeaderModalLink
                href={`/${modalMenuJapanElevator.href}`}
                text={modalMenuJapanElevator.text}
                isLink={false}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(modalMenuJapanElevator.text)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === modalMenuJapanElevator.text}
                handleOnClick={handleClickModalLink}
              />
              <HeaderModalLink
                href={`/ve-chung-toi`}
                text={`VỀ CHÚNG TÔI`}
                isLink={true}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(`VỀ CHÚNG TÔI`)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `VỀ CHÚNG TÔI`}
                handleOnClick={handleClickModalLink}
              />
              <HeaderModalLink
                href={`/${modalMenuService.href}`}
                text={modalMenuService.text}
                isLink={false}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(modalMenuService.text)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === modalMenuService.text}
                handleOnClick={handleClickModalLink}
              />
              <HeaderModalLink
                href={`/du-an`}
                text={`DỰ ÁN NỔI BẬT`}
                isLink={true}
                handleOnMouseEnter={() =>
                  setActiveModalMenuLink(`DỰ ÁN NỔI BẬT`)
                }
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `DỰ ÁN NỔI BẬT`}
                handleOnClick={handleClickModalLink}
              />
              <HeaderModalLink
                href={`/tin-tuc`}
                text={`TIN TỨC`}
                isLink={true}
                handleOnMouseEnter={() => setActiveModalMenuLink(`TIN TỨC`)}
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `TIN TỨC`}
                handleOnClick={handleClickModalLink}
              />
              <HeaderModalLink
                href={`/lien-he`}
                text={`LIÊN HỆ`}
                isLink={true}
                handleOnMouseEnter={() => setActiveModalMenuLink(`LIÊN HỆ`)}
                handleOnMouseLeave={() => setActiveModalMenuLink('')}
                isActive={activeModalMenuLink === `LIÊN HỆ`}
                handleOnClick={handleClickModalLink}
              />
            </nav>
            <div className='relative w-[41.25rem]'>
              <HeaderModalExpand
                activeModalMenuLink={activeModalMenuLink}
                activeModalMenuChildLink={activeModalMenuChildLink}
                setActiveModalMenuLink={setActiveModalMenuLink}
                setActiveModalMenuChildLink={setActiveModalMenuChildLink}
                text={modalMenuJapanElevator.text}
                data={modalMenuJapanElevator.child}
                href={`/thang-may-nhat-ban`}
                isFirst
                handleOnClick={handleClickModalLink}
                dataImage={data?.thang_may_nhat_ban}
              />
              <HeaderModalExpand
                activeModalMenuLink={activeModalMenuLink}
                activeModalMenuChildLink={activeModalMenuChildLink}
                setActiveModalMenuLink={setActiveModalMenuLink}
                setActiveModalMenuChildLink={setActiveModalMenuChildLink}
                text={modalMenuService.text}
                data={modalMenuService.child}
                isFirst={false}
                handleOnClick={handleClickModalLink}
                dataImage={data?.dich_vu}
              />
            </div>
          </div>
          <div
            className='flex flex-row overflow-hidden pt-9'
            onMouseEnter={() => {
              setActiveModalMenuLink(activeModalMenuLink)
              setActiveModalMenuChildLink(activeModalMenuChildLink)
            }}
            onMouseLeave={() => {
              setActiveModalMenuChildLink('')
            }}
          >
            <div className='flex flex-col w-[27rem] shrink-0'>
              <span className='text-white text-1'>Theo dõi chúng tôi</span>
              <nav className='flex flex-row items-center mt-1'>
                <Link
                  href={
                    data?.lien_ket_facebook ||
                    'https://www.facebook.com/ThangmaySanyoYusokiVietNam?mibextid=ZbWKwL'
                  }
                  className='block w-[2.31494rem] h-[2.31494rem]  mr-[0.6rem] group'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='37'
                    height='37'
                    viewBox='0 0 37 37'
                    fill='none'
                    className='group-hover:[&>circle]:stroke-white group-hover:[&>path]:fill-white'
                  >
                    <circle
                      cx='18.6271'
                      cy='18.0197'
                      r='17.6979'
                      stroke='#ABAEB2'
                      strokeWidth='0.64356'
                    />
                    <path
                      d='M17.2872 26.3829V18.6602H14.7637V16.086H17.2872V14.7036C17.2872 12.0863 18.537 10.9375 20.6694 10.9375C21.6908 10.9375 22.2309 11.0147 22.4864 11.0501V13.5117H21.0322C20.1269 13.5117 19.8108 13.9989 19.8108 14.9861V16.086H22.4637L22.1034 18.6602H19.8108V26.3829H17.2872Z'
                      fill='#ABAEB2'
                    />
                  </svg>
                </Link>
                <Link
                  href={
                    data?.lien_ket_in ||
                    'https://www.linkedin.com/in/sanyo-yusoki-vi%E1%BB%87t-nam-4283592a5/'
                  }
                  className='block w-[2.31494rem] h-[2.31494rem]  mr-[0.6rem] group'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    className='group-hover:[&>path:first-child]:stroke-white group-hover:[&>path:not(:first-child)]:fill-white'
                  >
                    <path
                      d='M19.0351 37.1344H18.9528C8.81725 37.1344 0.570517 28.8854 0.570517 18.7467V18.6644C0.570517 8.52562 8.81725 0.276571 18.9528 0.276571H19.0351C29.1706 0.276571 37.4174 8.52562 37.4174 18.6644V18.7467C37.4174 28.8854 29.1706 37.1344 19.0351 37.1344Z'
                      stroke='#ABAEB2'
                      strokeWidth='0.553143'
                    />
                    <path
                      d='M12.4142 14.4856C12.0828 14.1779 11.918 13.7971 11.918 13.3439C11.918 12.8908 12.0836 12.4932 12.4142 12.1846C12.7455 11.8769 13.1721 11.7227 13.6947 11.7227C14.2174 11.7227 14.6272 11.8769 14.9577 12.1846C15.2891 12.4923 15.4539 12.8793 15.4539 13.3439C15.4539 13.8085 15.2882 14.1779 14.9577 14.4856C14.6263 14.7933 14.2059 14.9475 13.6947 14.9475C13.1836 14.9475 12.7455 14.7933 12.4142 14.4856ZM15.1754 16.2505V25.6836H12.1956V16.2505H15.1754Z'
                      fill='#ABAEB2'
                    />
                    <path
                      d='M25.0933 17.1829C25.7428 17.8882 26.0672 18.8562 26.0672 20.0887V25.5175H23.2372V20.4713C23.2372 19.8497 23.0759 19.3666 22.7542 19.0228C22.4325 18.679 21.9989 18.5062 21.456 18.5062C20.9131 18.5062 20.4795 18.6781 20.1578 19.0228C19.8361 19.3666 19.6748 19.8497 19.6748 20.4713V25.5175H16.8281V16.2246H19.6748V17.4571C19.963 17.0463 20.3517 16.7218 20.84 16.4829C21.3282 16.244 21.8773 16.125 22.4881 16.125C23.5756 16.125 24.4446 16.4776 25.0933 17.1829Z'
                      fill='#ABAEB2'
                    />
                  </svg>
                </Link>
                <Link
                  href={
                    data?.lien_ket_zalo || 'https://zalo.me/4574140570292753526'
                  }
                  className='block w-[2.31494rem] h-[2.31494rem]  mr-[0.6rem] group'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    className='group-hover:[&>path:first-child]:stroke-white group-hover:[&>path:not(:first-child)]:fill-white'
                  >
                    <circle
                      cx='18.8732'
                      cy='18.5197'
                      r='18.189'
                      stroke='#ABAEB2'
                      strokeWidth='0.661417'
                    />
                    <path
                      d='M9.21676 21.3588C10.4506 21.3588 11.611 21.3506 12.7632 21.3588C13.4087 21.367 13.7601 21.6378 13.8254 22.1549C13.899 22.8032 13.5231 23.2382 12.8204 23.2464C11.4966 23.2628 10.181 23.2546 8.85722 23.2546C8.47316 23.2546 8.09728 23.271 7.71322 23.2464C7.23928 23.2218 6.77351 23.1233 6.54471 22.6309C6.31591 22.1385 6.47934 21.6953 6.78985 21.2931C8.04825 19.6846 9.31482 18.0678 10.5814 16.4592C10.6549 16.3607 10.7285 16.2622 10.802 16.1719C10.7203 16.0324 10.6059 16.0981 10.5078 16.0898C9.62533 16.0816 8.73465 16.0898 7.85213 16.0816C7.64785 16.0816 7.44356 16.057 7.24745 16.016C6.78168 15.9093 6.49568 15.4415 6.60191 14.9819C6.67545 14.67 6.92059 14.4156 7.23111 14.3417C7.42722 14.2925 7.63151 14.2679 7.83579 14.2679C9.2903 14.2597 10.753 14.2597 12.2075 14.2679C12.469 14.2597 12.7223 14.2925 12.9756 14.3582C13.5313 14.5469 13.7682 15.064 13.5476 15.6056C13.3515 16.0734 13.041 16.4756 12.7305 16.8777C11.66 18.2483 10.5896 19.6107 9.5191 20.9649C9.42922 21.0715 9.3475 21.1782 9.21676 21.3588Z'
                      fill='#ABAEB2'
                    />
                    <path
                      d='M18.6983 17.0393C18.8944 16.7849 19.0987 16.5469 19.4337 16.4812C20.0792 16.3499 20.6839 16.7685 20.6921 17.425C20.7166 19.0665 20.7084 20.7079 20.6921 22.3493C20.6921 22.7761 20.4143 23.1536 20.0139 23.2767C19.6053 23.4326 19.1395 23.3095 18.8699 22.9566C18.7309 22.7843 18.6737 22.7514 18.4776 22.9074C17.734 23.5147 16.8924 23.6214 15.9853 23.3259C14.5308 22.8499 13.9343 21.7091 13.7709 20.3221C13.5993 18.8202 14.0977 17.5399 15.4379 16.7521C16.5492 16.0873 17.6768 16.1447 18.6983 17.0393ZM15.8056 20.0349C15.8219 20.396 15.9363 20.7407 16.1488 21.0279C16.59 21.6189 17.4317 21.742 18.0282 21.2988C18.1263 21.2249 18.2161 21.1346 18.2979 21.0279C18.7555 20.4042 18.7555 19.3783 18.2979 18.7546C18.0691 18.4345 17.7095 18.2457 17.3255 18.2375C16.4266 18.1801 15.7974 18.8777 15.8056 20.0349ZM24.361 20.0841C24.2957 17.9749 25.6766 16.3992 27.6378 16.3417C29.7215 16.276 31.2414 17.6795 31.3068 19.7312C31.3721 21.8076 30.1056 23.2767 28.1526 23.4737C26.0198 23.687 24.3284 22.1359 24.361 20.0841ZM26.4121 19.8872C26.3957 20.2975 26.5183 20.6997 26.7634 21.0362C27.2129 21.6271 28.0545 21.742 28.6429 21.2824C28.7328 21.2167 28.8063 21.1346 28.8798 21.0526C29.3538 20.4288 29.3538 19.3783 28.888 18.7546C28.6592 18.4427 28.2997 18.2457 27.9156 18.2375C27.0331 18.1883 26.4121 18.8613 26.4121 19.8872ZM23.642 18.4509C23.642 19.723 23.6501 20.9951 23.642 22.2672C23.6501 22.8499 23.1925 23.3341 22.6124 23.3506C22.5143 23.3506 22.4081 23.3423 22.31 23.3177C21.9015 23.211 21.5909 22.7761 21.5909 22.259V15.7344C21.5909 15.3486 21.5828 14.9711 21.5909 14.5854C21.5991 13.9534 21.9995 13.5431 22.6042 13.5431C23.2252 13.5349 23.642 13.9452 23.642 14.6018C23.6501 15.8821 23.642 17.1706 23.642 18.4509Z'
                      fill='#ABAEB2'
                    />
                  </svg>
                </Link>
              </nav>
            </div>
            <button className='relative w-[20.4375rem] h-[5.3125rem] flex flex-row justify-center items-center hover-opacity flex-none ml-[20rem]'>
              <Image
                src={`/images/layout/header/contact-now.svg`}
                alt='contact us'
                className='absolute top-0 left-0 object-cover w-full h-full -z-10'
                width={120}
                height={120}
              />
              <Link
                href={`/lien-he`}
                className='text-1.375 uppercase font-SVNLagu text-grey-0 font-extrabold leading-1.2 text-center'
                onClick={handleClickModalLink}
              >
                <p className='ml-4 -mb-1'>LIÊN HỆ NGAY</p>
              </Link>
              <Image
                src={`/images/layout/header/arrow-right-white.svg`}
                alt='icon'
                className='w-[0.95rem] h-[1.05rem] ml-3'
                width={120}
                height={120}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
