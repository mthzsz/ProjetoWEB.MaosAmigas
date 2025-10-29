// templates.js
export const templates = {
  index: `
    <section class="hero">
      <h1>Instituto Mãos Amigas</h1>
      <p>Promovendo solidariedade, educação e cidadania.</p>
      <img src="img/voluntariado.jpg" alt="Voluntariado em ação">
    </section>
  `,

  projetos: `
    <section class="cards">
      <h2>Projetos Sociais</h2>
      <div class="grid">
        <div class="card">
          <img src="img/alimenta.jpg" alt="Ação de alimentação">
          <h3>Projeto Alimenta</h3>
          <p>Distribuição de alimentos para famílias em vulnerabilidade.</p>
        </div>
        <div class="card">
          <img src="img/educacao.jpg" alt="Aulas e educação">
          <h3>Projeto Educação</h3>
          <p>Oficinas e cursos gratuitos para crianças e jovens.</p>
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section class="cadastro">
      <h2>Cadastro de Voluntário</h2>
      <form id="formCadastro">
        <label>Nome Completo</label>
        <input type="text" id="nome" required>

        <label>E-mail</label>
        <input type="email" id="email" required>

        <label>CPF</label>
        <input type="text" id="cpf" required maxlength="14" placeholder="000.000.000-00">

        <label>Telefone</label>
        <input type="tel" id="telefone" required placeholder="(00) 00000-0000">

        <label>Data de Nascimento</label>
        <input type="date" id="nascimento" required>

        <label>Endereço</label>
        <input type="text" id="endereco" required>

        <label>CEP</label>
        <input type="text" id="cep" required maxlength="9" placeholder="00000-000">

        <label>Cidade</label>
        <input type="text" id="cidade" required>

        <label>Estado</label>
        <input type="text" id="estado" required>

        <button type="submit">Cadastrar</button>
      </form>
      <div id="feedback"></div>
    </section>
  `
};
