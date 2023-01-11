const getlocalvalue = () => {
    const getvalue = localStorage.getItem("localvalue");
    const getresult = JSON.parse(getvalue);
    return getresult;
};
const apiFetch = () => {
    const localdata = getlocalvalue();
    if (localdata) {
        return Promise.resolve(localdata)
    }
    console.log("In service file");
    return fetch(
        "https://gwapi.zee5.com/content/collection/0-8-7405?version=8&page=1&limit=100&item_limit=20&country=IN&translation=en&languages=en%2Chi%2Ckn%2Cgu ",
        {
            headers: {
                "x-access-token":
                    "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJzYW1zdW5nQHR2QGFwcGxpY2F0aW9uIiwiaXNzdWVkQXQiOiIyMDIyLTA1LTE5VDAwOjMwOjAyKzAwMDAiLCJ0dGwiOjg2NDAwfQ.fVQQjcGTQYPbTlNS01BTL7lGf0Jyv9_YhXKwqZV3TfI"
            }
        }
    ).then((data) => data.json())
        .then((res) => {
            // localStorage.setItem("movies", JSON.stringify(res.buckets[0].items));
            // //   setMovies(res.buckets[0].items);
            localStorage.setItem(
                "localvalue",
                JSON.stringify(res.buckets[0].items)
            );
            return res.buckets[0].items
console.log(res.buckets[0].items);
        });
};
export { apiFetch };