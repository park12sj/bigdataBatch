import {fileExists} from '../fileApi/fileExist'

const exists = async(filepath) => {
    const result = await fileExists(filepath)
    console.log(`${filepath} ${result ? 'exists' : 'not exists'}`)
}

exists('./package.json')
exists('./package')
