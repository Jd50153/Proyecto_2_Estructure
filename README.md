# Proyecto: Sistema de Registro y Resultados de Torneo de Fútbol
## Descripción del Proyecto
Este proyecto es una aplicación web diseñada para gestionar un torneo de fútbol. Permite registrar partidos entre equipos, registrar los resultados de esos partidos y visualizar los resultados registrados. Está construida utilizando React como framework de frontend, con un enfoque en el manejo de estados y componentes reutilizables. El proyecto también usa React Select para una mejor experiencia de usuario al seleccionar equipos y partidos. Acá el link publicado https://proyecto-2-estructure.netlify.app/
## Lenguaje de Programación y Framework Utilizado:
- **Lenguaje de Programación:** JavaScript (ES6+)
- **Framework:** React.js
- **Dependencias:**
  - react-router-dom (para navegación)
  - react-select (para selección estilizada de equipos)
  - tailwindcss (para el diseño responsivo)
## Requisitos para la Instalación y Ejecución
Antes de comenzar con la instalación y ejecución, asegúrate de tener los siguientes requisitos previos:
## Requisitos:
- **Node.js:** Asegúrate de tener instalada una versión reciente de Node.js (al menos la versión 14.x).
- **npm o yarn:** Cualquiera de estos gestores de paquetes debería estar instalado junto con Node.js.
## Instalación de dependencias:
- 1- Clona este repositorio a tu máquina local:
 ```bash
  git clone https://github.com/Jd50153/Proyecto_2_Estructure.git
  cd Proyecto_2_Estructure
```
- 2- Instala las dependencias necesarias utilizando npm o yarn:
 ```bash
  npm install
```
- 3- Ejecutar la Aplicación: Una vez instaladas las dependencias, puedes iniciar la aplicación con el siguiente comando:
 ```bash
  npm run dev
```

## Descripción de las Funcionalidades
  ### Registro de Equipos
  - Los usuarios pueden seleccionar equipos utilizando un select estilizado con react-select.
  - Los equipos están representados por su abreviatura (por ejemplo: "ARG" para Argentina, "BRA" para Brasil) y la bandera del país correspondiente.
  ### Generación de Partidos
  - Los equipos seleccionados pueden enfrentarse en partidos, los cuales se generan automáticamente en función de los equipos disponibles.
  ### Registro de Resultados
  - Los usuarios pueden ingresar los resultados de los partidos, que se almacenan en el estado global utilizando un contexto.
  - El formato esperado para los resultados es X-Y (por ejemplo: 3-2 para un partido que terminó 3-2).
  ### Visualización de Resultados
  - Los resultados de los partidos registrados se muestran en una lista donde se indica el partido y el resultado correspondiente.
  ### Navegación con React Router
  - Se utiliza React Router para gestionar las rutas de la aplicación, permitiendo la navegación entre las diferentes secciones (Registro de Resultados, Vista de Partidos, etc.).
## Prueba del código y enlace de prueba
- ![image](https://github.com/user-attachments/assets/a7730789-c777-41f8-899a-ed2323ad0cd4)
- ![image](https://github.com/user-attachments/assets/824eaf7a-c1bf-4517-9b69-d5e38ec83b5e)
- ![image](https://github.com/user-attachments/assets/037feb3b-ad0e-49ac-98eb-f3e97aa60ffc)
- ![image](https://github.com/user-attachments/assets/76cc38cb-bd97-4f8a-b442-4f613701a7ef)



