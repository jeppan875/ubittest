const devUrl = "http://localhost:8082";

export default async ({ url, data = undefined, method = "GET" }) => {
  const response = await fetch(`${devUrl}/${url}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": data ? "application/json" : ""
    },
    body: data && method !== "GET" ? JSON.stringify(data) : undefined
  });
  try {
    const json = await response.json();
    return json;
  } catch (err) {
    if (response.status >= 400) {
      console.error(err);
      return err;
    }
    return { status: response.status };
  }
};
