const OperacoesEmCurso = () => {
    return (
    <div class="container">
        <h1>Operações em curso</h1>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">NOME</th>
            <th scope="col">ID</th>
            <th scope="col">Booking</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">CLIENTE1</th>
             <td>01</td>
             <td>BRITJ129ER000006</td>
            </tr>
            <tr>
                <th scope="row">CLIENTE2</th>
                <td>02</td>
                <td>BRITJ129ER000007</td>
            </tr>
            <tr>
             <th scope="row">CLIENTE3</th>
             <td>03</td>
             <td>BRITJ129ER000008</td>
            </tr>
        </tbody>
        </table>
    </div>
    );
}
export default OperacoesEmCurso