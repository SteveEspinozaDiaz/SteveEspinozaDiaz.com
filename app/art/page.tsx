import WrapperMain from "@/data/components/layout/WrapperMain";
import React from "react";

import PaintBrushSolidIcon from "@/public/assets/vector/icons/PaintBrushSolid";
import WrapperMainTitle from "@/data/components/layout/WrapperMainTitle";

function ArtPage() {
  return (<WrapperMain>
    <WrapperMainTitle title="Art" Icon={PaintBrushSolidIcon}/>
    <h2>Coming Soon...</h2>
  </WrapperMain>);
}

export default ArtPage;
