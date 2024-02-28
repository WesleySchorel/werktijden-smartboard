let koppelcodes = []

export const load = async () => {
    return { koppelcodes }
}

export const actions = {
    koppel: async ({ request }) => {
        const formData = await request.formData();
        const koppelcode = formData.get('koppelcode')
        koppelcodes.push(koppelcode)
        return {
            koppelcode,
            success: true,
        }
    },

    ontkoppel: async ({ request }) => {
        const formData = await request.formData();
        const koppelcode = formData.get('koppelcode')
        const index = koppelcodes.indexOf(koppelcode)
        koppelcodes.splice(index, 1);
        return {
            koppelcode,
            success: true
        }
    }
}