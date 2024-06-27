import fs from 'fs';
import path from 'path';

export async function GET() {
  const dataDirectory = path.join(process.cwd(), 'src', 'app', 'data');

  try {
    const files = await fs.promises.readdir(dataDirectory);
    return new Response(JSON.stringify(files), {
      status: 200,
    });
  } catch (err) {
    return new Response(`Failed to read directory`, {
      status: 500,
    });
  }
}
