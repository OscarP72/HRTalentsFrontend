import './OfertasDeEmpleo.css';

function OfertasDeEmpleo() {
  return (
    <section className="content">
      <article className="ofertas-item">
        <h3 className="tittle">Ofertas de Empleo</h3>
        <p className="description">Descripcion oferta</p>
        <button className="inscribirse">Inscribete a la Oferta</button>
      </article>
    </section>
  );
}
{
  /* <div className="add">
      <h3 className="tittle">OfertasDeEmpleo</h3>
      <form>
        <input type="text" placeholder="Oferta" />
        <textarea placeholder="Descripcion"></textarea>
        <input type="submit" value="inscribirse" />
      </form>
</div>*/
}

export default OfertasDeEmpleo;
