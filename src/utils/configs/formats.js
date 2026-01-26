// icons
import Category from "@icons/Category";


const formats = {
    zip: {
        endsWith: ["zip", "rar"],
        theme: "#AFB42B",
        component: (<Category.Zip/>)
    },
    git: {
        endsWith: ["git", "github", "gitignore"],
        theme: "#E64A19",
        component: (<Category.Git/>)
    },
    pdf: {
        endsWith: ["pdf"],
        theme: "#EF5350",
        component: (<Category.Pdf/>)
    },
    image: {
        endsWith: ["png", "jpeg", "jpg", "gif", "svg", "heic"],
        theme: "#26A69A",
        component: (<Category.Image/>)
    },
    exe: {
        endsWith: ["msi", "msix", "exe"],
        theme: "#E64A19",
        component: (<Category.Exe/>)
    },
    video: {
        endsWith: ["mp4", "mkv", "mov", "mp3"],
        theme: "#FF9800",
        component: (<Category.Video/>)
    },
    javascript: {
        endsWith: ["js", "jsx"],
        theme: "#FFCA28",
        component: (<Category.Javascript/>)
    },
    typescript: {
        endsWith: ["ts", "tsx"],
        theme: "#0288D1",
        component: (<Category.Typescript/>)
    },
    json: {
        endsWith: ["json"],
        theme: "#F9AB24",
        component: (<Category.Json/>)
    },
    docker: {
        endsWith: ["dockerfile", "dockerignore"],
        theme: "#0288D1",
        component: (<Category.Docker/>)
    },
    markdown: {
        endsWith: ["md", "mdx"],
        theme: "#FF5722",
        component: (<Category.Markdown/>)
    },
    license: {
        endsWith: ["license"],
        theme: "#FF5B22",
        component: (<Category.License/>)
    },
    eslint: {
        endsWith: ["eslint",'eslintrc','eslintignore'],
        theme: "#4052B4",
        component: (<Category.Eslint /> )
    },
}

export default formats;