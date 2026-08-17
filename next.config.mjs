const repoName = "maharani-project";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPagesBuild ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
