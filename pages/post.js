import Layout from '../components/MyLayout.js'
import Markdown from '../components/Markdown'

import {styles} from '../styles/post'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown content={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{styles}</style>
  </Layout>
)
