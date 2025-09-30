import react from 'react'
// import tailwindcss from '@tailwindcss/vite' // you can't use this here because this is not a config file and here it give error

function Card() {
    return (
        <div className="bg-green-400 text-3xl p-5 text-black mb-4 rounded-xl font-bold underline">
            Hello world!
        </div>
    )
}
export default Card