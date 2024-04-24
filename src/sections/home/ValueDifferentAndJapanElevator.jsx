'use client'

import ValueDifferent from './valueDifferent/ValueDifferent'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef} from 'react'

export default function ValueDifferentAndJapanElevator({isMobile, dataValueDifferent, dataPlatForm}) {
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        anticipatePin: 1,
        start: 'bottom bottom',
        endTrigger: secondRef.current,
        end: 'top top',
        pinSpacing: false
      },
    })
  }, [])
  return (
    <>
      <ValueDifferent
        ref={firstRef}
        isMobile={isMobile}
        dataValueDifferent={dataValueDifferent}
      />
      {!isMobile ? (
        <PlatFormElevator
          ref={secondRef}
          dataPlatForm={dataPlatForm}
        />
      ) : (
        <PlatFormMobile dataPlatForm={dataPlatForm} />
      )}
    </>
  )
}
