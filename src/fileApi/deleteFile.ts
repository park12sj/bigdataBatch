import * as fs from 'fs'
import {fileExist} from '../fileApi/fileExist'

export const deleteFile = (filename:string) : Promise<string> =>
    new Promise<any>(async (resolve, reject) => {
        const alreadyExist = await fileExist(filename)
        !alreadyExist ? resolve(filename) : fs.unlink(filename, (err) => err ? reject(err) : resolve(filename))
    })