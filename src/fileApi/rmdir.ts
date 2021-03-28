import rimraf from 'rimraf'
import {fileExist} from './fileExist'

export const rmdir = (dirname: string): Promise<string> =>
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExist(dirname)
        !alreadyExists ? resolve(dirname) : rimraf(dirname, error => error ? reject(error) : resolve(dirname))
    })