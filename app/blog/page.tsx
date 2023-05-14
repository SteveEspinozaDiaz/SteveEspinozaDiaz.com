import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

import { getMetadata, getSlugs } from "@/utils/mdx-utils";
import Link from "next/link";

import ComputerDesktopSolidIcon from "@/public/assets/vector/icons/ComputerDesktopSolid";
import WrapperMainTitle from "@/data/components/layout/WrapperMainTitle";

function BlogPage() {  

  const metaData = getMetadata("../app/data/pages/tutorials/")
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
