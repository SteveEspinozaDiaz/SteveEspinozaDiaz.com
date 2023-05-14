import WrapperMain from "@/data/components/layout/WrapperMain";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeKatex from "rehype-katex";

import hljs from 'highlight.js/lib/core'
import julia from '/app/public/lang/code/julia'

hljs.registerLanguage('julia', julia)

function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${month}/${day}/${year}`;
}

async function TutorialPage(props: any) {
    const { code, frontmatter } = await bundleMDX({
        file: `/app/data/pages/tutorials/${props.params.slug}.mdx`,
        cwd: `/app/data/components/`,
        mdxOptions(options) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath]
            options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight, rehypeKatex]
            return options
        }
    })

    const Component = getMDXComponent(code)

    return <WrapperMain>
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        {/* <pre><code className="hljs language-js">This will be highlighted.</code></pre> */}
        <p>Published: {formattedDate(frontmatter.published)}</p>
        <Component />
    </WrapperMain>;
}

export default TutorialPage;
