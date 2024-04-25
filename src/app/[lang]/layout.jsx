import '../global.css'

import localFont from 'next/font/local'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import GsapProvider from '@/components/gsap/GsapProvider'
import {headers} from 'next/headers'
import {Toaster} from '@/components/ui/sonner'
// import {Toaster} from '@/components/ui/sonner'

export const metadata = {
  title: 'Sanyo Yosuki',
  description: 'Sanyo Yosuki by create FINNTVD',
}

const svnLaguSans = localFont({
  src: [
    {
      path: '../font/svn/SVN-LaguSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/svn/SVN-LaguSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/svn/SVN-LaguSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/svn/SVN-LaguSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/svn/SVN-LaguSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-svn-lagusans',
  display: 'swap',
})

const icielSteradian = localFont({
  src: [
    {
      path: '../font/iciel/iCielSteradian-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/iciel/iCielSteradian-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/iciel/iCielSteradian-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/iciel/iCielSteradian-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iciel-steradian',
  display: 'swap',
})

const avertaStdCy = localFont({
  src: [
    {
      path: '../font/std/stdcy.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-averta-std-cy',
  display: 'swap',
})

export default function RootLayout({children, params}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const lang = params.lang ?? 'vi'
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )

  return (
    <html lang={lang}>
      <body
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className={`${icielSteradian.className} ${icielSteradian.variable} ${svnLaguSans.variable} antialiased `}
      >
        {/* TODO: lazy loading, suspense for all pages */}
        <Header
          isMobile={isMobile}
          lang={lang}
        />
        <GsapProvider isMobile={isMobile}>
          {children}
          <Footer isMobile={isMobile} />
        </GsapProvider>
        <Toaster />
      </body>
    </html>
  )
}