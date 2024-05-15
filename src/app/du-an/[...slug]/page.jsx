import React from 'react'
import ProjectDetails from '@/sections/chi-tiet-du-an'
import getDataSlug from '@/lib/getDataSlug'
import getData from '@/lib/getData'
export default async function page({searchParams, params}) {
  const {slug} = params
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  let [dataSixReason,dataDetails,dataForm,dataListElevator,dataOtherProjeject] = await Promise.all([
    getData(`/options/options/sixReasons`),
    getDataSlug(`/du-an/${slug}`),
    getData(`/options/options/contactForm`),
    getDataSlug(`/elevator_project/${slug}`),
    getDataSlug(`/other_project/${slug}`)
  ])
  return <ProjectDetails isMobile={isMobile}  dataSixReason={dataSixReason} dataForm={dataForm} dataListElevator={dataListElevator} dataOtherProjeject={dataOtherProjeject} data={dataDetails}/>
}
