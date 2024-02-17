//Display the list of hymns retrieved from the API.
import "./HymnItem.css";
import HymnItem from "./HymnItem";
export default function HymnList({ hymnData }) {
  if (!hymnData) {
    console.log("hymdata null");
    return null; // Return null if hymnData is not provided or null
  }

  //Object.keys returns an array of keys from the data object.
  console.log(Object.keys(hymnData));
  return (
    <div>
      {Object.keys(hymnData).map((key) => {
        const {
          title,
          meter,
          text_url,
          no_of_hymnals,
          scripture_references,
          author,
        } = hymnData[key];

        return (
          <div className="hymn-item" key={key}>
            <HymnItem content={title} key={`${key}_title`} />
            <HymnItem content={meter} key={`${key}_meter`} />
            <HymnItem content={text_url} key={`${key}_text_url`} />
            <HymnItem content={no_of_hymnals} key={`${key}_no_of_hymnals`} />
            <HymnItem
              content={scripture_references}
              key={`${key}_scripture_references`}
            />
            <HymnItem content={author} key={`${key}_author`} />
          </div>
        );
      })}
    </div>
  );
}
