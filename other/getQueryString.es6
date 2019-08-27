function getQueryString(query = {}, question = true) {
  return (
    (question ? "?" : "") +
    Object.entries(query)
      .reduce(
        (acc, [key, value]) => [
          ...acc,
          ["sportId", "ttId", "seasonId", "stageId", "status"].includes(key) &&
          Array.isArray(value)
            ? value.map(v => `${key}[]=${v}`).join("&")
            : `${key}=${value}`
        ],
        []
      )
      .join("&")
  );
}

console.log(
  getQueryString({
    ttId: [10, 12],
    sportId: 10,
    sortDirection: "asc",
    limit: "10"
  })
);
