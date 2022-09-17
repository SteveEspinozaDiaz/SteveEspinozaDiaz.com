import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function TutorialPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
}

const tutorialPageDirectory = path.join(
  "content",
  "blog",
  "tutorials",
  "programming",
  "web-development"
);

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(tutorialPageDirectory);

  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const tutorialPage = fs.readFileSync(
    path.join(tutorialPageDirectory, slug + ".mdx")
  );

  const { data: metaData, content } = matter(tutorialPage);

  const mdxSource = await serialize(content, { scope: metaData });

  return { props: { source: mdxSource } };
};
