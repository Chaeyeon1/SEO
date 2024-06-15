import { NextResponse } from 'next/server';

export async function GET() {
  const products = ['water', 'paper', 'tissue', 'cup', 'bottle'];
  return NextResponse.json(products);
}
