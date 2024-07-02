import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get('fileName');

  if (!fileName) {
    return new Response(`fileName is required`, {
      status: 400,
    });
  }

  const dataDirectory = path.join(process.cwd(), 'src', 'app', 'data');
  const filePath = path.join(dataDirectory, fileName);
  // 파일이 존재하는지 확인
  if (!fs.existsSync(filePath)) {
    return new Response(`File not found`, {
      status: 400,
    });
  }

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return new Response(data, {
      status: 200,
    });
  } catch (err) {
    return new Response(`Failed to read file`, {
      status: 500,
    });
  }
}
