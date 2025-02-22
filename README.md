# REC 2024 Documentation 

## 1. Pre-requisites, Motive, and Description

### 1.1 Languages
HTML, CSS, Javascript, and MongoDB used to create this project. All frameworks are included as,

- Bootstrap: Version 5.3.2
- React.js: Version 18.2.0
- Node.js: Version 20.6.0
- Express.js: Version 4.21.0
- Dotenv: Version 16.4.5

## 2. Stack & Installation

### 2.1 Stack
```mermaid
flowchart TD
subgraph Frontend
A[User Input] <--> B{App.js}
end

subgraph Backend
B <--> C{index.js}
C <--> D{loginRoutes.js}
C <--> E{employeeRoutes.js}
C <--> F{employerRoutes.js}

end

subgraph MongoDB Database
D <--> G[(Database)]
E <--> G[(Database)]
F <--> G[(Database)]

end
```

## 3. References

1. [Bootstrap v5.3.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

Developed by:
- [Maksim Sharoika](https://www.linkedin.com/in/maksim-sharoika-713a69162/) 
- [Shema Dabiri](https://www.linkedin.com/in/shema-dabiri/)
- [Simran Brar](https://www.linkedin.com/in/simran-brar-370b63203/)
- [Muhammad Zaman](https://www.linkedin.com/in/mtzamanpk/) 
