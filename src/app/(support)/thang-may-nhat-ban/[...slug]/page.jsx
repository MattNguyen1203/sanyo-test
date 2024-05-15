import FamilyElevator from '@/sections/thang-may-page-details/FamilyElevator'
import React from 'react'
import getDataSlug from '@/lib/getDataSlug';

export default async function page({ searchParams, params }) {
  const { slug } = params;
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')

  const [dataElevator, data] = await Promise.all([
    getDataSlug(`/list_elevator_in_category?slug=${slug}`),
    getDataSlug(`/detail_elevator/${slug}`)
  ]);

  return (
    <FamilyElevator isMobile={isMobile} data={data} dataElevator={dataElevator}/>
  )
}