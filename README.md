<h1 align="center">
      <br> :camera: Pequeno clone do Feed do Instagram<br/>
</h1>


<div align="center"> 
     <img alt="Twitter" src="https://user-images.githubusercontent.com/23706340/72837105-b4762e80-3c6c-11ea-9b97-ccd9db9b0522.png?sanitize=true" />
</div> 

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>
</p>

## :rocket: Tecnologias

:point_down: Esse projeto foi desenvolvido com as seguintes tecnologias: :point_down:

:point_right: [![Netlify Status](https://api.netlify.com/api/v1/badges/69b48002-0224-4cd8-8413-84878b0a0b01/deploy-status)](https://app.netlify.com/sites/instarocket-lf-new/deploys) :point_left:

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [Multer](https://github.com/expressjs/multer)
-  [Socket.io](https://socket.io/)
-  [Cors](https://github.com/expressjs/cors)
-  [Sharp](https://github.com/lovell/sharp)
-  [ReactJS](https://reactjs.org/)
-  [axios](https://github.com/axios/axios)
-  [React Router](https://github.com/ReactTraining/react-router)
-  [VS Code](https://code.visualstudio.com/)
-  [React Native](https://reactnative.dev/)

## :information_source: Como usar 

### :computer_mouse: Rodando o backend: 

- Não esqueça de renomear o arquivo `.env.development` para `.env` e inserir as keys de seu Bucket S3. 

- Altere o [nome do bucket](https://github.com/lucaslombardif/instarocket/blob/621af3f7d5a834d2e2966df2c04a830abeab943b/backend/src/config/upload.js#L19) no arquivo `backend/src/config/upload.js` 

```bash
# Clone o Repositório
$  git clone https://github.com/lucaslombardif/instarocket.git
# Va até o diretório do backend, e instale suas dependências
$ cd instarocket/backend
# Instale as dependências
$ yarn 
# Rode o backend 
$ yarn dev 
```

:point_right: Ou vá [aqui](https://instarocket-server.lucaslombardif.codes) 

### :computer: Rodando o Frontend: 

```bash
#Vá até a pasta frontend 
$ cd frontend 
#Instale as dependências
$ yarn 
#Inicie a aplicação 
$ yarn start
```

:point_right: Ou vá [aqui](https://instarocket.lucaslombardif.tech)

### :iphone: Rodando o Mobile:

```bash
#Vá até a pasta mobile 
$ cd mobile 
#Instale as dependências
$ yarn 
# Android 
$ react-native run-android
#iOS 
$ react-native run-ios
```
