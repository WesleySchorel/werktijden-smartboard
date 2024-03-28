
let response

export const load = async ({ }) => {

    try {
        response = await fetch('https://www.rtlnieuws.nl/rss.xml');
        // console.log(response)
        const xmlString = await response.text();
        
        return {xmlString}
        
    } catch (error) {
        console.error('Oh nee! Error fetching RSS feed:', error);
    }
}