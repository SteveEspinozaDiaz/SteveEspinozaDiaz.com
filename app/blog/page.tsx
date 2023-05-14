import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

import { getSlugs } from "@/utils/mdx-utils";
import Link from "next/link";

import ComputerDesktopSolidIcon from "@/public/assets/vector/icons/ComputerDesktopSolid";
import WrapperMainTitle from "@/data/components/layout/WrapperMainTitle";

function BlogPage() {

  // const slugs = getSlugs('/app/data/pages/tutorials')
  // const slugComponents = slugs.map((slug) => {return(
  // <div>
  //   <Link href={`/blog/tutorials/${slug}`}>{slug}</Link>
  // </div>
  // )})

  return (<WrapperMain>
    <WrapperMainTitle title="Blog" Icon={ComputerDesktopSolidIcon}/>
    <h2>Coming Soon...</h2>
    {/* {slugComponents} */}
  </WrapperMain>);
}

export default BlogPage;
