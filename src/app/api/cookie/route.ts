import { NextApiRequest } from 'next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: any) {

  const { token } = await req.json();

  cookies().set('authToken', `${token}`, { httpOnly: true })

  return NextResponse.json('hello')
}