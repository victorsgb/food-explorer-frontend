# FoodExplorer Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This document is written first in English and then in Portuguese.

## English version

### Deploy the project

The project was deployed on [Netlify](https://www.netlify.com/), and you can access it through this [link](https://food-explorer-frontend.netlify.app/). You will be redirected to the SignIn page. You can create non-admin users. Use these credentials if you want to access the project as admin: **email**: admin@email.com and **password**: Qwerty-12345.

### Project structure

The `src` folder contains the `index.tsx` file, whose function is to initialize the application, supported by the React framework.

`assets` contains the svg files used throughout the application, as well as the `index.tsx` which makes the declaration of these svg files, for later export where necessary;

`hooks` contains the definition of two custom hooks: `auth.tsx`, which provides user information when authenticated (making use of `useContext` from **React**), and `windowDimensions.tsx` dynamically provides the dimensions of the viewport of the device in use;

`services` contains the file that defines the communication with the server, hosted at [Render](https://food-explorer-backend.onrender.com/);

`styles` contains styling files with classes defined in **css** for defining fonts, as well as objects in the **theme.ts** file to provide the color palette;

`routes` contains files that define the application's routes, depending on whether the user is authenticated (`app.routes.tsx`) or not (`auth.routes.tsx`), in addition to an `index.tsx` file to define the logic of which routes to provide depending on this condition;

`pages` contains subfolder containing the application's pages, as the name implies. The `app` subfolder has pages to be accessed by an authenticated user, and the `auth` subfolder contains pages to be accessed by a regular user. All folders are built as custom React components.

> The subfolder of `auth` are `SignIn` and `SignUp`. They are intended for authentication and account creation, respectively.
> The subfolder of `app` are `Home` and `Dish`. They are intended for viewing and searching dishes and for creating (`Dish/New`), editing (`Dish/Edit`) and viewing (`Dish/Details` ) of the information for specific dishes, respectively.
> In addition to these subfolder (`auth` and `app`), there is a page (`NotFound`) to be rendered whenever the user accesses a prohibited or nonexistent page, indicating a path to access the main page, depending on whether the user is authenticated, or not.

`components` contains several custom components, which are used in different places in the application:

`Logo` - component whose function is to display the FoodExplorer logo, depending on the dimensions of the device in use and the user's credentials. It has only one property:
> **showAdmin**, of type *boolean*, whose function is to indicate whether the logo should be changed to reflect the case that the user is *admin*.

`Loading` - component inspired by the find [here in this link](https://contactmentor.com/how-to-add-loading-spinner-react-js/), to provide a visual waiting effect to the user when doing server requests;

`Button` - widely used component which renders a self-styled button, which has the following properties:
> **text**, of type *string*, which is the text to be rendered indicating the function of the button for the user; **image**, of type *string*, or **icon** of type *IconType*, which renders an image or icon next to the text; **kind**, of type *'delete' | undefined* that defines the background color of the button, to red, when it is undefined or black, when of type 'delete'; **isLoading** of type *boolean*, which serves to render the `Loading` component whenever the state of the current page is given as loading.
> This component imports and uses another one: `Loading`.

`Input` - a very versatile component, which interacts with the end user in different ways, depending on the type it is declared, according to the following properties:
> **type**, of type *'name' | 'email' | 'password' | 'file' | 'money'*, which has the function of determining what type of input data is allowed to the user, as well as rendering it properly; **label**, of type *string*, whose function is to provide a label that serves to identify the type of input; **placeholder**, of type *string*, which provides an example text to the user, to facilitate the insertion of data; and **icon**, of type *IconType*, which allows displaying an icon beside the **label**.

`Select` - component used specifically to allow user selection of category entries, which comes with the following properties:
> **label**, of type *string*, to provide identification to the component; **icon**, of type *IconType*, to display the icon next to the **label**, and **options**, of type *CategoryProps[]*, to receive objects containing the options available for selection .

`TextArea` - component similar to `Input`, although limited to receiving only one input data type, text type. Its difference is that it allows the occurrence of a line break. This component contains the following properties:
> **label**, of type *string*, whose function is to provide a label that serves to identify this component, and **placeholder**, of type *string*, which provides an example text to the user, to facilitate the data entry;

`Warning` - component used to display messages to the user, in a more elegant way than a simple `alert(...)` with default browser styling (and without pausing the application until the user confirms), which has the following properties:
> **type**, of type *'api-bad-response' | 'password-issue'*, to indicate the type of alert to be sent, the first type referring to error messages received from the server, and the second type showing the strong password requirements that were met, in real-time; **response**, of type *string*, which receives the message itself from the server, when **type** of type *'api-bad-response'*; **password**, of type *string*, which receives the password being typed in real-time, so that there is validation if it meets the established strong password criteria when this component has *type* of type *'password -issue'*; and **passwordIssueSetter**, which receives a state setter created using React's `useState` hook, for modifying a state declared outside the scope of this component, to answer whether or not the password met the established criteria.

`Modal` - component similar to `Warning`, also used to display messages to the user, in a more elegant way than a simple `alert(...)` with standard browser styling, but with the function of either informing something or ask the user to confirm something. The component has the following properties:
> **type**, of type *'inform' | 'confirm'*, which indicates whether the component will only inform something, or whether it will require user confirmation for a certain action to take place; **name**, of type *string*, which serves to identify this component, thus allowing its access in the DOM; **message**, of type *string*, which displays the message either to inform or request confirmation of something; **userDecisionSetter**, which receives a state setter created using React's `useState` hook, for modifying state declared outside the scope of this component. This property must be used in conjunction with **type** equal to *'confirm'*, as it is this state that is modified depending on whether the user confirms or not;
> This component imports and uses another: `Button`.

`Footer` - component to display the footer of the pages in the `app` subfolder.
> This component imports and uses another one: `Logo`.

`Menu` - a component that serves to render the menu, if the browser used by the user has dimensions compatible with mobile devices or is using these types of devices. It has the following properties:
> **name**, of type *string*, to allow the DOM to identify and access this modal; and **searchSetter**, which receives a state setter created using React's `useState` hook, for modifying state declared outside the scope of this component. It is used so that the texts inserted in the `Input` contained in this component change this state of greater scope.
> This component imports and uses others: `Input` and `Footer`.

`Header` - a component that renders the header of all pages in the `app` subfolder, which has the following property:
> **searchSetter**, which receives a state setter created using React's `useState` hook, for modifying the state declared outside the scope of this component. It is used so that the texts inserted in the `Input` contained in this component change this state of greater scope.
> This component imports and uses others: `Logo`, `Menu`, `Button`, and `Input`.

`TagsWrapper` - component used so that the *admin* user can create and/or delete ingredients from a given dish when accessing the pages `app/Dish/New` and `app/Dish/Edit`. It has the following properties:
> **className**, of type *string*, which allows the identification and access of this component in the DOM; **label**, of type *string*, used to identify this component for the user; **tags**, of type *string[]*, which receives an array of tags to be rendered; and **tagsSetter**, which receives a state setter created using React's `useState` hook, to update state with scope greater than this component.
> This component declares and makes use of another: `Tag`.
>> `Tag` - component used to render individually on the screen each tag present in the `TagsWrapper` component, which receives the following properties: **name**, of type *string*, to display the name of the ingredient on screen; **tagsSetter**, the same object received by `TagsWrapper`, which passes to all individual `Tags`, so that it is possible to update the state of scope greater than that of these components, to allow the creation or deletion of Ingredients.

`DishCardsWrapper` - component used to display dishes on the `app/Home` page, filtering dishes by category. This component has the following properties:
> **category**, of type *string*, which renders the name of the dish category in question; **admin**, of type *boolean*, which serves to modify the style and options in dishes, depending on whether the user is *admin* or not; **dishesData**, of type *DishProps[]*, which receives the data of each dish in the form of an array of objects, so that each object corresponds to an individual letter, in the form of the `DishCard` component, to be explained below:
>> `DishCard` is a component for rendering each individual dish, which has the following properties: **admin**, of type *boolean*, which serves to customize the dish card depending on whether or not the user is *admin*; **dishData**, of type *DishProps*, which receives data from a dish itself, to be displayed; and **device**, of type *'desktop' | 'mobile'*, which also serves to stylize some aspects of the cymbal chart according to the dimensions of the device being used by the user.
> This component imports and uses another: `Button`.

`SignOutModal` - component similar to `Modal` but with a specific function: asking the users, after some period, if they want to keep their current sessions open. The user is automatically logged out if it doesn't confirm within 60 seconds . It has the following properties:
> **name**, of type *string*, to allow the identification and access of this component by the DOM; **message**, of type *string*, which displays the message of interest to the user; **userDecisionSetter**, which receives a state setter created using React's `useState` hook, for modifying state declared outside the scope of this component. It is this state that is modified depending on whether or not the user confirms;
**modalOpenTracker**, of type *number*, to know the exact moment when this component was displayed to start counting the 60 seconds of waiting for a user reaction.
> This component imports and uses another: `Button`.

### How to run this project locally

Presuming you already have `git` and `npm` on your local machine, you should follow these simple steps. First, go to the directory you are interested in and clone this repository:

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

### Deploy do projeto

O deploy do projeto foi realizado na [Netlify](https://www.netlify.com/) e você pode acessá-lo por este [link](https://food-explorer-frontend.netlify.app/). Você será encaminhado para a página de SignIn, e de lá poderá se deslocar à página de SignUp. Porém, como não é possível ainda criar contas de admin pela plataforma, use essas credenciais caso queira acessar o projeto como tal: **email**: admin@email.com e **senha**: Qwerty-12345.

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
