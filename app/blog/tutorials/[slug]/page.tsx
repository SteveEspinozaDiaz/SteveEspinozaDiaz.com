import WrapperMain from "@/data/components/layout/WrapperMain";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeKatex from "rehype-katex";

import { formattedDate } from "@/utils/text-utils"; 

import hljs from 'highlight.js/lib/core'
import julia from '@/utils/julia'

hljs.registerLanguage('julia', julia)

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
        <p>Published: {formattedDate(frontmatter.published)}</p>
        <Component />
    </WrapperMain>;
}

export default TutorialPage;
