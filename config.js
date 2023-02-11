import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


//Make Changes According to Your Need
global.bname = 'IMALSHA MD'     //Your Bot Name
global.oname = 'IMALSHA MD'     //Your Name
global.iglink = 'https://Instagram.com/shizo_the_tech'     //Your Instagram Link
global.ytlink = 'https://YouTube.com/@errormodsyt'      //Your YouTube Channel Link
global.stkpack = 'IMALSHA MD'      //Here name tha your want on sticker



global.owner = [
  ['94718628230', 'Shizo The Techie', true],
  ['94718628230', 'Gariox 3D', true]
] 
global.prems = []


// Sticker WM
global.packname = 'IMALSHA'
global.author = 'IMALSHA-md'

global.copyright = 'TE DEVELOPERS'
global.packname = 'Wiley-md'
global.author = 'TE DEVELOPERS'

//sticker WM
global.stkpack = 'Wiley-md'
global.stkowner = 'TE DEVELOPERS'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
