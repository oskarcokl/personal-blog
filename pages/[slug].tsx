import fs from "fs";

function Post({slug}: {[key:string]: string}) {
    return <div>The slug for this post is: {slug}</div>;
};

export async function getStaticPaths() {
    const files = fs.readdirSync("posts");
    console.log("Files:", files);
     
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", ""),
        }
    }));

    console.log("Paths:", paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}: {[key:string]: {[key:string]: string}}) {
    return {
        props: {
            slug
        }
    }    
}

export default Post;
