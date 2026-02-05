import './PostCard.css';


function PostCard({ title, body }) {
return (
<article className="post-card">
<h2 className="post-card__title">{title}</h2>
<p className="post-card__body">{body}</p>
</article>
);
}


export default PostCard;