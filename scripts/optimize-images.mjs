import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(rootDir, 'public/images');

const tasks = [
  {
    input: 'assets/images/hero-source.jpg',
    outputs: [
      {
        output: 'hero-nina-720.jpg',
        width: 720,
        height: 960,
        options: { quality: 78, mozjpeg: true },
      },
      {
        output: 'hero-nina-1200.jpg',
        width: 1200,
        height: 1600,
        options: { quality: 80, mozjpeg: true },
      },
      {
        output: 'hero-nina-720.webp',
        width: 720,
        height: 960,
        webp: true,
        options: { quality: 78 },
      },
      {
        output: 'hero-nina-1200.webp',
        width: 1200,
        height: 1600,
        webp: true,
        options: { quality: 80 },
      },
    ],
  },
  {
    input: 'assets/images/about-source.jpg',
    outputs: [
      {
        output: 'about-nina-640.jpg',
        width: 640,
        height: 860,
        options: { quality: 78, mozjpeg: true },
      },
      {
        output: 'about-nina-960.jpg',
        width: 960,
        height: 1290,
        options: { quality: 80, mozjpeg: true },
      },
      {
        output: 'about-nina-640.webp',
        width: 640,
        height: 860,
        webp: true,
        options: { quality: 78 },
      },
      {
        output: 'about-nina-960.webp',
        width: 960,
        height: 1290,
        webp: true,
        options: { quality: 80 },
      },
      {
        output: 'og-yaya-prenatal.jpg',
        width: 1200,
        height: 630,
        options: { quality: 82, mozjpeg: true },
      },
    ],
  },
];

await mkdir(outputDir, { recursive: true });

for (const task of tasks) {
  const inputPath = path.join(rootDir, task.input);

  for (const output of task.outputs) {
    const targetPath = path.join(outputDir, output.output);
    const pipeline = sharp(inputPath).resize({
      width: output.width,
      height: output.height,
      fit: 'cover',
      position: 'attention',
    });

    if (output.webp) {
      await pipeline.webp(output.options).toFile(targetPath);
      continue;
    }

    await pipeline.jpeg(output.options).toFile(targetPath);
  }
}

console.log('Optimized images written to public/images');
