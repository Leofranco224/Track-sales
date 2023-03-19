const Relatorios = () => {
    return(
<div class="container">
    <h1>Relatorios</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Janeiro</th>
      <th scope="col">Fevereiro</th>
      <th scope="col">Março</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Qtde no-shows</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Bookings abertos</th>
      <td>2</td>
      <td>30</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Bookings fechados</th>
      <td>70</td>
      <td>98</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
<button class="btn btn-secondary">
    baixar relatorio
</button>
</div>
    );
}
export default Relatorios