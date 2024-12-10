import styles from './Pessoa.module.css';

function Pessoa ({nome, idade, profissao, foto}) {
  return (
    <div className={styles.pessoaContainer}>
      <img src={foto} alt={foto}/>  
      <h2>{nome}</h2>
      <p className={styles.pessoaContent}>{idade} Anos</p>
      <p className={styles.pessoaContent}>Profissão: {profissao}(a)</p>
    </div>
  );
}

export default Pessoa;