import React from 'react'
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13305_1.jpg"

const Card = () => {
    return (
        <article>
            <img src={img} alt="immagine di card" />
        </article>
    )
}

export default Card