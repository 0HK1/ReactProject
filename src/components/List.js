import Item from "../services/Item";

function List() {
  return (
    <>
      <h1>minha list</h1>
      <ul>
        <Item marca="Mustang" lancamento={1985}/>
        <Item marca="Mitsubishi" lancamento={2003}/>
        <Item marca="Fiat" lancamento={1987}/>
      </ul>
    </>  
  );
}  

export default List;