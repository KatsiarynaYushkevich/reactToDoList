export default class Get {
    static async get(url) {
        try {
            const response = await fetch(url);
            return {status: 'error', response: await response.json};
        } catch (e) {
            return {status: 'error', response: e.message}
        }
    }
}