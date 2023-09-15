function PokeCard({id, name, type, base_experience}){
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`
return (
    <div key={id} className="poke-card">
        <h1>{name}</h1>
        <img src={src}></img>
        <p>Type:{type}</p>
        <p>EXP: {base_experience}</p>
    </div>
)

}

export default PokeCard