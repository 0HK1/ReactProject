import PropTtypes from 'prop-types';

function Item({marca, lancamento}) {
  return (
    <li>
        {marca} - {lancamento}
    </li>
  );
}

Item.propTypes = {
  marca: PropTtypes.string.isRequired,
  lancamento: PropTtypes.number.isRequired
}

Item.defaultProps = {
  marca: "Marca não informada",
  lancamento: 0
}

export default Item;