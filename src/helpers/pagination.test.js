const Pagination = require("./pagination")

const pagination = new Pagination()

const host = "http://localhost:8000"
const baseUrl = "/v1"

describe("TESTING HELPER PAGINATION", () => {
    test('if query value is null should return page 1 and per page 10', () => {
        pagination.query({ query: {} })
        expect(pagination.page).toBe(1)
        expect(pagination.per_page).toBe(10)
    })
    test('if query value is string should return page 1 and per page 10', () => {
        pagination.query({ query: { page: "abc", per_page: "abc" } })
        expect(pagination.page).toBe(1)
        expect(pagination.per_page).toBe(0)
    })
    test('if page query is value 2, should return page = 2', () => {
        const { page } = pagination.query({ query: { page: 2 }})
        expect(page).toBe(2)
    })
    test('if per_page query is value 15, should return per_page 15', () => {
        const { per_page } = pagination.query({ query: { per_page: 15 }})
        expect(per_page).toBe(15)
    })
    test('return pagination data page 1, per_page 10, total_entries 10', () => {
        const pagin = pagination.query({ query: { page: 1, per_page: 10 }})
        expect(pagin.data(10)).toMatchObject({
            next_page: null,
            previous_page: null,
            current_page: 1,
            total_page: 1,
            per_page: 10,
            total_entries: 10
        })
    })
    test('return pagination data page 1, per_page 5, total_entries 14', () => {
        const pagin = pagination.query({ query: { page: 1, per_page: 5 }, host, baseUrl })
        expect(pagin.data(14)).toMatchObject({
            next_page: "http://localhost:8000/v1?page=2&per_page=5",
            previous_page: null,
            current_page: 1,
            total_page: 3,
            per_page: 5,
            total_entries: 14
        })
    })
    test('return pagination data page 2, per_page 5, total_entries 14', () => {
        const pagin = pagination.query({ query: { page: 2, per_page: 5 }, host, baseUrl })
        expect(pagin.data(14)).toMatchObject({
            next_page: "http://localhost:8000/v1?page=3&per_page=5",
            previous_page: "http://localhost:8000/v1?page=1&per_page=5",
            current_page: 2,
            total_page: 3,
            per_page: 5,
            total_entries: 14
        })
    })
    test('return pagination data page 3, per_page 5, total_entries 14', () => {
        const pagin = pagination.query({ query: { page: 3, per_page: 5 }, host, baseUrl })
        expect(pagin.data(14)).toMatchObject({
            next_page: null,
            previous_page: "http://localhost:8000/v1?page=2&per_page=5",
            current_page: 3,
            total_page: 3,
            per_page: 5,
            total_entries: 14
        })
    })
    test('return pagination data page 1, per_page 10, total_entries 14', () => {
        const pagin = pagination.query({ query: { page: 1, per_page: 10 }, host, baseUrl })
        expect(pagin.data(14)).toMatchObject({
            next_page: "http://localhost:8000/v1?page=2&per_page=10",
            previous_page: null,
            current_page: 1,
            total_page: 2,
            per_page: 10,
            total_entries: 14
        })
    })
    test('return pagination data page 1, per_page 15, total_entries 14', () => {
        const pagin = pagination.query({ query: { page: 1, per_page: 15 }, host, baseUrl })
        expect(pagin.data(14)).toMatchObject({
            next_page: null,
            previous_page: null,
            current_page: 1,
            total_page: 1,
            per_page: 15,
            total_entries: 14
        })
    })
})