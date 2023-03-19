const VisaoGeralClientes = () => {
    return (
<div class="container">
    <h1>Classificação</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">NOME</th>
      <th scope="col">ID</th>
      <th scope="col">SCORE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="/Clientes" class="link-dark" style={{textDecoration: 'none'}}>CLIENTE1</a></th>
      <td>01</td>
      <td>12</td>
    </tr>
    <tr>
      <th scope="row"><a href="/Clientes" class="link-dark" style={{textDecoration: 'none'}}>CLIENTE2</a></th>
      <td>02</td>
      <td>56</td>
    </tr>
    <tr>
      <th scope="row"><a href="/Clientes" class="link-dark" style={{textDecoration: 'none'}}>CLIENTE3</a></th>
      <td>03</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
</div>
    );
}

export default VisaoGeralClientes