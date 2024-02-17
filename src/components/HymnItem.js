//Render individual hymns in the list.

export default function HymnItem({ content, key }) {
  return (
    <div className="hymnItem" key={key}>
      {content === undefined ? null : `${content}`}
    </div>
  );
}
