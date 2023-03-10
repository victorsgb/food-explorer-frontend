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

## Vers??o em portugu??s

### Descri????o do projeto

Este ?? o desafio final do treinamento do [Programa Explorer da Rocketseat](https://www.rocketseat.com.br/explorer), que se trata da constru????o, a partir de [layout do Figma](https://www.figma.com/file/LOMJWIopGI0VwmAU9aT2YS/food-explorer-v2?node-id=5%3A980&t=ufciRiJWyCbfaa5Q-1), da aplica????o Frontend Web usando as tecnologias do ecossistema [React](https://pt-br.reactjs.org/).

O projeto se refere ao site de um restaurante fict??cio, denominado FoodExplorer, onde ?? poss??vel navegar como administrador, cadastrando, editando e deletando pratos, bem como navegar como usu??rio comum, fazendo pedidos. Este projeto faz requisi????es para uma API pr??pria, cuja constru????o tamb??m faz parte deste desafio, cujo reposit??rio se acha [hospedado no Github tamb??m](https://github.com/victorsgb/food-explorer-backend).

Todos os requisitos obrigat??rios do desafio foram atendidos, e, como milha extra, foram inclu??das as seguintes funcionalidades:

- Modais de exibi????o de **mensagens de erro do servidor**;
- Modais de **feedback visual ou confirma????o** por parte do administrador ao cadastrar, editar e/ou deletar pratos;
- Modal de **valida????o de senha** ao cadastrar novo usu??rio para auxiliar na cria????o de senhas fortes;
- **Componente de carregamento** nos bot??es para fornecer feedback visual aos usu??rios enquanto aguardam respostas do servidor;
- **P??gina de erro 404** a ser exibida caso o usu??rio acesse rotas proibidas ou inexistentes.

**O que ainda est?? por vir:**

- Toda a funcionalidade de adi????o/remo????o de pedidos no carrinho de compras
- P??gina de pagamento

### Depend??ncias

Este projeto cont??m as seguintes depend??ncias:

- **[`axios`](https://www.npmjs.com/package/axios), [compat??vel com a vers??o](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json) *1.3.2***: usado para comunica????o com o servidor;
- **[`react`](https://reactjs.org/), compat??vel com a vers??o *18.2.0***: usado para criar interfaces de usu??rio interativas e aplicativos da web de forma r??pida e eficiente com significativamente menos c??digo do que com o JavaScript padr??o;
- **[`react-dom`](https://www.npmjs.com/package/react-dom), compat??vel com a vers??o *18.2.0***: fornece m??todos espec??ficos da DOM que podem ser usados ??????no n??vel superior de um aplicativo da Web para permitir uma maneira eficiente de gerenciar elementos DOM da p??gina;
- **[`react-icons`](https://www.npmjs.com/package/react-icons), compat??vel com a vers??o *4.7.1***: que disponibiliza alguns dos ??cones usados neste projeto;
- **[`react-router-dom`](https://www.npmjs.com/package/react-router-dom), compat??vel com a vers??o *6.8.1***: que prov?? as rotas da aplica????o, a depender do usu??rio estar ou n??o autenticado;
- **[`react-scripts`](https://www.npmjs.com/package/react-scripts), vers??o *5.0.1***: prov?? scripts para executar as ferramentas de constru????o necess??rias para transformar a sintaxe do React JSX em JavaScript simples programaticamente;
- **[`react-simply-carousel`](https://www.npmjs.com/package/react-simply-carousel), compat??vel com a vers??o *8.5.1***: usado para constru????o do carousel de renderiza????o dos pratos do restaurante fict??cio;
- **[`styled-components`](https://www.npmjs.com/package/styled-components), compat??vel com a vers??o *5.3.6***: usado na estiliza????o de todos os componentes deste projeto.

### Deploy do projeto

O deploy do projeto foi realizado na [Netlify](https://www.netlify.com/) e voc?? pode acess??-lo por este [link](https://food-explorer-frontend.netlify.app/). Voc?? ser?? encaminhado para a p??gina de SignIn, e de l?? poder?? se deslocar ?? p??gina de SignUp. Por??m, como n??o ?? poss??vel ainda criar contas de admin pela plataforma, use essas credenciais caso queira acessar o projeto como tal: **email**: admin@email.com e **senha**: Qwerty-12345. *Ao fazer a primeira requisi????o ao servidor, ?? poss??vel que haja uma demora maior que o normal, pois este fica inativo ap??s certo tempo sem uso.*

### Estrutura do projeto

A pasta `src` cont??m o arquivo `index.tsx`, cuja fun????o ?? inicializar a aplica????o, suportada pelo framework React.

`assets` cont??m os arquivos svg usados ao longo da aplica????o, assim como o `index.tsx` que faz a declara????o desses arquivos svg, para posterior exporta????o onde necess??rio;

`hooks` cont??m a defini????o de dois hooks customizados: o `auth.tsx`, que prov?? as informa????es do usu??rio, quando este est?? autenticado (fazendo uso do `useContext` do **React**), e o `windowDimensions.tsx` prov?? as dimens??es da viewport do device usado, de forma din??mica;

`services` cont??m o arquivo que define a comunica????o com o servidor, hospedado no [Render](https://food-explorer-backend.onrender.com/);

`styles` cont??m arquivos de estiliza????o com defini????o de classes no **css** para defini????o de fontes, assim como de objeto no arquivo **theme.ts** para prover a paleta de cores;

`routes` cont??m arquivos que definem as rotas da aplica????o, a depender se o usu??rio est?? autenticado (`app.routes.tsx`) ou n??o (`auth.routes.tsx`), al??m de arquivo `index.tsx` para definir a l??gica de quais rotas prover a depender dessa condi????o;

`pages` cont??m subpastas contendo as p??ginas da aplica????o, como o pr??prio nome indica. A subpasta `app` cont??m p??ginas a serem acessadas por usu??rio autenticado e a subpasta `auth` cont??m p??ginas a serem acessadas por usu??rio comum. Todas as pastas s??o constru??das como componentes customizados do React.

> As subpastas de `auth` s??o `SignIn` e `SignUp`, destinadas para autentica????o e cria????o de conta, respectivamente.
> As subpastas de `app` s??o `Home` e `Dish`, destinadas para visualiza????o e pesquisa dos pratos e para cria????o (`Dish/New`), edi????o (`Dish/Edit`) e visualiza????o (`Dish/Details`) das informa????es de pratos espec??ficos, respectivamente.
> Al??m dessas subpastas (`auth` e `app`), h?? uma p??gina (`NotFound`) a ser renderizada sempre que o usu??rio acessar uma p??gina proibida ou inexistente, indicando um caminho para acessar a p??gina principal, a depender se o usu??rio est?? autenticado, ou n??o.

`components` cont??m diversos componentes customizados, que s??o usados em lugares diversos da aplica????o:

`Logo` - componente cuja fun????o ?? exibir o logotipo do FoodExplorer, dependendo das dimens??es do dispositivo em uso e das credenciais do usu??rio. Conta com apenas uma propriedade:
> **showAdmin**, do tipo *boolean*, que tem por fun????o indicar se a logotipo deve ser alterada para refletir o caso do usu??rio ser *admin*.

`Loading` - componente inspirado no achado [aqui neste link](https://contactmentor.com/how-to-add-loading-spinner-react-js/), para prover um efeito visual de espera ao usu??rio, ao fazer requisi????es ao servidor;

`Button` - componente muito usado, que renderiza um bot??o com estilo pr??prio, que tem as seguintes propriedades:
> **text**, do tipo *string*, que ?? o texto a ser renderizado indicando a fun????o do bot??o para o usu??rio; **image**, do tipo *string* ou **icon** do tipo *IconType*, que renderiza uma imagem ou ??cone ao lado do texto; **kind**, do tipo *'delete' | undefined* que define a cor de fundo do bot??o, para vermelho, quando undefined, ou preto, quando do tipo 'delete'; **isLoading** de tipo *boolean*, que serve para renderizar o componente `Loading` sempre que o estado da p??gina atual for dado como em carregamento.
> Este componente importa e utiliza outro: `Loading`.

`Input` - componente bastante vers??til, que interage com o usu??rio final de diversas formas, a depender do tipo que este for declarado, conforme as propriedades a seguir:
> **type**, do tipo *'name' | 'email' | 'password' | 'file' | 'money'*, que tem a fun????o de determinar qual o tipo de dado de entrada permitido ao usu??rio, assim como se renderizar de maneira adequada; **label**, do tipo *string*, cuja fun????o ?? prover uma etiqueta que sirva para identificar o tipo de input; **placeholder**, do tipo *string*, que fornece um texto de exemplo ao usu??rio, para facilitar a inser????o de dados; e **icon**, do tipo *IconType*, que permite exibir um ??cone ao lado da **label**.

`Select` - componente usado especificamente para permitir a sele????o das entradas de categorias por parte do usu??rio, que vem com as seguintes propriedades:
> **label**, do tipo *string*, para prover identifica????o ao componente; **icon**, do tipo *IconType*, para exibi????o de ??cone ao lado da **label**, e **options**, do tipo *CategoryProps[]*, para receber os objetos contendo as op????es dispon??veis para sele????o.

`TextArea` - componente semelhante ao `Input`, embora limitado a receber apenas um tipo de dado de entrada, do tipo texto. Sua diferen??a ?? que permite a ocorr??ncia de quebra de linha. Este componente cont??m as seguintes propriedades:
> **label**, do tipo *string*, cuja fun????o ?? prover uma etiqueta que sirva para identificar este componente e **placeholder**, do tipo *string*, que fornece um texto de exemplo ao usu??rio, para facilitar a inser????o de dados;

`Warning` - componente usado para exibir mensagens para o usu??rio, de maneira mais elegante que um simples `alert(...)` com estiliza????o padr??o do navegador (e sem pausar a aplica????o at?? que o usu??rio confirme), que conta com as seguintes propriedades:
> **type**, do tipo *'api-bad-response' | 'password-issue'*, para indicar o tipo de alerta a ser enviado, o primeiro tipo referente ?? mensagens de erro recebidas do servidor, e o segundo tipo mostrar os requisitos de senha forte que foram atendidos, em tempo real; **response**, do tipo *string*, que recebe a mensagem em si do servidor, quando **type** do tipo *'api-bad-response'*; **password**, do tipo *string*, que recebe a senha sendo digitada em tempo real, para que haja a valida????o se esta atende aos crit??rios de senha forte estabelecidos, quando este componente tem o *type* do tipo *'password-issue'*; e **passwordIssueSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modifica????o de estado declarado fora do escopo deste componente, a fim de responder se a senha atendeu, ou n??o, os crit??rios estabelecidos.

`Modal` - componente semelhante ao `Warning`, tamb??m usado para exibir mensagens para o usu??rio, de maneira mais elegante que um simples `alert(...)` com estiliza????o padr??o do navegador, mas com fun????o de ou informar algo, ou solicitar a confirma????o de algo, por parte do usu??rio. O componente tem as seguintes propriedades:
> **type**, do tipo *'inform' | 'confirm'*, que indica se o componente ter?? fun????o apenas de informar algo, ou se exigir?? a confirma????o do usu??rio para que determinada a????o aconte??a; **name**, do tipo *string*, que serve para identificar este componente, permitindo assim seu acesso na DOM; **message**, do tipo *string*, que exibe a mensagem seja para informar ou solicitar a confirma????o de algo; **userDecisionSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modifica????o de estado declarado fora do escopo deste componente. Essa propriedade deve ser usada em conjunto com **type** igual a *'confirm'*, pois ?? este estado que ?? modificado em fun????o da a????o de confirma????o, ou n??o, do usu??rio;
> Este componente importa e utiliza outro: `Button`.

`Footer` - componente para exibir o rodap?? das p??ginas da subpasta `app`.
> Este componente importa e utiliza outro: `Logo`.

`Menu` - componente que serve para renderizar o menu, caso o navegador usado pelo usu??rio tenha dimens??es compat??veis com dispositivos m??veis ou esteja usando estes tipos de dispositivos. Conta com as seguintes propriedades:
> **name**, do tipo *string*, para permitir a identifica????o e acesso deste modal por parte da DOM; e **searchSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modifica????o de estado declarado fora do escopo deste componente. ?? usado para que os textos inseridos no `Input` que consta nesse componente altere esse estado de escopo maior.
> Este componente importa e utiliza outros: `Input` e `Footer`.

`Header` - componente que renderiza o cabe??alho de todas as p??ginas da subpasta `app`, que tem a seguinte propriedade:
> **searchSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modifica????o de estado declarado fora do escopo deste componente. ?? usado para que os textos inseridos no `Input` que consta nesse componente altere esse estado de escopo maior.
> Este componente importa e utiliza outros: `Logo`, `Menu`, `Button` e `Input`.

`TagsWrapper` - componente utilizado para que o usu??rio *admin* possa criar e/ou deletar ingredientes de determinado prato, ao acessar as p??ginas `app/Dish/New` e `app/Dish/Edit`. Conta com as seguintes propriedades:
> **className**, do tipo *string*, que permite a identifica????o e acesso deste componente na DOM; **label**, do tipo *string*, que serve para identificar este componente para o usu??rio; **tags**, do tipo *string[]*, que recebe um array de tags para serem renderizadas; e **tagsSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, a fim de atualizar estado de escopo maior que o deste componente.
> Este componente declara e faz uso de outro: `Tag`.
>> `Tag` - componente utilizado para renderizar individualmente em tela cada tag presente no componente `TagsWrapper`, que recebe as seguintes propriedades: **name**, do tipo *string*, para exibir em tela o nome do ingrediente; **tagsSetter**, o mesmo objeto recebido pela `TagsWrapper`, que passa para todas as `Tags` individuais, a fim de que seja poss??vel atualizar estado de escopo maior que o destes componentes, a fim de permitir a cria????o ou dele????o de ingredientes.

`DishCardsWrapper` - componente utilizado para exibir os pratos na p??gina `app/Home`, filtrando os pratos por categoria. Este componente conta com as seguintes propriedades:
> **category**, do tipo *string*, que renderiza o nome da categoria dos pratos em quest??o; **admin**, do tipo *boolean*, que serve para modificar o estilo e op????es nos pratos, em fun????o do usu??rio ser ou n??o *admin*; **dishesData**, do tipo *DishProps[]*, que recebe os dados de cada prato em formato de array de objetos, a fim de que cada objeto corresponda ?? uma carta individual, na forma do componente `DishCard`, a ser explicado a seguir:
>> `DishCard` ?? um componente para renderiza????o de cada prato individual, que conta com as seguintes propriedades: **admin**, do tipo *boolean*, que serve para customizar a carta do prato em fun????o do usu??rio ser ou n??o *admin*; **dishData**, do tipo *DishProps*, que recebe os dados de um prato em si, a fim de serem exibidos; e **device**, do tipo *'desktop' | 'mobile'*, que serve para estilizar tamb??m alguns aspectos da carta do prato em fun????o das dimens??es do dispositivo sendo usado pelo usu??rio.
> Este componente importa e utiliza outro: `Button`.

`SignOutModal` - componente semelhante ao `Modal`, mas com fun????o espec??fica: questionar o usu??rio, de quando em quando, se deseja manter a sess??o corrente aberta. Caso n??o haja nenhuma confirma????o em 60 segundos, o usu??rio ?? desconectado automaticamente. Conta com as seguintes propriedades:
> **name**, do tipo *string*, para permitir a identifica????o e acesso deste componente pela DOM; **message**, do tipo *string*, que exibe a mensagem de interesse ao usu??rio;  **userDecisionSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, para modifica????o de estado declarado fora do escopo deste componente. ?? este estado que ?? modificado em fun????o da a????o de confirma????o, ou n??o, do usu??rio;
**modalOpenTracker**, do tipo *number*, que tem como objetivo saber o momento exato em que este componente foi exibido em tela, a fim de iniciar a contagem de 60 segundos de espera por uma rea????o do usu??rio.
> Este componente importa e utiliza outro: `Button`.

### Como rodar este projeto localmente

Supondo que voc?? j?? tenha o `git` e o `npm` na sua m??quina local, voc?? deve seguir estes passos simples. Primeiro, v?? ao diret??rio de seu interesse e clone este reposit??rio:

> `git clone https://github.com/victorsgb/food-explorer-frontend`

Ent??o, v?? para a pasta rec??m-criada contendo o seu novo reposit??rio local:

> `cd food-explorer-frontend`

Instale as depend??ncias do projeto (assumindo que voc?? tenha o pacote `npm` instalado na sua m??quina):

> `npm install`

E pronto! Voc?? j?? pode rodar o projeto em ambiente de desenvolvedor. O servidor ser?? inicializado na porta 3334, ap??s voc?? rodar o seguinte comando:

> `npm run dev`

E ?? isso! Espera-se que a aplica????o esteja rodando normalmente, no seu navegador padr??o, pronto para fazer solicita????es ao servidor, a saber, o [FoodExplorer Backend](https://github.com/victorsgb/food-explorer-backend).
