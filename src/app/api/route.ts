import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const productName = `Product ${name}`;
  return NextResponse.json(productName);
}

// POST /api
export async function POST(req: Request) {
  const data = await req.json();
  const { text, fileName } = data;

  if (!text || !fileName) {
    return new Response(`Text and fileName are required`, {
      status: 400,
    });
  }

  const dataDirectory = path.join(process.cwd(), 'src', 'app', 'data');

  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
  }

  const filePath = path.join(dataDirectory, fileName);

  // 파일이 이미 존재하는지 확인
  if (fs.existsSync(filePath)) {
    return new Response(`File already exists`, {
      status: 400,
    });
  }

  fs.writeFile(filePath, JSON.stringify(text), (err) => {
    if (err) {
      return new Response(`Failed to save text`, {
        status: 400,
      });
    }

    return new Response(`Text saved successfully.`, {
      status: 200,
    });
  });

  return new Response(`Text saved successfully.`, {
    status: 200,
  });
}
