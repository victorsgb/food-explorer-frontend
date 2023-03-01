# FoodExplorer Frontend

 Frontend web application of a fictional restaurant. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This document is written first in English and then in Portuguese.

<p align="center">
  <img src="https://img.shields.io/github/last-commit/victorsgb/food-explorer-frontend?style=plastic"/>
  <img src="https://img.shields.io/github/repo-size/victorsgb/food-explorer-frontend?color=red&style=plastic"/>
  <img src="https://img.shields.io/github/languages/count/victorsgb/food-explorer-frontend?color=yellow&style=plastic">
  <img src="https://img.shields.io/github/languages/top/victorsgb/food-explorer-frontend?style=plastic">
</p>

## English version

This is the final training challenge in the [Rocketseat Explorer program](https://www.rocketseat.com.br/explorer), which involves building a front-end web application using the technologies of the [React ecosystem](https://pt-br.reactjs.org/) starting from a [Figma layout](https://www.figma.com/file/LOMJWIopGI0VwmAU9aT2YS/food-explorer-v2?node-id=5%3A980&t=ufciRiJWyCbfaa5Q-1).

The project refers to the website of a fictional restaurant called FoodExplorer, where you can log in as an administrator, edit and delete dishes, but also as a normal user placing orders. This project makes requests to its own API, whose construction is also part of this challenge and whose repository is also [hosted on Github](https://github.com/victorsgb/food-explorer-backend).

All the mandatory requirements of the challenge have been met, and as an extra, the following features have been added:

- Views of **server error messages**;
- Dialogs for **visual feedback or confirmation** by the administrator when registering, editing and/or deleting dishes;
- Dialog of **password validation** when registering a new user to assist in the creation of secure passwords;
- **Loading feature** at buttons to provide visual feedback to users while waiting for server responses;
- **Error 404 page** to be displayed if the user accesses forbidden or non-existent routes.

**What's to come**:

- Full functionality for adding/removing orders in the shopping cart
- Payment page

### Project deploy

The project has been made available on [Netlify](https://www.netlify.com/), and you can access it through this [link](https://food-explorer-frontend.netlify.app/). You will be redirected to the login page. You can create non-administrator users. Use these credentials if you want to access the project as an administrator: **Email**: admin@email.com and **Password**: Qwerty-12345. *The first request to the server may have a longer delay than usual, because it becomes inactive after a certain time without use.*

### Dependencies

This project contains the following dependencies:

- **[`axios`](https://www.npmjs.com/package/axios), [compatible with version](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json) *1.3.2***: used to communicate with the server;
- **[`react`](https://reactjs.org/), compatible with version *18.2.0***: used to create interactive user interfaces and web applications quickly and efficiently with significantly less code than standard JavaScript;
- **[`react-dom`](https://www.npmjs.com/package/react-dom), compatible with version *18.2.0***: Provides DOM specific methods that can be used at the top level of a web application to allow efficient management of the DOM elements of the page;
- **[`react-icons`](https://www.npmjs.com/package/react-icons), compatible with version *4.7.1***: provides some of the icons used in this project;
- **[`react-router-dom`](https://www.npmjs.com/package/react-router-dom), compatible with version *6.8.1***: provides the application routes depending on whether the user is authenticated or not;
- **[`react-scripts`](https://www.npmjs.com/package/react-scripts), version *5.0.1***: provides scripts to run the build tools needed to programmatically convert React JSX syntax to plain JavaScript;
- **[`react-simply-carousel`](https://www.npmjs.com/package/react-simply-carousel), compatible with version *8.5.1***: used to create the carousel for displaying dishes in the fictional restaurant;
- **[`styled-components`](https://www.npmjs.com/package/styled-components), compatible with version *5.3.6***: used to style all components in this project.

### Project structure

The `src` folder contains the `index.tsx` file, whose function is to initialize the application supported by the React framework.

the `assets` folder contains the svg files used throughout the application, as well as the `index.tsx` file that makes the declaration of these svg files to export them later if needed;

the `hooks` folder contains the definition of two custom hooks: `auth.tsx`, which provides user information during authentication (using `useContext` from **React**), and `windowDimensions.tsx`, which dynamically provides the dimensions of the viewport of the device in use;

the `services` folder contains the file that defines the communication with the server, hosted at [Render](https://food-explorer-backend.onrender.com/);

`styles` contains styling files with classes defined in **css** to define fonts, and objects in the **theme.ts** file to provide the color palette;

`routes` contains files that define the application's routes depending on whether the user is authenticated (`app.routes.tsx`) or not (`auth.routes.tsx`), and an `index.tsx` file that defines the logic of the routes that are provided depending on this condition;

`pages`, as the name suggests, contains subfolders with pages of the application. The `app` subfolder contains pages that can be accessed by an authenticated user, and the `auth` subfolder contains pages that can be accessed by a normal user. All folders are created as custom React components.

> The subfolders of `auth` are `SignIn` and `SignUp`. They are for authentication and account creation respectively.
> The subfolders of `app` are `Home` and `Dish`. They are intended for viewing and searching dishes, as well as creating (`Dish/New`), editing (`Dish/Edit`), and viewing (`Dish/Details` ) information about specific dishes.
> In addition to these subfolders (`auth` and `app`), there is a page (`NotFound`) which is displayed whenever the user accesses a forbidden or non-existent page, and which gives a path to access the main page, depending on whether the user is authenticated or not.

`components` contains several custom components that are used in different places in the application:

`Logo` - a component whose function is to display the FoodExplorer logo, depending on the dimensions of the device used and the user's credentials. It has only one property:
> **showAdmin**, of type *boolean*, whose function is to indicate whether the logo should be changed to reflect the case where the user is *admin*.

`Loading` - a component inspired by [content from this link](https://contactmentor.com/how-to-add-loading-spinner-react-js/), to provide the user with a visual waiting effect for server requests;

`Button` - widely used component rendering a self-designed button with the following properties:
> **text**, of type *string*, which is the text to be displayed indicating the function of the button for the user; **image**, of type *string*, or **icon** of type *IconType*, which represents an image or icon next to the text; **kind**, of type *'delete' | undefined*, which specifies the background color of the button, red, if it is undefined, or black, if it is of type 'delete'; **isLoading**, of type *boolean*, which is used to display the `Loading` component when the state of the current page is specified as loading.
> This component imports and uses another component: `Loading`.

`Input` - a very versatile component that interacts with the end user in different ways, depending on the type it is declared, according to the following properties:
> **type**, of type *'name' | 'email' | 'password' | 'file' | 'money'*, which has the function of determining what kind of input data is allowed to the user, as well as rendering it correctly; **label**, of type *string*, whose function is to provide a label used to identify the type of input; **placeholder**, of type *string*, which provides the user with a sample text to facilitate the input of data; and **icon**, of type *IconType*, which allows the display of an icon next to the **label**.

`Select` - component that is specifically designed to allow the user to select category entries and has the following properties:
> **label**, of type *string*, to identify the component; **icon**, of type *IconType*, to display the icon next to the **label**; and **options**, of type *CategoryProps[]*, to receive objects containing the options available for selection .

`TextArea` - a component similar to the `Input` component, but capable of receiving only one type of input data, namely text. Its difference is that it allows the occurrence of line breaks. This component contains the following properties:
> **label**, of type *string*, whose function is to provide a label used to identify this component, and **placeholder**, of type *string*, which provides the user with a sample text to facilitate data entry;

`Warning` - component used to display messages to the user, in a more elegant way than a simple `alert(...)` with standard browser styling (and without stopping the application until the user acknowledges it); this component has the following properties:
> **type**, of type *'api-bad-response' | 'password-issue'*, to indicate the type of alert to send, the first type referring to error messages received from the server, and the second type indicating secure password requirements that have been met in real-time; **response**, of type *string*, which receives the alert itself from the server when **type** is of type *'api-bad-response'*; **password**, of type *string*, which receives the entered password in real time so that it can be checked whether it meets the specified criteria for a  secure password if this component has *type* of type *'password -issue'*; and **passwordIssueSetter**, which receives a state setter created with React's `useState` hook to change a state declared outside the scope of this component to answer whether the password meets the specified criteria or not.

`Modal` - a component similar to the `Warning` component, also used to display messages to the user in a more elegant way than a simple `alert(...)` with standard browser styling, but with the function of either telling something or asking the user to confirm something. The component has the following properties:
> **type**, of type *'inform' | 'confirm'*, which indicating whether the component just informs or whether it needs user confirmation for a certain action; **name**, of type *string*, used to identify this component and thus allow access to it in [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model); **message**, of type *string*, which displays the message to either inform or request confirmation; **userDecisionSetter**, which receives a state setter created with React's `useState` hook to change a state declared outside the scope of this component. This property must be used in conjunction with **type** equal to *'confirm'*, as it is this state that will be changed depending on whether the user confirms or not;
> This component imports and uses another one: `Button`.

`Footer` - component to display the footer of the pages in the `app` subfolder.
> This component imports and uses another component: `Logo`.

`Menu` - a component used to display the menu if the browser used by the user has dimensions compatible with mobile devices or uses this type of devices. It has the following properties:
> **name**, of type *string*, so that DOM can identify and access this modal; and **searchSetter**, which receives a state setter created with React's `useState` hook, to change the state declared outside the scope of this component. It is used so that the texts inserted into the `Input` contained in this component will change this state of the larger scope.
> This component imports and uses others: `Input` and `Footer`.

`Header` - a component that renders the header of all pages in the `app` subfolder and has the following property:
> **searchSetter**, which receives a state setter created with React's `useState` hook to change the state declared outside the scope of this component. It is used so that the texts inserted into the `Input` contained in this component will change this state of the larger scope.
> This component imports and uses others: `Logo`, `Menu`, `Button` and `Input`.

`TagsWrapper` - component used to allow the *admin* to create and/or delete ingredients for a specific dish when accessing the `app/Dish/New` and `app/Dish/Edit` pages. It has the following properties:
> **className**, of type *string*, which is used to identify and access this component in the DOM; **label**, of type *string*, which is used to identify this component to the user; **tags**, of type *string[]*, which receives an array of tags to be rendered; and **tagsSetter**, which receives a state setter created with React's `useState` hook to update state with a larger scope than this component.
> This component declares and uses another: `Tag`.
>> `Tag` - component used to display each tag contained in the `TagsWrapper` component individually on the screen, and which has the following properties: **name**, of type *string*, to display the ingredient name on the screen; **tagsSetter**, the same object received from `TagsWrapper` and passed to all individual `Tags`, so that it is possible to update the status of the area larger than that of these components, to allow ingredient creation or deletion.

`DishCardsWrapper` - component for displaying dishes on the `app/Home` page, filtering the dishes by categories. This component has the following properties:
> **category**, of type *string*, which reflects the name of each dish category; **admin**, of type *boolean*, which is used to change the style and options in the dishes, depending on whether the user is *admin* or not; **dishesData**, of type *DishProps[]*, which receives the data of each dish in the form of an array of objects, so that each object corresponds to a single card, in the form of the `DishCard` component, explained below:
>> `DishCard` is a component for representing each dish, which has the following properties: **admin**, of type *boolean*, which is used to customize the DishCard depending on whether the user is *admin* or not; **dishData**, of type *DishProps*, which receives data from a dish to display itself; and **device**, of type *'desktop' | 'mobile'*, which is also used to stylize some aspects of the `DishCard` according to the dimensions of the device used by the user.
> This component imports and uses another component: `Button`.

`SignOutModal` - a component similar to the `Modal` component, but with a special function: it asks the user after a certain time if he wants to keep his current session open. The user will be automatically logged out if he does not confirm this within 60 seconds. It has the following properties:
> **name**, of type *string*, to allow identification and access to this component by DOM; **message**, of type *string*, which displays the message of interest to the user; **userDecisionSetter**, which receives a state setter created with React's `useState` hook to change the state declared outside the scope of this component. This state is changed depending on whether the user confirms or not; **modalOpenTracker**, to know the exact time this component was displayed to count the 60 seconds the application waits for a user response.
> This component imports and uses another component: `Button`.

### How to run this project locally

Presuming you already have `git` and `npm` on your local machine, you should follow these simple steps. First, change to the directory you are interested in and clone the repository:

> `git clone https://github.com/victorsgb/food-explorer-frontend`

Then, go to the newly created folder containing your new local repository:

> `cd food-explorer-frontend`

Install the project's dependencies (assuming you have the `npm` package installed on your machine):

> `npm install`

And that's it! You can now run the project in a developer environment. The server will start on port 3334 after you run the following command:

> `npm run dev`

The application is expected to be running normally, in your default browser, ready to make requests to the server, namely the [FoodExplorer Backend](https://github.com/victorsgb/food-explorer-backend).

---

## Versão em português

### Descrição do projeto

Este é o desafio final do treinamento do [Programa Explorer da Rocketseat](https://www.rocketseat.com.br/explorer), que se trata da construção, a partir de [layout do Figma](https://www.figma.com/file/LOMJWIopGI0VwmAU9aT2YS/food-explorer-v2?node-id=5%3A980&t=ufciRiJWyCbfaa5Q-1), da aplicação Frontend Web usando as tecnologias do ecossistema [React](https://pt-br.reactjs.org/).

O projeto se refere ao site de um restaurante fictício, denominado FoodExplorer, onde é possível navegar como administrador, cadastrando, editando e deletando pratos, bem como navegar como usuário comum, fazendo pedidos. Este projeto faz requisições para uma API própria, cuja construção também faz parte deste desafio, cujo repositório se acha [hospedado no Github também](https://github.com/victorsgb/food-explorer-backend).

Todos os requisitos obrigatórios do desafio foram atendidos, e, como milha extra, foram incluídas as seguintes funcionalidades:

- Modais de exibição de **mensagens de erro do servidor**;
- Modais de **feedback visual ou confirmação** por parte do administrador ao cadastrar, editar e/ou deletar pratos;
- Modal de **validação de senha** ao cadastrar novo usuário para auxiliar na criação de senhas fortes;
- **Componente de carregamento** nos botões para fornecer feedback visual aos usuários enquanto aguardam respostas do servidor;
- **Página de erro 404** a ser exibida caso o usuário acesse rotas proibidas ou inexistentes.

**O que ainda está por vir:**

- Toda a funcionalidade de adição/remoção de pedidos no carrinho de compras
- Página de pagamento

### Dependências

Este projeto contém as seguintes dependências:

- **[`axios`](https://www.npmjs.com/package/axios), [compatível com a versão](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json) *1.3.2***: usado para comunicação com o servidor;
- **[`react`](https://reactjs.org/), compatível com a versão *18.2.0***: usado para criar interfaces de usuário interativas e aplicativos da web de forma rápida e eficiente com significativamente menos código do que com o JavaScript padrão;
- **[`react-dom`](https://www.npmjs.com/package/react-dom), compatível com a versão *18.2.0***: fornece métodos específicos da DOM que podem ser usados ​​no nível superior de um aplicativo da Web para permitir uma maneira eficiente de gerenciar elementos DOM da página;
- **[`react-icons`](https://www.npmjs.com/package/react-icons), compatível com a versão *4.7.1***: que disponibiliza alguns dos ícones usados neste projeto;
- **[`react-router-dom`](https://www.npmjs.com/package/react-router-dom), compatível com a versão *6.8.1***: que provê as rotas da aplicação, a depender do usuário estar ou não autenticado;
- **[`react-scripts`](https://www.npmjs.com/package/react-scripts), versão *5.0.1***: provê scripts para executar as ferramentas de construção necessárias para transformar a sintaxe do React JSX em JavaScript simples programaticamente;
- **[`react-simply-carousel`](https://www.npmjs.com/package/react-simply-carousel), compatível com a versão *8.5.1***: usado para construção do carousel de renderização dos pratos do restaurante fictício;
- **[`styled-components`](https://www.npmjs.com/package/styled-components), compatível com a versão *5.3.6***: usado na estilização de todos os componentes deste projeto.

### Deploy do projeto

O deploy do projeto foi realizado na [Netlify](https://www.netlify.com/) e você pode acessá-lo por este [link](https://food-explorer-frontend.netlify.app/). Você será encaminhado para a página de SignIn, e de lá poderá se deslocar à página de SignUp. Porém, como não é possível ainda criar contas de admin pela plataforma, use essas credenciais caso queira acessar o projeto como tal: **email**: admin@email.com e **senha**: Qwerty-12345. *Ao fazer a primeira requisição ao servidor, é possível que haja uma demora maior que o normal, pois este fica inativo após certo tempo sem uso.*

### Estrutura do projeto

A pasta `src` contém o arquivo `index.tsx`, cuja função é inicializar a aplicação, suportada pelo framework React.

`assets` contém os arquivos svg usados ao longo da aplicação, assim como o `index.tsx` que faz a declaração desses arquivos svg, para posterior exportação onde necessário;

`hooks` contém a definição de dois hooks customizados: o `auth.tsx`, que provê as informações do usuário, quando este está autenticado (fazendo uso do `useContext` do **React**), e o `windowDimensions.tsx` provê as dimensões da viewport do device usado, de forma dinâmica;

`services` contém o arquivo que define a comunicação com o servidor, hospedado no [Render](https://food-explorer-backend.onrender.com/);

`styles` contém arquivos de estilização com definição de classes no **css** para definição de fontes, assim como de objeto no arquivo **theme.ts** para prover a paleta de cores;

`routes` contém arquivos que definem as rotas da aplicação, a depender se o usuário está autenticado (`app.routes.tsx`) ou não (`auth.routes.tsx`), além de arquivo `index.tsx` para definir a lógica de quais rotas prover a depender dessa condição;

`pages` contém subpastas contendo as páginas da aplicação, como o próprio nome indica. A subpasta `app` contém páginas a serem acessadas por usuário autenticado e a subpasta `auth` contém páginas a serem acessadas por usuário comum. Todas as pastas são construídas como componentes customizados do React.

> As subpastas de `auth` são `SignIn` e `SignUp`, destinadas para autenticação e criação de conta, respectivamente.
> As subpastas de `app` são `Home` e `Dish`, destinadas para visualização e pesquisa dos pratos e para criação (`Dish/New`), edição (`Dish/Edit`) e visualização (`Dish/Details`) das informações de pratos específicos, respectivamente.
> Além dessas subpastas (`auth` e `app`), há uma página (`NotFound`) a ser renderizada sempre que o usuário acessar uma página proibida ou inexistente, indicando um caminho para acessar a página principal, a depender se o usuário está autenticado, ou não.

`components` contém diversos componentes customizados, que são usados em lugares diversos da aplicação:

`Logo` - componente cuja função é exibir o logotipo do FoodExplorer, dependendo das dimensões do dispositivo em uso e das credenciais do usuário. Conta com apenas uma propriedade:
> **showAdmin**, do tipo *boolean*, que tem por função indicar se a logotipo deve ser alterada para refletir o caso do usuário ser *admin*.

`Loading` - componente inspirado no achado [aqui neste link](https://contactmentor.com/how-to-add-loading-spinner-react-js/), para prover um efeito visual de espera ao usuário, ao fazer requisições ao servidor;

`Button` - componente muito usado, que renderiza um botão com estilo próprio, que tem as seguintes propriedades:
> **text**, do tipo *string*, que é o texto a ser renderizado indicando a função do botão para o usuário; **image**, do tipo *string* ou **icon** do tipo *IconType*, que renderiza uma imagem ou ícone ao lado do texto; **kind**, do tipo *'delete' | undefined* que define a cor de fundo do botão, para vermelho, quando undefined, ou preto, quando do tipo 'delete'; **isLoading** de tipo *boolean*, que serve para renderizar o componente `Loading` sempre que o estado da página atual for dado como em carregamento.
> Este componente importa e utiliza outro: `Loading`.

`Input` - componente bastante versátil, que interage com o usuário final de diversas formas, a depender do tipo que este for declarado, conforme as propriedades a seguir:
> **type**, do tipo *'name' | 'email' | 'password' | 'file' | 'money'*, que tem a função de determinar qual o tipo de dado de entrada permitido ao usuário, assim como se renderizar de maneira adequada; **label**, do tipo *string*, cuja função é prover uma etiqueta que sirva para identificar o tipo de input; **placeholder**, do tipo *string*, que fornece um texto de exemplo ao usuário, para facilitar a inserção de dados; e **icon**, do tipo *IconType*, que permite exibir um ícone ao lado da **label**.

`Select` - componente usado especificamente para permitir a seleção das entradas de categorias por parte do usuário, que vem com as seguintes propriedades:
> **label**, do tipo *string*, para prover identificação ao componente; **icon**, do tipo *IconType*, para exibição de ícone ao lado da **label**, e **options**, do tipo *CategoryProps[]*, para receber os objetos contendo as opções disponíveis para seleção.

`TextArea` - componente semelhante ao `Input`, embora limitado a receber apenas um tipo de dado de entrada, do tipo texto. Sua diferença é que permite a ocorrência de quebra de linha. Este componente contém as seguintes propriedades:
> **label**, do tipo *string*, cuja função é prover uma etiqueta que sirva para identificar este componente e **placeholder**, do tipo *string*, que fornece um texto de exemplo ao usuário, para facilitar a inserção de dados;

`Warning` - componente usado para exibir mensagens para o usuário, de maneira mais elegante que um simples `alert(...)` com estilização padrão do navegador (e sem pausar a aplicação até que o usuário confirme), que conta com as seguintes propriedades:
> **type**, do tipo *'api-bad-response' | 'password-issue'*, para indicar o tipo de alerta a ser enviado, o primeiro tipo referente à mensagens de erro recebidas do servidor, e o segundo tipo mostrar os requisitos de senha forte que foram atendidos, em tempo real; **response**, do tipo *string*, que recebe a mensagem em si do servidor, quando **type** do tipo *'api-bad-response'*; **password**, do tipo *string*, que recebe a senha sendo digitada em tempo real, para que haja a validação se esta atende aos critérios de senha forte estabelecidos, quando este componente tem o *type* do tipo *'password-issue'*; e **passwordIssueSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modificação de estado declarado fora do escopo deste componente, a fim de responder se a senha atendeu, ou não, os critérios estabelecidos.

`Modal` - componente semelhante ao `Warning`, também usado para exibir mensagens para o usuário, de maneira mais elegante que um simples `alert(...)` com estilização padrão do navegador, mas com função de ou informar algo, ou solicitar a confirmação de algo, por parte do usuário. O componente tem as seguintes propriedades:
> **type**, do tipo *'inform' | 'confirm'*, que indica se o componente terá função apenas de informar algo, ou se exigirá a confirmação do usuário para que determinada ação aconteça; **name**, do tipo *string*, que serve para identificar este componente, permitindo assim seu acesso na DOM; **message**, do tipo *string*, que exibe a mensagem seja para informar ou solicitar a confirmação de algo; **userDecisionSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modificação de estado declarado fora do escopo deste componente. Essa propriedade deve ser usada em conjunto com **type** igual a *'confirm'*, pois é este estado que é modificado em função da ação de confirmação, ou não, do usuário;
> Este componente importa e utiliza outro: `Button`.

`Footer` - componente para exibir o rodapé das páginas da subpasta `app`.
> Este componente importa e utiliza outro: `Logo`.

`Menu` - componente que serve para renderizar o menu, caso o navegador usado pelo usuário tenha dimensões compatíveis com dispositivos móveis ou esteja usando estes tipos de dispositivos. Conta com as seguintes propriedades:
> **name**, do tipo *string*, para permitir a identificação e acesso deste modal por parte da DOM; e **searchSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modificação de estado declarado fora do escopo deste componente. É usado para que os textos inseridos no `Input` que consta nesse componente altere esse estado de escopo maior.
> Este componente importa e utiliza outros: `Input` e `Footer`.

`Header` - componente que renderiza o cabeçalho de todas as páginas da subpasta `app`, que tem a seguinte propriedade:
> **searchSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modificação de estado declarado fora do escopo deste componente. É usado para que os textos inseridos no `Input` que consta nesse componente altere esse estado de escopo maior.
> Este componente importa e utiliza outros: `Logo`, `Menu`, `Button` e `Input`.

`TagsWrapper` - componente utilizado para que o usuário *admin* possa criar e/ou deletar ingredientes de determinado prato, ao acessar as páginas `app/Dish/New` e `app/Dish/Edit`. Conta com as seguintes propriedades:
> **className**, do tipo *string*, que permite a identificação e acesso deste componente na DOM; **label**, do tipo *string*, que serve para identificar este componente para o usuário; **tags**, do tipo *string[]*, que recebe um array de tags para serem renderizadas; e **tagsSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, a fim de atualizar estado de escopo maior que o deste componente.
> Este componente declara e faz uso de outro: `Tag`.
>> `Tag` - componente utilizado para renderizar individualmente em tela cada tag presente no componente `TagsWrapper`, que recebe as seguintes propriedades: **name**, do tipo *string*, para exibir em tela o nome do ingrediente; **tagsSetter**, o mesmo objeto recebido pela `TagsWrapper`, que passa para todas as `Tags` individuais, a fim de que seja possível atualizar estado de escopo maior que o destes componentes, a fim de permitir a criação ou deleção de ingredientes.

`DishCardsWrapper` - componente utilizado para exibir os pratos na página `app/Home`, filtrando os pratos por categoria. Este componente conta com as seguintes propriedades:
> **category**, do tipo *string*, que renderiza o nome da categoria dos pratos em questão; **admin**, do tipo *boolean*, que serve para modificar o estilo e opções nos pratos, em função do usuário ser ou não *admin*; **dishesData**, do tipo *DishProps[]*, que recebe os dados de cada prato em formato de array de objetos, a fim de que cada objeto corresponda à uma carta individual, na forma do componente `DishCard`, a ser explicado a seguir:
>> `DishCard` é um componente para renderização de cada prato individual, que conta com as seguintes propriedades: **admin**, do tipo *boolean*, que serve para customizar a carta do prato em função do usuário ser ou não *admin*; **dishData**, do tipo *DishProps*, que recebe os dados de um prato em si, a fim de serem exibidos; e **device**, do tipo *'desktop' | 'mobile'*, que serve para estilizar também alguns aspectos da carta do prato em função das dimensões do dispositivo sendo usado pelo usuário.
> Este componente importa e utiliza outro: `Button`.

`SignOutModal` - componente semelhante ao `Modal`, mas com função específica: questionar o usuário, de quando em quando, se deseja manter a sessão corrente aberta. Caso não haja nenhuma confirmação em 60 segundos, o usuário é desconectado automaticamente. Conta com as seguintes propriedades:
> **name**, do tipo *string*, para permitir a identificação e acesso deste componente pela DOM; **message**, do tipo *string*, que exibe a mensagem de interesse ao usuário;  **userDecisionSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modificação de estado declarado fora do escopo deste componente. É este estado que é modificado em função da ação de confirmação, ou não, do usuário;
**modalOpenTracker**, do tipo *number*, que tem como objetivo saber o momento exato em que este componente foi exibido em tela, a fim de iniciar a contagem de 60 segundos de espera por uma reação do usuário.
> Este componente importa e utiliza outro: `Button`.

### Como rodar este projeto localmente

Supondo que você já tenha o `git` e o `npm` na sua máquina local, você deve seguir estes passos simples. Primeiro, vá ao diretório de seu interesse e clone este repositório:

> `git clone https://github.com/victorsgb/food-explorer-frontend`

Então, vá para a pasta recém-criada contendo o seu novo repositório local:

> `cd food-explorer-frontend`

Instale as dependências do projeto (assumindo que você tenha o pacote `npm` instalado na sua máquina):

> `npm install`

E pronto! Você já pode rodar o projeto em ambiente de desenvolvedor. O servidor será inicializado na porta 3334, após você rodar o seguinte comando:

> `npm run dev`

E é isso! Espera-se que a aplicação esteja rodando normalmente, no seu navegador padrão, pronto para fazer solicitações ao servidor, a saber, o [FoodExplorer Backend](https://github.com/victorsgb/food-explorer-backend).
