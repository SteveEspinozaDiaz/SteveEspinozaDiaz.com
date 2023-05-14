import fs from 'fs'

export const getSlugs = (dataFolder: string = '/app/data/pages/') => {
    const pageFiles = fs.readdirSync(dataFolder)
    const mdxPages = pageFiles.filter((file) => file.endsWith(".mdx"))
    const slugs = mdxPages.map((file) => file.replace(".mdx", ""))
    return slugs
}

export const getContent = (slug: string, dataFolder:string = '/app/data/pages/') => {
    const mdxFile = dataFolder + slug + ".mdx";
    const fileContents = fs.readFileSync(mdxFile, "utf8")
    return fileContents
}
