import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

import HomeSolidIcon from "@/public/assets/vector/icons/HomeSolid";
import WrapperMainTitle from "@/data/components/layout/WrapperMainTitle";

function AboutPage() {
  return <WrapperMain>
    <WrapperMainTitle title="About" Icon={HomeSolidIcon}/>
    <h2>Coming Soon...</h2>
  </WrapperMain>;
}

export default AboutPage;
