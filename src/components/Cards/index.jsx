function Card({imagem, titulo, paragrafo}){
    return (
        <div className="rounded-2xl p-5 w-96 hover:scale-105 transition-transform border-2 border-green-800 text-center">
            <img src={imagem} alt={titulo} className="w-32 mx-auto"/>
            <h4 className="text-green-900 font-semibold text-lg mt-2">{titulo}</h4>
            <p className="text-sm text-gray-600">{paragrafo}</p>
        </div>
    )
}

export default Card