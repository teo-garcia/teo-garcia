import { NextResponse } from 'next/server'

const GET = () => {
  const data = { title: 'Mateo Garcia' }
  return NextResponse.json(data)
}

export { GET }
