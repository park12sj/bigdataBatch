import mkdirp from 'mkdirp'
import {fileExist} from './fileExist'

export const mkdir = (dirname: string): Promise<string> =>
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExist(dirname)
        alreadyExists ? resolve(dirname) : mkdirp(dirname) && resolve(dirname)
        // mkdirp(dirname, error => error ? reject(error) : resolve(dirname))
    }
)