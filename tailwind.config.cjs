/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                navbar: "0 0 10px #999",
                search: "0 0 5px #333",
            },
            fontFamily: {
                vuighe: ["vuigheRoboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
