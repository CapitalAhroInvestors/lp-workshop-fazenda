import sharp from 'sharp'
import { readdir, stat, rename, copyFile } from 'fs/promises'
import { join, extname, basename } from 'path'

const PUBLIC_DIR = decodeURIComponent(
  new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
)

const IMAGE_CONFIGS = {
  'logo-escola.png':        { width: 384, quality: 85 },
  'renato.png':             { width: 680, quality: 82 },
  'mockup-bundle.png':      { width: 504, quality: 80 },
  'mockup-bundle2.png':     { width: 504, quality: 80 },
  'apostila-capa.png':      { width: 600, quality: 80 },
  'apostila-sumario.png':   { width: 600, quality: 80 },
  'apostila-interna.png':   { width: 600, quality: 80 },
  'depoimento-ronilson.png':    { width: 640, quality: 82 },
  'depoimento-vinicius.png':    { width: 640, quality: 82 },
  'depoimento-muniz-freire.png':{ width: 640, quality: 82 },
  'cafe-bg.jpg':            { width: 1920, quality: 75, keepFormat: true },
  'hero-poster.jpg':        { width: 1920, quality: 75, keepFormat: true },
}

async function fileSize(p) {
  try { return (await stat(p)).size } catch { return 0 }
}

async function optimizeImage(filename, config) {
  const inputPath = join(PUBLIC_DIR, filename)
  const ext = extname(filename).toLowerCase()
  const base = basename(filename, ext)
  const isJpeg = ext === '.jpg' || ext === '.jpeg'
  const outputExt = config.keepFormat ? ext : '.webp'
  const outputFilename = base + outputExt
  const outputPath = join(PUBLIC_DIR, outputFilename)

  const beforeBytes = await fileSize(inputPath)
  if (!beforeBytes) {
    console.log(`  SKIP ${filename} (not found)`)
    return
  }

  let pipeline = sharp(inputPath).resize(config.width, null, {
    withoutEnlargement: true,
    fit: 'inside',
  })

  if (config.keepFormat && isJpeg) {
    pipeline = pipeline.jpeg({ quality: config.quality, progressive: true, mozjpeg: true })
  } else if (config.keepFormat) {
    pipeline = pipeline.png({ compressionLevel: 9, effort: 10 })
  } else {
    pipeline = pipeline.webp({ quality: config.quality, effort: 6 })
  }

  await pipeline.toFile(outputPath)
  const afterBytes = await fileSize(outputPath)
  const saved = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1)

  if (outputFilename !== filename) {
    // Keep original for fallback, but note the WebP exists
    console.log(`  ✓ ${filename} → ${outputFilename}  ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB  (-${saved}%)`)
  } else {
    // Replace original with optimized version
    await sharp(inputPath).resize(config.width, null, { withoutEnlargement: true, fit: 'inside' })
      .jpeg({ quality: config.quality, progressive: true, mozjpeg: true })
      .toFile(outputPath + '.tmp')
    await rename(outputPath + '.tmp', outputPath)
    console.log(`  ✓ ${filename}  ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB  (-${saved}%)`)
  }
}

console.log('Optimizing images in:', PUBLIC_DIR)
console.log('')

for (const [filename, config] of Object.entries(IMAGE_CONFIGS)) {
  await optimizeImage(filename, config)
}

console.log('\nDone. Update image src attributes to use .webp where applicable.')
