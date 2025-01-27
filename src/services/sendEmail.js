export const sendEmailQuote = async (formData) => {
    try {
        const response = await fetch('https://colortron-backend.vercel.app/send-quoteEmail', {
            method:'POST',
            body: formData,
        });

        const result = await response.json();
        return result;
    }catch (error) {
        console.error(error);
        return {success: false, error: error};
    }
}






