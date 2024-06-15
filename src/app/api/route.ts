import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const productName = `Product ${name}`;
  return NextResponse.json(productName);
}
