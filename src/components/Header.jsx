import './Header.css'

function HeaderItem(){
    return(
        <div className="headerContainer">
            <img className="logo" src="https://cdn-icons-png.freepik.com/512/7996/7996558.png" alt="Logo" />
            <div className="texts">
                <h1 className="title">agenda online</h1>
                <strong className="subtitle"> adicione e gerencie contatos de maneira fácil e rápida</strong>
            </div>
        </div>
    )
}

export default HeaderItem