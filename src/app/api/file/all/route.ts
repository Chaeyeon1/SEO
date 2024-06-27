import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  const dataDirectory = path.join(process.cwd(), 'src', 'app', 'data');

  // 디렉토리에 있는 파일 목록을 비동기적으로 가져옴
  fs.readdir(dataDirectory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return new Response(`Failed to read directory`, {
        status: 500,
      });
    }

    console.log('Files in directory:', files);
    return new Response(JSON.stringify(files), {
      status: 200,
    });
  });

  return NextResponse.json('Hello');
}
