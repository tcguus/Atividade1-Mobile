# Atividade 01: Consumindo API com TanStack Query

## 1. Objetivo do Projeto

O objetivo principal desta atividade é desenvolver um aplicativo móvel em React Native que consome dados de uma API pública de usuários. O projeto utiliza a biblioteca **TanStack Query** para gerenciar o estado assíncrono, tratando de forma eficiente os estados de carregamento (loading), erro e sucesso dos dados buscados.

## 2. Funcionalidades Implementadas

O aplicativo foi além dos requisitos básicos, entregando uma experiência de usuário rica e funcionalidades avançadas.

#### Funcionalidades Essenciais:
- **Consumo de API:** Busca e exibe uma lista de usuários a partir do endpoint público `https://jsonplaceholder.typicode.com/users`.
- **Gerenciamento de Estado com TanStack Query:** Todo o ciclo de vida da requisição (busca, cache, atualização em segundo plano) é gerenciado pelo `useQuery`.
- **Tratamento de Estados:**
  - **Carregamento:** Um modal centralizado e sobreposto exibe a mensagem "Carregando usuários..." durante a busca inicial e atualizações manuais.
  - **Erro:** Uma mensagem de erro clara é exibida caso a busca falhe, com uma opção para tentar novamente.
- **Navegação por Abas:** A estrutura do aplicativo utiliza o Expo Router para criar uma navegação principal com duas telas: "Usuários" e "Explorar".

#### Funcionalidades Avançadas:
- **Tela de Usuários (Inicial):** Apresenta uma lista simples contendo o **nome, e-mail e cidade** de cada usuário, cumprindo os requisitos básicos da atividade.
- **Tela Explorar (Avançada):**
  - **Lista Sanfonada (Accordion):** Cada usuário é apresentado em um componente sanfonado (accordion) que, ao ser clicado, expande para mostrar **todas as informações detalhadas** disponíveis na API.
  - **Formatação de Dados:** As informações detalhadas são apresentadas de forma legível e organizada, com rótulos e seções.
- **Botão de Atualização (Refetch):** Ambas as telas possuem um botão "Atualizar Lista" que dispara uma nova busca pelos dados.
- **Efeito de "Refresh" Visual:** Na tela Explorar, ao atualizar a lista, todos os accordions abertos se fecham, proporcionando um feedback visual claro de que a página foi recarregada.
- **Tela de Rota Não Encontrada (404):** Uma tela personalizada e amigável é exibida caso o usuário tente acessar uma rota inexistente.

## 3. Tecnologias Utilizadas

- **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo & Expo Router:** Ecossistema e sistema de roteamento baseado em arquivos para simplificar o desenvolvimento.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.
- **TanStack Query (React Query):** Biblioteca para gerenciamento de estado assíncrono, fetching e caching.
- **Axios:** Cliente HTTP para realizar as requisições à API.
- **Expo Vector Icons:** Biblioteca para utilização de ícones vetoriais na interface.

## 4. Como Executar o Projeto

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/tcguus/Atividade1-Mobile
    ```

2.  **Acessar a pasta do projeto:**
    ```bash
    cd atividade1
    ```

3.  **Instalar as dependências:**
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

4.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npx expo start
    ```

5.  Escaneie o QR Code gerado com o aplicativo **Expo Go** em seu dispositivo móvel (Android ou iOS).

---

## Integrantes

* **Nome:** Gustavo Camargo de Andrade
* **RM:** 555562

---

* **Nome:** Rodrigo Souza Mantovanello
* **RM:** 555451

---

* **Nome:** Leonardo Cesar Rodrigues Nascimento
* **RM:** 558373
