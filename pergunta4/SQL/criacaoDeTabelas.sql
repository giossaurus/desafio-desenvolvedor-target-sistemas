CREATE TABLE estado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sigla VARCHAR(2) UNIQUE NOT NULL,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE tipo_telefone (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    razao_social VARCHAR(100) NOT NULL,
    estado_id INT NOT NULL,
    data_cadastro DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (estado_id) REFERENCES estado(id)
);

CREATE TABLE telefone (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    tipo_telefone_id INT NOT NULL,
    numero VARCHAR(20) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (tipo_telefone_id) REFERENCES tipo_telefone(id)
);