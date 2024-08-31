
// what is achieved, using the dynamic route syntax, the [] square brackets folder
// it tells NextJS that we want to have some path AFTER blog, but we don't know yet
// it's a placeholder for when the route is loaded

// what happens is that NextJS actually passes a props object to all the page components
// and then destructure it and pull out the params prop

// we use the key in the placeholder '[slug]' of the params object
// so the [slug] placeholder allows you to go to use the value of its "parent" route to take you to that specified url, like "blog/whatever"

// this would also allow you to reach out to a database, where your blog posts might be stored, fetch it, and show its content with the {params.slug}

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}