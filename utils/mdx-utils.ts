import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

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

export const getMetadata = (dataFolder: string = 'app/data/pages/'): any => {
    const pageFiles = fs.readdirSync(dataFolder)
    const mdxPages = pageFiles.filter((file) => file.endsWith(".mdx"))

    const posts: any = mdxPages.map((fileName) => {
        const fileContents = fs.readFileSync(`${dataFolder}${fileName}`, 'utf8')
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".mdx", ""),
        }
    })

    return posts;
}


