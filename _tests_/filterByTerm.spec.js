const filterByTerm = require("../src/filterByTerm")

// function filterByTerm(inputArr, searchTerm) {
//     const regex = new RegExp(searchTerm, "i");
//     return inputArr.filter(function(arrayElement) {
//         return arrayElement.url.match(regex);
//     });
// }

describe("Filter function", () => {
    test("it should filter by a search term (link, red)", () => {
        const input = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"},
            {id: 4, url: "https://www.red4.dev"}
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];


        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
        expect(filterByTerm(input, "red")).toEqual(output);
        expect(filterByTerm(input, "")).toEqual(output);

    });
});