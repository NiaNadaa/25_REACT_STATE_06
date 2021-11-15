function Main({libros}){
    let data
    data=libros.map(function(libro){
        return (
            <Libro libro={libro}/>
        )
    })

    function Libro({data}){
        return(
            <>
            <div>
                <h1>Título: {data.titulo}</h1>
                <h2>Autor: {data.autor}</h2>
                <p>Sinopsis: {data.descripcion}</p>
                <img src={data.img}></img>
                <p>Stock: {data.stock}</p>
            </div>
            </>
        )
    }

return(<div>{data}</div>)
}

export default Main;
