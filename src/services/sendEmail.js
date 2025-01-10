export const sendEmailQuote = async (formData) => {
    try {
        const response = await fetch('http://localhost:3000/api-quote/send-quoteEmail', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        return result;
    }catch (error) {
        console.error(error);
        return {success: false, error: error};
    }
}






