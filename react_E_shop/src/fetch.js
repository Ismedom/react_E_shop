export default function fetch_api(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
}
