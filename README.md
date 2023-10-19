**Projeto de login e um CRUD simples usando o Redux**

**Bibliotecas utilizadas no projeto:**
- react-router-dom
- axios
- redux
- redux-saga

O projeto foi construído com base na API jsonplaceholder.typicode.com/users/, com sistema de login, adicionar endereço, carregar usuários
e redux-saga para usar efeito colateral.
- aprendido no curso da Udemy.

**Tela login**

![inicial](https://github.com/Tech2as/Redux/assets/95533385/04038224-5a40-4aef-8f42-f659c3fff6e0)

**Na tela de login, podemos criar entrar com usuário e senha e já ter acesso as funcionalidades,
caso o usuário não queira logar, ele pode clicar no "Dev Login" e ser redirecionado ao painel.**

**Dashboard sem login**

![dashboardsemlogin](https://github.com/Tech2as/Redux/assets/95533385/bc947855-64c7-430d-8b7e-30246d8a7889)

**Se o usuário não quiser logar, ele terá acesso a funcionalidades limitadas, como buscar os usuários da API.**

**Dashboard com login**

![dashboardcomlogin](https://github.com/Tech2as/Redux/assets/95533385/e24dcd56-80de-4266-a24f-9e7c3ccdbe19)

**No header, foi feita um renderização condicional para caso o usuário estiver logado, ao clicar em sair
será chamado um dispatch e o user será retornado a null e navegado para a página de login. Foi feita também
uma renderização condicional para quando o usuário estiver logado aparecer o nome e email, ao usuário criar 
uma conta será chamado um createSlice, no createUser receberemos o que for mandado e será colocado dentro
da propriedade user do Redux.**

![endereço](https://github.com/Tech2as/Redux/assets/95533385/bea2fc41-198c-40f8-b680-799e77afb70b)

**Caso o usuário cadastre um endereço, o addAddress receberá o que for mandado e será colocado dentro
da propriedade user do Redux(ao criar o usuário, o address começa como null dentro do user).**

![meuendereço](https://github.com/Tech2as/Redux/assets/95533385/50266536-3ce5-4deb-a6d7-268411941196)

**Se o usuário clicar em "Meus endereços", foi feito um encadeamento de objetos com o useState para
acessar os dados e ser mostrado nos input, o usuário pode atualizar ou deletar endereço.**

<div align="center">
  
**Slice.js**

</div>

**Manipula as ações, estados iniciais que nossos reducers vão ter.**

<div align="center">
  
**root-reducer.js**

</div>

**Importar todos nossos slices (onde terá nossos reducers, actions, estados espalhados globalmente)**

<div align="center">
  
**store.js**

</div>

**Importando e usando todos nossos reducers**








