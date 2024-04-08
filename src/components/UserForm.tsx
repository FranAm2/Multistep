type UserProps = {
    data:{
        name: string,
        email: string,
    }
    updateFildHandler:(key: string, value: string) => void;
}

const UserForm = ({data, updateFildHandler}:UserProps) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Escreva o seu nome"
                required
                value={data.name || ""}
                onChange={(e) => updateFildHandler("name", e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input 
                type="text"
                id="email"
                name="email"
                placeholder="Escreva o seu email"
                required
                value={data.email || ""}
                onChange={(e) => updateFildHandler("email", e.target.value)}
            />
        </div>
    </div>
  )
}
export default UserForm;