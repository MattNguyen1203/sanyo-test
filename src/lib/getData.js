export default async function getData(
  api,
  revalidate = process.env.NEXT_PUBLIC_REVALIDATE,
) {
  try {
    const res = await fetch(`${process.env.API}${api}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {revalidate},
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      return null
    }
    return res.json()
  } catch (error) {
    console.log(`${process.env.API}${api}`)
  }
}
