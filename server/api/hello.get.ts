export default defineEventHandler(async (event) => {
    const { text } = getQuery(event);

    return `Hello ${text}!`;
});
