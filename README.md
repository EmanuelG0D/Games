# API backend

En este primer parcial de la materia "Arquectura orientada a servicios", se desarrolló el backend para una aplicación destinada a la venta de vídeo juegos

---

## Configuración del archivo .env

Este archivo es utilizado para realizar las configuraciones necesarias a las variables de entorno que se emplearon en la aplicación. Dichas variables de entorno son las siguientes:


PORT=<Número_del_puerto>

DB_URL_PG=postgresql://<Usuario_que_creaste_en_postgres>:<Tú_contraseña_de_postgres>@localhost:5432/<nombre_de_la_base_de_datos> 

SECRET_KEY=<Tú_secret_key>


---
## Rutas de Postman

Las siguientes rutas son las necesarias para poder interactuar con la API:

- Autenticación: http://localhost:3100/auth/?username=<su_usuario>&password=<su_password>

- Traer todos los juegos (GET): http://localhost:3100/games/

- Traer juegos por id (GET): http://localhost:3100/games/<id>

- Traer juegos por nombre (GET): http://localhost:3100/games/gamesName/<nombre_juego>

- Registrar un juego (POST): http://localhost:3100/games/

- Actualizar juego (PUT): http://localhost:3100/games/<id>

- eliminar libro (DELETE): http://localhost:3100/games/<id>

