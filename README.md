# FoodExplorer Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This document is written first in English and then in Portuguese.

---

## Versão em português

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

Você deve seguir estes passos simples. Primeiro, vá ao diretório de seu interesse e clone este repositório:

> `git clone https://github.com/victorsgb/food-explorer-frontend`

Então, vá para a pasta recém-criada contendo o seu novo repositório local:

> `cd food-explorer-frontend`

Instale as dependências do projeto (assumindo que você tenha o pacote `npm` instalado na sua máquina):

> `npm install`

E pronto! Você já pode rodar o projeto em ambiente de desenvolvedor. O servidor será inicializado na porta 3334, após você rodar o seguinte comando:

> `npm run dev`

E é isso! Espera-se que a aplicação esteja rodando normalmente, no seu navegador padrão, pronto para fazer solicitações ao servidor, a saber, o [FoodExplorer Backend](https://github.com/victorsgb/food-explorer-backend).

## Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
