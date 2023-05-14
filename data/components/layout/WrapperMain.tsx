import React from "react";

function WrapperMain(props: any) {
  return (<React.Fragment>
    <div className="md:mx-20 sm:mx-0 my-8 px-16 pt-10 bg-stone-900 sm:rounded-none md:rounded-md">
    {props.children}
    <div className="mt-32 pb-6 text-sm text-stone-300" color="#D6D3CE">
      <hr className="mb-2" />
      <p>© 2023, Website by Steve Espinoza Diaz.</p></div>
    </div>
  </React.Fragment>);
}

export default WrapperMain;
