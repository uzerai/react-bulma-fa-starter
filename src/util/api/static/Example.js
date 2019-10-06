
/**
 * An example get request.
 *
 * @param {*} signal
 */
export async function getExample(signal = null) {
  const uri = "/example";

  console.log("Static | Example - fetching example.");
  return fetch(url + uri, {
    signal: signal,
    method: "GET",
    headers: auth.headers()
  }).then( response => {
    if (!response.ok) {
      throw Error("Static | Example error fetching example");
    }
    console.log("Static | Example - Response OK, parsing...");
    return response.json();
  });
}