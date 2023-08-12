import * as path from 'path'
import * as fsPromise from 'fs/promises'

export const read = async (...filePath: string[]) => {
  const file = path.resolve(__dirname, '..', '..', 'data', ...filePath)
  const data = await fsPromise.readFile(file, { encoding: 'utf-8' })

  return JSON.parse(data)
}
