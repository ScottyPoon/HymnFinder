//Handle API requests. You can use the Fetch API or any HTTP library for making requests.

function MakeRequest({ fetchData }) {
  return (
    <div>
      <button onClick={fetchData}>fetch</button>
    </div>
  );
}

export default MakeRequest;
