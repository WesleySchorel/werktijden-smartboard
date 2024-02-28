export const load = async () => {
    return { koppelcode: generateKoppelcode() }
}

function generateKoppelcode() {
    return Math.floor(100000000 + Math.random() * 900000000);
}