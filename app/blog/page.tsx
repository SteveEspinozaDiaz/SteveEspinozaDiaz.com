import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

import { getSlugs } from "@/utils/mdx-utils";
import Link from "next/link";

function BlogPage() {

  // const slugs = getSlugs('/app/data/pages/tutorials')
  // const slugComponents = slugs.map((slug) => {return(
  // <div>
  //   <Link href={`/blog/tutorials/${slug}`}>{slug}</Link>
  // </div>
  // )})

  return <WrapperMain>
    <h1 className="mb-6">Blog Page</h1>
    <h2>Coming Soon...</h2>
  </WrapperMain>;
}

export default BlogPage;
