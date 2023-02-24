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

`Loading`...

`Button` - componente muito usado, que renderiza um botão com estilo próprio, que tem as seguintes propriedades:
> **text**, do tipo *string*, que é o texto a ser renderizado indicando a função do botão para o usuário; **image**, do tipo *string* ou **icon** do tipo *IconType*, que renderiza uma imagem ou ícone ao lado do texto; **kind**, do tipo *'delete' | undefined* que define a cor de fundo do botão, para vermelho, quando undefined, ou preto, quando do tipo 'delete'; **isLoading** de tipo *boolean*, que serve para renderizar o componente `Loading` sempre que o estado da página atual for dado como em carregamento.

`Input`...

`Select`...

`TextArea`...

`Modal`...

`Warning`...

`Header` - componente que renderiza o cabeçalho de todas as páginas da subpasta `app`, que tem a seguinte propriedade:
> **searchSetter**, que recebe um setter de estado criado com uso da hook `useState` do React, que permite que o texto inserido no componente `Input` presente aqui seja passado ao estado que está num escopo maior que o deste componente em si.

`Footer`...

`TagsWrapper`...

`DishCardsWrapper`...

`SignOutModal`...

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
