'use client'

import clsx from 'clsx'
import {useState} from 'react'
import Link from 'next/link'
import HeaderModalLink from '@/layout/header/HeaderModalLink'

export default function ModalMenu() {
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false)
  return (
    <>
      <button
        className='w-8 h-[1.15rem] grid grid-cols-1 gap-[0.5625rem] hover-opacity'
        onClick={() => setIsOpenModalMenu(!isOpenModalMenu)}
      >
        <span className='w-3/4 h-[0.12rem] bg-grey-900'></span>
        <span className='w-full h-[0.12rem] bg-grey-900'></span>
        <span className='w-1/2 h-[0.12rem] bg-grey-900'></span>
      </button>
      <div
        className={clsx(
          'fixed top-0 left-0 z-10 w-full h-screen bg-black/70 transition-500',
          {
            'opacity-0 pointer-events-none': !isOpenModalMenu,
            'opacity-100 pointer-events-auto': isOpenModalMenu,
          },
        )}
      >
        <div
          className={clsx(
            'pt-[5.5rem] w-[74.5rem] bg-grey-600 h-screen transition-500',
            {
              '-translate-x-full pointer-events-none': !isOpenModalMenu,
              'translate-x-0 pointer-events-auto': isOpenModalMenu,
            },
          )}
        >
          <div className='flex flex-col pl-10 pt-11'>
            <Link
              href={`/`}
              className='flex flex-col mb-[1.74rem] hover-opacity'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='239'
                height='32'
                viewBox='0 0 239 32'
                fill='none'
                className='w-[15rem] h-8 ml-1 mb-[0.38rem]'
              >
                <path
                  d='M17.4704 8.65863V2.23236C17.4704 2.23236 8.41588 1.16269 4.52807 2.92998C0.640271 4.69727 -0.227566 8.14704 0.0464874 10.9867C0.320541 13.8264 1.09703 17.3665 5.25888 18.2501C9.42074 19.1338 10.8152 18.6742 11.0033 20.4387C11.1913 22.2033 9.37507 22.4468 7.64208 22.4468H0.183514V29.0536C0.183514 29.0536 10.9307 29.6828 13.3542 27.8417C15.7777 26.0005 17.1265 23.9542 17.4704 21.5549C17.8143 19.1557 16.4199 15.2928 14.6815 14.1985C12.9431 13.1042 12.5562 12.568 10.1542 12.382C7.75224 12.1959 6.22076 12.382 6.26644 10.4724C6.31211 8.56288 7.98062 8.634 9.65181 8.634C11.323 8.634 17.4731 8.65863 17.4731 8.65863H17.4704Z'
                  fill='white'
                />
                <path
                  d='M58.4388 15.3229L44.9215 0.270836C44.9215 0.270836 44.9322 0.276307 44.9349 0.279043C44.9349 0.279043 44.9376 0.281779 44.9403 0.281779L45.0074 0.355644L58.4388 15.3147V15.3229Z'
                  fill='white'
                />
                <path
                  d='M51.2408 28.2383C51.2489 28.8375 51.0877 29.163 50.7035 29.2834H49.1424C47.5169 29.2095 45.8834 29.2068 44.2713 29.2205V13.055C44.3223 12.9483 44.4083 12.8662 44.5615 12.817L51.1441 20.1488C51.2435 20.5755 51.2462 21.0324 51.2382 21.5084C51.2086 23.7517 51.2032 25.995 51.2382 28.2383H51.2408Z'
                  fill='white'
                />
                <path
                  d='M80.8386 16.0205L80.8306 16.0369L80.8386 16.0533V28.6159C80.75 29.0317 80.5485 29.2123 80.1132 29.2834H74.7127C74.2829 29.2342 74.0088 29.1138 73.8395 28.8676C73.7025 28.6788 73.6326 28.4162 73.595 28.0523V17.4486L74.0142 16.6826L81.9859 2.05455L82.0423 1.95332H88.136C88.2274 2.00257 88.3133 2.07096 88.3939 2.1585L80.844 16.0205H80.8386Z'
                  fill='white'
                />
                <path
                  d='M76.177 7.49594L72.8669 13.5693C72.6869 13.7088 72.5042 13.6869 72.2812 13.5036L65.9887 1.95059H73.1544L73.3398 2.28982L73.595 2.7549L76.177 7.49321V7.49594Z'
                  fill='white'
                />
                <path
                  d='M43.7017 29.2232C41.9982 29.2369 40.284 29.2205 38.5726 29.2834H37.0196C37.0008 29.2807 36.9847 29.2752 36.9658 29.2697L31.9012 18.1872L35.2785 10.7898L43.699 29.2232H43.7017Z'
                  fill='white'
                />
                <path
                  d='M34.0211 8.02941L31.0415 14.5514L30.6411 15.4241L24.311 29.2779H17.4006C17.2823 29.2314 17.1776 29.1494 17.1023 29.0016L30.2435 0.243481L30.3536 0L30.4342 0.172352L34.0238 8.02941H34.0211Z'
                  fill='white'
                />
                <path
                  d='M44.2713 8.6942L63.1273 29.702C63.1273 29.702 63.1353 29.7102 63.138 29.7157L63.2025 29.7895H63.2052'
                  fill='white'
                />
                <path
                  d='M99.7376 1.98341C92.3355 1.98341 86.3332 8.09233 86.3332 15.632C86.3332 23.1718 92.3355 29.2834 99.7376 29.2834C107.14 29.2834 113.145 23.1718 113.145 15.632C113.145 8.09233 107.142 1.98341 99.7376 1.98341ZM99.6328 22.2033C96.0701 22.2033 93.1791 19.2624 93.1791 15.632C93.1791 12.0017 96.0674 9.06352 99.6328 9.06352C103.198 9.06352 106.084 12.0044 106.084 15.632C106.084 19.2596 103.196 22.2033 99.6328 22.2033Z'
                  fill='white'
                />
                <path
                  d='M64.1429 2.02171C62.4744 2.00256 60.8059 2.00256 59.1374 2.01624C58.874 2.01624 58.6215 2.09284 58.4442 2.23236V15.3256L58.4388 15.3202V15.3256L44.9215 0.270836C44.8785 0.235271 44.8274 0.207912 44.771 0.196969C44.7415 0.188762 44.7092 0.18329 44.677 0.18329C44.454 0.18329 44.2713 0.369321 44.2713 0.596388C44.2713 0.618274 44.2713 0.637424 44.2766 0.65931V8.69419L58.4361 24.4685L58.4415 24.474L61.1122 27.4477L64.9704 31.9644V2.39104C64.8119 2.1585 64.5513 2.02445 64.1402 2.01897L64.1429 2.02171Z'
                  fill='white'
                />
                <path
                  d='M181.43 8.75711V2.33085C181.43 2.33085 172.375 1.26117 168.488 3.02846C164.6 4.79575 163.732 8.24279 164.006 11.0852C164.28 13.9277 165.056 17.465 169.218 18.3486C173.38 19.2323 174.775 18.7727 174.963 20.5372C175.151 22.3018 173.335 22.5453 171.602 22.5453H164.14V29.1521C164.14 29.1521 174.887 29.7813 177.311 27.9401C179.734 26.099 181.083 24.0527 181.427 21.6534C181.771 19.2542 180.377 15.3913 178.638 14.297C176.9 13.2027 176.513 12.6665 174.111 12.4805C171.709 12.2944 170.178 12.4805 170.223 10.5709C170.269 8.66136 171.937 8.73249 173.609 8.73249C175.28 8.73249 181.43 8.75711 181.43 8.75711Z'
                  fill='white'
                />
                <path
                  d='M134.747 16.0342L134.739 16.0506L134.747 16.067V28.6296C134.658 29.0454 134.456 29.226 134.021 29.2971H128.621C128.191 29.2478 127.917 29.1275 127.748 28.8813C127.611 28.6925 127.541 28.4299 127.503 28.066V17.4623L127.922 16.6962L135.894 2.06822L135.95 1.967H142.044C142.135 2.01624 142.221 2.08464 142.302 2.17218L134.752 16.0342H134.747Z'
                  fill='white'
                />
                <path
                  d='M130.085 7.51235L126.775 13.5857C126.595 13.7252 126.412 13.7033 126.189 13.52L119.897 1.967H127.062L127.248 2.30623L127.503 2.77131L130.085 7.50962V7.51235Z'
                  fill='white'
                />
                <path
                  d='M196.32 1.67427C188.918 1.67427 182.916 7.78319 182.916 15.3229C182.916 22.8626 188.918 28.9743 196.32 28.9743C203.722 28.9743 209.727 22.8626 209.727 15.3229C209.727 7.78319 203.725 1.67427 196.32 1.67427ZM196.215 21.8942C192.653 21.8942 189.762 18.9532 189.762 15.3229C189.762 11.6926 192.65 8.75438 196.215 8.75438C199.781 8.75438 202.666 11.6953 202.666 15.3229C202.666 18.9505 199.778 21.8942 196.215 21.8942Z'
                  fill='white'
                />
                <path
                  d='M142.96 17.5252V1.96152H149.04V17.1093C149.04 19.9436 150.086 22.4741 152.399 22.4741C154.395 22.4741 155.884 20.5482 155.884 17.1093V1.96152H161.934V17.5252C161.934 24.5533 158.576 29.1603 152.402 29.1603C146.765 29.1603 142.963 25.0813 142.963 17.5252H142.96Z'
                  fill='white'
                />
                <path
                  d='M218.604 2.20227H212.242V32H213.083L233.239 2.20227H225.647L218.58 12.1057L218.604 2.20227Z'
                  fill='white'
                />
                <path
                  d='M225.716 17.8562L221.874 23.5137L225.716 28.9743H231.754L231.845 26.6106L225.716 17.8562Z'
                  fill='white'
                />
                <path
                  d='M239 2.20227H234.244V28.9743H239V2.20227Z'
                  fill='white'
                />
              </svg>
              <svg
                width='178'
                height='12'
                viewBox='0 0 178 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-[11rem] h-[0.7rem]'
              >
                <path
                  d='M4.152 2.076H11.064V2.916H4.152V2.076ZM6.036 4.524H9.66V5.34H5.88L6.036 4.524ZM9.432 4.524H9.588L9.744 4.488L10.284 4.656C9.696 8.112 7.98 10.08 5.724 11.052C5.616 10.836 5.388 10.5 5.208 10.32C7.272 9.54 8.916 7.644 9.432 4.68V4.524ZM6.36 5.244C7.14 7.632 8.796 9.588 11.22 10.32C11.016 10.512 10.764 10.86 10.632 11.1C8.112 10.224 6.48 8.136 5.628 5.436L6.36 5.244ZM0 6.444C1.032 6.168 2.592 5.676 4.068 5.208L4.2 6.012C2.832 6.492 1.38 6.984 0.264 7.368L0 6.444ZM0.156 2.376H3.996V3.216H0.156V2.376ZM1.788 0.0119998H2.676V9.984C2.676 10.488 2.556 10.74 2.244 10.884C1.932 11.016 1.44 11.04 0.636 11.028C0.612 10.812 0.48 10.44 0.372 10.212C0.912 10.224 1.416 10.224 1.56 10.212C1.728 10.212 1.788 10.164 1.788 9.984V0.0119998ZM5.772 0.0239997H6.648C6.624 3.876 6.54 8.604 3.636 11.004C3.492 10.8 3.204 10.536 2.976 10.404C5.76 8.184 5.748 3.66 5.772 0.0239997Z'
                  fill='white'
                />
                <path
                  d='M20.7999 2.352H25.7319V3.18H20.7999V2.352ZM20.9679 4.812H25.5279V5.652H20.9679V4.812ZM20.5239 7.392H26.0079V8.244H20.5239V7.392ZM20.9559 0.348L21.6639 0.108C22.0719 0.707999 22.4319 1.512 22.5519 2.052L21.7719 2.352C21.6639 1.8 21.3279 0.972 20.9559 0.348ZM24.6399 0L25.5159 0.216C25.1799 0.936 24.8199 1.764 24.5079 2.304L23.7639 2.1C24.0639 1.536 24.4599 0.636 24.6399 0ZM22.7799 2.748H23.6559V11.064H22.7799V2.748ZM14.9559 2.604H20.6679V3.384H14.9559V2.604ZM15.5799 0.624H19.9599V5.352H15.5079V4.572H19.1199V1.404H15.5799V0.624ZM16.2159 6.6H17.0439V11.064H16.2159V6.6ZM16.5519 6.6H20.1279V10.416H16.5519V9.612H19.2399V7.392H16.5519V6.6ZM17.0679 0.9L17.9319 0.948C17.6799 4.464 17.0919 7.164 15.3759 8.916C15.2679 8.736 14.9559 8.376 14.7639 8.208C16.3719 6.696 16.8639 4.104 17.0679 0.9Z'
                  fill='white'
                />
                <path
                  d='M36.0319 1.908C35.8759 3.156 35.6359 4.56 35.2639 5.844C34.5319 8.304 33.5719 9.576 32.4679 9.576C31.3879 9.576 30.3199 8.352 30.3199 6.36C30.3199 3.756 32.6359 1.488 35.5759 1.488C38.3839 1.488 40.1719 3.468 40.1719 5.904C40.1719 8.412 38.5159 10.092 35.6599 10.464L35.1079 9.576C35.4919 9.54 35.8519 9.492 36.1399 9.432C37.6759 9.084 39.1879 7.932 39.1879 5.856C39.1879 3.936 37.8559 2.352 35.5519 2.352C32.9119 2.352 31.2679 4.524 31.2679 6.288C31.2679 7.8 31.9519 8.472 32.4919 8.472C33.0559 8.472 33.7039 7.656 34.3159 5.628C34.6639 4.488 34.9159 3.132 35.0359 1.884L36.0319 1.908Z'
                  fill='white'
                />
                <path
                  d='M47.7238 1.392V3.672H52.5238V1.392H47.7238ZM46.8478 0.528H53.4358V4.536H46.8478V0.528ZM45.1078 5.808H49.3798V10.956H48.4798V6.672H45.9598V11.052H45.1078V5.808ZM50.6878 5.808H55.1998V10.98H54.2998V6.672H51.5518V11.052H50.6878V5.808ZM45.4918 9.54H48.8398V10.404H45.4918V9.54ZM51.1318 9.54H54.6958V10.404H51.1318V9.54Z'
                  fill='white'
                />
                <path
                  d='M63.9637 0.0480001L64.5758 0.6C63.5918 0.888 62.1397 1.08 60.9277 1.164C60.8918 1.008 60.7957 0.744 60.6997 0.588C61.8517 0.468 63.2197 0.263999 63.9637 0.0480001ZM69.1237 0.0599999L69.7237 0.624C68.6797 0.912 67.1317 1.092 65.8357 1.164C65.7997 0.996 65.7038 0.756 65.6198 0.588C66.8438 0.48 68.3077 0.288 69.1237 0.0599999ZM60.4598 0.336L61.5037 0.624C61.4917 0.707999 61.4317 0.756 61.2757 0.78V1.572C61.2757 2.448 61.0597 3.708 60.0757 4.632C59.9437 4.44 59.6558 4.164 59.4637 4.056C60.3277 3.264 60.4598 2.304 60.4598 1.536V0.336ZM65.3798 0.372L66.4118 0.624C66.3997 0.707999 66.3398 0.756 66.1838 0.78V1.476C66.1838 2.268 65.9317 3.348 64.7797 4.128C64.6717 3.936 64.4078 3.648 64.2158 3.528C65.1998 2.892 65.3798 2.124 65.3798 1.44V0.372ZM60.8317 1.752H64.8877V2.46H60.8317V1.752ZM65.7398 1.752H70.3118V2.46H65.7398V1.752ZM62.6678 2.016H63.4837V3.96H62.6678V2.016ZM67.7077 2.016H68.5238V3.996H67.7077V2.016ZM61.9598 6.24V7.08H68.0318V6.24H61.9598ZM61.9598 7.656V8.52H68.0318V7.656H61.9598ZM61.9598 4.812V5.652H68.0318V4.812H61.9598ZM61.0838 4.212H68.9317V9.132H61.0838V4.212ZM65.9437 9.744L66.6758 9.288C67.9958 9.696 69.4478 10.224 70.3118 10.632L69.3158 11.088C68.5598 10.692 67.2517 10.176 65.9437 9.744ZM63.1237 9.264L63.9398 9.636C62.9678 10.212 61.4438 10.764 60.2438 11.1C60.0998 10.92 59.7878 10.572 59.5838 10.416C60.8198 10.152 62.2598 9.732 63.1237 9.264Z'
                  fill='white'
                />
                <path
                  d='M79.3037 0.612C79.1957 1.08 79.0637 1.74 78.7517 2.544C78.4517 3.276 78.0077 4.08 77.5277 4.704C77.9957 4.428 78.6797 4.26 79.2077 4.26C80.1317 4.26 80.8517 4.812 80.8517 5.784C80.8517 6.408 80.8757 7.788 80.8877 8.532H79.9637C80.0117 7.896 80.0237 6.66 80.0117 6.036C79.9997 5.34 79.5197 5.016 78.8957 5.016C78.1277 5.016 77.3717 5.4 76.8197 5.892C76.4717 6.228 76.1357 6.66 75.7397 7.152L74.9117 6.54C76.6397 4.884 77.4437 3.492 77.8517 2.472C78.1157 1.812 78.2837 1.092 78.3197 0.528L79.3037 0.612ZM75.1877 1.908C75.8357 1.992 76.6637 2.028 77.2157 2.028C78.8357 2.028 80.9117 1.932 82.6037 1.632V2.52C80.9237 2.772 78.6917 2.88 77.1677 2.88C76.6517 2.88 75.8597 2.856 75.1877 2.808V1.908ZM84.3557 4.8C84.0557 4.896 83.6237 5.064 83.2997 5.184C82.4477 5.52 81.3077 5.976 80.1437 6.576C78.9557 7.2 78.1157 7.848 78.1157 8.676C78.1157 9.612 79.0397 9.756 80.2757 9.756C81.2117 9.756 82.5077 9.648 83.5637 9.456L83.5277 10.428C82.6157 10.536 81.2837 10.632 80.2397 10.632C78.5357 10.632 77.1557 10.26 77.1557 8.808C77.1557 7.344 78.6437 6.444 80.0717 5.712C81.2117 5.124 82.1837 4.752 82.9757 4.38C83.3357 4.212 83.6357 4.08 83.9717 3.912L84.3557 4.8Z'
                  fill='white'
                />
                <path
                  d='M94.3556 2.688V3.648H98.3636V2.688H94.3556ZM94.3556 1.092V2.052H98.3636V1.092H94.3556ZM93.5276 0.408H99.2276V4.344H93.5276V0.408ZM92.9756 5.208H99.8876V5.964H92.9756V5.208ZM95.9276 5.58H96.7676V10.488L95.9276 10.14V5.58ZM94.3196 7.788C94.9316 9.78 96.2516 10.08 97.9196 10.08C98.2196 10.08 99.8396 10.08 100.26 10.068C100.14 10.26 100.02 10.644 99.9956 10.872H97.8836C95.8796 10.872 94.4996 10.44 93.7676 7.992L94.3196 7.788ZM96.5036 7.368H99.2876V8.112H96.5036V7.368ZM93.7676 6.528L94.5836 6.624C94.3436 8.604 93.7196 10.092 92.6396 11.052C92.4956 10.908 92.1476 10.644 91.9676 10.512C93.0356 9.66 93.5756 8.304 93.7676 6.528ZM88.9556 6.396C89.8916 6.144 91.2836 5.712 92.6276 5.28L92.7596 6.108C91.5116 6.516 90.2036 6.948 89.1836 7.272L88.9556 6.396ZM89.0876 2.436H92.7476V3.276H89.0876V2.436ZM90.5756 0.0239997H91.4156V9.936C91.4156 10.428 91.3076 10.668 91.0076 10.812C90.7316 10.956 90.2636 10.98 89.5076 10.98C89.4716 10.764 89.3636 10.392 89.2436 10.14C89.7716 10.152 90.2276 10.152 90.3716 10.152C90.5276 10.152 90.5756 10.104 90.5756 9.924V0.0239997Z'
                  fill='white'
                />
                <path
                  d='M106.672 0.0480001L107.524 0.312C106.744 2.34 105.508 4.38 104.212 5.724C104.116 5.52 103.864 5.04 103.696 4.836C104.872 3.672 106 1.872 106.672 0.0480001ZM105.4 3.156L106.276 2.28L106.288 2.292V11.04H105.4V3.156ZM107.464 2.58H114.832V3.444H107.464V2.58ZM107.164 6.408H114.976V7.296H107.164V6.408ZM109.012 0.144H109.9V6.888H109.012V0.144ZM112.24 0.132H113.116V6.9H112.24V0.132ZM109.264 7.968L110.116 8.232C109.528 9.276 108.616 10.344 107.812 11.028C107.644 10.872 107.296 10.584 107.092 10.464C107.92 9.84 108.748 8.892 109.264 7.968ZM111.988 8.4L112.696 7.992C113.524 8.784 114.412 9.852 114.844 10.584L114.088 11.064C113.68 10.32 112.792 9.204 111.988 8.4Z'
                  fill='white'
                />
                <path
                  d='M125.815 0.588C125.791 0.732 125.756 1.2 125.756 1.344C125.719 2.124 125.743 4.44 125.756 5.4L124.843 4.932C124.843 4.404 124.832 2.016 124.796 1.356C124.771 1.032 124.736 0.696 124.712 0.588H125.815ZM119.432 2.268C121.064 2.244 124.063 2.136 125.911 2.136C127.375 2.136 128.864 2.136 129.428 2.148L129.415 3.036C128.743 3 127.663 2.976 125.899 2.976C123.835 2.976 121.267 3.06 119.455 3.192L119.432 2.268ZM125.731 5.748C125.731 7.356 124.988 8.16 123.896 8.16C122.887 8.16 121.915 7.452 121.915 6.144C121.915 4.956 122.899 4.068 124.039 4.068C125.431 4.068 126.14 5.1 126.14 6.48C126.14 8.112 125.347 9.912 122.563 10.74L121.759 9.96C123.943 9.444 125.215 8.376 125.215 6.396C125.215 5.316 124.688 4.86 124.039 4.86C123.403 4.86 122.815 5.352 122.815 6.132C122.815 6.888 123.379 7.32 124.039 7.32C124.784 7.32 125.264 6.696 125.072 5.412L125.731 5.748Z'
                  fill='white'
                />
                <path
                  d='M133.148 1.26C133.412 1.284 133.747 1.296 133.988 1.296C134.624 1.296 137.467 1.212 138.104 1.152C138.464 1.116 138.632 1.092 138.764 1.044L139.316 1.752C139.1 1.896 138.859 2.052 138.632 2.232C138.044 2.688 136.411 4.092 135.475 4.86C136.027 4.68 136.604 4.62 137.143 4.62C139.135 4.62 140.564 5.808 140.564 7.428C140.564 9.36 138.968 10.62 136.424 10.62C134.792 10.62 133.796 9.912 133.796 8.904C133.796 8.088 134.539 7.344 135.643 7.344C137.239 7.344 138.044 8.472 138.128 9.684L137.264 9.828C137.191 8.808 136.604 8.076 135.643 8.076C135.091 8.076 134.671 8.412 134.671 8.832C134.671 9.42 135.331 9.768 136.279 9.768C138.319 9.768 139.604 8.928 139.604 7.428C139.604 6.24 138.476 5.364 136.904 5.364C134.911 5.364 133.831 6.204 132.32 7.752L131.624 7.056C132.62 6.24 134.167 4.944 134.852 4.356C135.523 3.804 137.035 2.544 137.635 2.004C136.999 2.04 134.599 2.136 133.975 2.172C133.699 2.196 133.436 2.208 133.171 2.244L133.148 1.26Z'
                  fill='white'
                />
                <path
                  d='M147.596 0.66C147.523 0.924 147.439 1.38 147.391 1.608C147.212 2.472 146.96 3.828 146.624 5.028C146.191 6.732 145.387 9.216 144.751 10.524L143.708 10.176C144.428 8.928 145.268 6.492 145.723 4.8C146.011 3.696 146.324 2.184 146.408 1.56C146.456 1.224 146.48 0.816 146.456 0.564L147.596 0.66ZM144.943 2.664C146.264 2.664 148.027 2.448 149.516 2.076V3.012C148.027 3.348 146.215 3.552 144.919 3.552C144.391 3.552 143.971 3.54 143.527 3.504L143.503 2.568C144.067 2.64 144.499 2.664 144.943 2.664ZM148.736 4.308C149.359 4.248 150.163 4.212 150.932 4.212C151.628 4.212 152.36 4.236 153.008 4.308L152.984 5.22C152.36 5.148 151.663 5.076 150.956 5.076C150.212 5.076 149.467 5.124 148.736 5.208V4.308ZM148.975 7.224C148.88 7.62 148.807 7.992 148.807 8.304C148.807 8.868 149.132 9.42 150.835 9.42C151.628 9.42 152.443 9.336 153.188 9.192L153.152 10.152C152.504 10.248 151.7 10.32 150.824 10.32C148.939 10.32 147.908 9.744 147.908 8.556C147.908 8.1 147.979 7.644 148.087 7.14L148.975 7.224Z'
                  fill='white'
                />
                <path
                  d='M162.32 0.804C162.236 1.104 162.163 1.524 162.104 1.752C161.671 3.732 160.832 6.24 159.872 7.56C158.96 8.832 158.083 9.732 156.992 9.732C156.079 9.732 155.311 8.976 155.311 7.572C155.311 6.06 156.236 4.464 157.508 3.612C158.696 2.808 159.872 2.496 161.107 2.496C163.46 2.496 165.163 4.08 165.163 6.42C165.163 8.82 163.448 10.272 160.868 10.632L160.316 9.78C162.824 9.552 164.204 8.244 164.204 6.384C164.204 4.62 162.932 3.324 160.999 3.324C159.835 3.324 158.792 3.72 157.855 4.416C156.835 5.148 156.188 6.432 156.188 7.512C156.188 8.304 156.536 8.784 157.076 8.784C157.855 8.784 158.695 7.764 159.307 6.792C160.1 5.568 160.904 3.372 161.204 1.62C161.252 1.38 161.287 0.983999 161.275 0.707999L162.32 0.804ZM157.4 1.356C157.46 1.68 157.556 2.076 157.652 2.412C157.964 3.588 158.635 5.436 159.139 6.276C159.548 6.972 160.111 7.764 160.688 8.316L159.932 8.928C159.452 8.4 159.007 7.812 158.551 7.032C157.964 6.096 157.267 4.26 156.811 2.76C156.691 2.376 156.56 1.98 156.404 1.668L157.4 1.356Z'
                  fill='white'
                />
                <path
                  d='M171.751 1.992C173.059 2.22 175.495 2.172 176.684 1.992V2.964C175.4 3.108 173.072 3.108 171.764 2.964L171.751 1.992ZM172.219 6.888C172.111 7.32 172.051 7.656 172.051 7.98C172.051 8.532 172.436 9.072 174.079 9.072C175.147 9.072 176.083 8.976 177.044 8.748L177.068 9.756C176.324 9.912 175.316 10.008 174.068 10.008C172.064 10.008 171.163 9.336 171.163 8.208C171.163 7.812 171.223 7.38 171.355 6.804L172.219 6.888ZM169.471 1.068C169.399 1.272 169.303 1.656 169.255 1.872C169.027 2.988 168.656 5.124 168.656 6.48C168.656 7.056 168.691 7.56 168.764 8.148C168.967 7.608 169.243 6.888 169.447 6.396L169.952 6.792C169.652 7.644 169.208 8.904 169.1 9.48C169.064 9.648 169.04 9.876 169.04 10.02C169.051 10.14 169.064 10.308 169.076 10.44L168.223 10.5C167.983 9.648 167.779 8.268 167.779 6.636C167.779 4.872 168.176 2.82 168.32 1.824C168.355 1.548 168.392 1.248 168.404 0.983999L169.471 1.068Z'
                  fill='white'
                />
              </svg>
            </Link>
            <div className='flex flex-row items-center border-y-[0.0625rem] border-white/10'>
              <nav className='py-12 grid grid-cols-1 gap-[1.81rem] w-[27rem]'>
                <HeaderModalLink
                  text='THANG MÁY NHẬT BẢN'
                  isLink={false}
                />
                <HeaderModalLink
                  text='GIỚI THIỆU'
                  isLink
                  href={`/`}
                />
                <HeaderModalLink
                  text='DỊCH VỤ'
                  isLink
                  href={`/`}
                />
                <HeaderModalLink
                  text='DỰ ÁN NỔI BẬT'
                  isLink
                  href={`/`}
                />
                <HeaderModalLink
                  text='BLOG'
                  isLink
                  href={`/`}
                />
                <HeaderModalLink
                  text='LIÊN HỆ'
                  isLink
                  href={`/`}
                />
              </nav>
            </div>
            <div className='py-8'>
              <div className='flex flex-col'>
                <span className='text-white text-1'>Theo dõi chúng tôi</span>
                <nav className='flex flex-row items-center mt-1'>
                  <Link href={`/`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='38'
                      height='38'
                      viewBox='0 0 38 38'
                      fill='none'
                      className='size-[2rem]'
                    >
                      <circle
                        cx='18.5197'
                        cy='18.5197'
                        r='18.189'
                        stroke='white'
                        strokeWidth='0.661417'
                      />
                      <path
                        d='M17.1444 27.1162V19.1792H14.5508V16.5335H17.1444V15.1128C17.1444 12.4228 18.4288 11.2422 20.6204 11.2422C21.6702 11.2422 22.2252 11.3216 22.4878 11.3579V13.8879H20.9932C20.0628 13.8879 19.7379 14.3886 19.7379 15.4032V16.5335H22.4644L22.0942 19.1792H19.7379V27.1162H17.1444Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Link href={`/`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='38'
                      height='38'
                      viewBox='0 0 38 38'
                      fill='none'
                      className='size-[2rem] ml-2'
                    >
                      <circle
                        cx='19.4806'
                        cy='18.5197'
                        r='18.189'
                        stroke='white'
                        strokeWidth='0.661417'
                      />
                      <path
                        d='M16.1716 10.5781C13.6192 10.5781 11.543 12.6563 11.543 15.2093V21.8235C11.543 24.3759 13.6211 26.4521 16.1742 26.4521H22.7884C25.3408 26.4521 27.417 24.374 27.417 21.8209V15.2068C27.417 12.6543 25.3388 10.5781 22.7858 10.5781H16.1716ZM24.1099 13.2238C24.475 13.2238 24.7713 13.5201 24.7713 13.8852C24.7713 14.2503 24.475 14.5466 24.1099 14.5466C23.7448 14.5466 23.4485 14.2503 23.4485 13.8852C23.4485 13.5201 23.7448 13.2238 24.1099 13.2238ZM19.48 14.5466C21.6686 14.5466 23.4485 16.3265 23.4485 18.5151C23.4485 20.7038 21.6686 22.4836 19.48 22.4836C17.2913 22.4836 15.5115 20.7038 15.5115 18.5151C15.5115 16.3265 17.2913 14.5466 19.48 14.5466ZM19.48 15.8695C18.7783 15.8695 18.1054 16.1482 17.6092 16.6444C17.113 17.1405 16.8343 17.8135 16.8343 18.5151C16.8343 19.2168 17.113 19.8897 17.6092 20.3859C18.1054 20.8821 18.7783 21.1608 19.48 21.1608C20.1817 21.1608 20.8546 20.8821 21.3507 20.3859C21.8469 19.8897 22.1256 19.2168 22.1256 18.5151C22.1256 17.8135 21.8469 17.1405 21.3507 16.6444C20.8546 16.1482 20.1817 15.8695 19.48 15.8695Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
