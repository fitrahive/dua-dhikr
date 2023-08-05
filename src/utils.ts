import * as fs from 'fs'
import * as path from 'path'
import * as fsPromise from 'fs/promises'

export const read = async (...dirs: string[]) => {
  const dir = dirs.join('/')
  const filePath = path.resolve(`${__dirname}/../data/${dir}.json`)

  if (!fs.existsSync(filePath)) return null

  const content = await fsPromise.readFile(filePath, { encoding: 'utf-8' })
  return JSON.parse(content)
}

export const list = async (...dirs: string[]) => {
  const dir = dirs.join('/')
  const directory = path.resolve(`${__dirname}/../data/${dir}`)

  if (!fs.existsSync(directory)) return null

  return await fsPromise.readdir(directory)
}

export const toName = (text: string) => {
  return text.replace(/-/g, ' ').replace(/(^|\s)\w/g, function (match) {
    return match.toUpperCase()
  })
}
