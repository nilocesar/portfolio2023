import fs from 'fs';
import matter from 'gray-matter';

import { BlogType, AboutType } from 'store';

export const mdBlogs = () => {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./_posts/project');
  const filesInAbout = fs.readdirSync('./_posts/about');

  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./_posts/project/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...(matterData.data as BlogType),
      slug: filename.slice(0, filename.indexOf('.'))
    };
  });

  const about = filesInAbout.map((filename) => {
    const file = fs.readFileSync(`./_posts/about/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...(matterData.data as AboutType),
      slug: filename.slice(0, filename.indexOf('.'))
    };
  });

  return { blogs: blogs, about: about[0] as AboutType };
};
