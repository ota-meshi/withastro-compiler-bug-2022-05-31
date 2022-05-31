import {parse} from "@astrojs/compiler"
void main()

/** main */
async function main() {
    const contents = `
<svg 
    viewBox="0 0 147 40"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
</svg>
`
    const result = await parse(contents)
    console.log(JSON.stringify(result,null,2))
}