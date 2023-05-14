import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

// import { getMetadata, getSlugs } from "@/utils/mdx-utils";
import fs from "fs"
import matter from "gray-matter";

import Link from "next/link";

import ComputerDesktopSolidIcon from "@/public/assets/vector/icons/ComputerDesktopSolid";
import WrapperMainTitle from "@/data/components/layout/WrapperMainTitle";

export const getMetadata = (): any => {
  const pageFiles = fs.readdirSync("./data/pages/tutorials")
  const mdxPages = pageFiles.filter((file) => file.endsWith(".mdx"))

  const posts: any = mdxPages.map((fileName) => {
      const fileContents = fs.readFileSync(`./data/pages/tutorials/${fileName}`, 'utf8')
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

function BlogPage() {  

  const metaData = getMetadata()
  const postComponents = metaData.map((metaDatum: any, index: number) => (
    <div key={`tutorial-${metaDatum.slug}-${index}`}>
      <Link href={`/blog/tutorials/${metaDatum.slug}`}>{metaDatum.title}</Link>
    </div>
  ))

  return (<WrapperMain>
    <WrapperMainTitle title="Blog" Icon={ComputerDesktopSolidIcon}/>
    <h2>All Posts</h2>
    {postComponents}
  </WrapperMain>);
}

export default BlogPage;
