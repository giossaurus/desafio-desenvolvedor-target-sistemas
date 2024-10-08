INSERT INTO estado (sigla, nome) VALUES
('SP', 'São Paulo'),
('RJ', 'Rio de Janeiro'),
('MG', 'Minas Gerais');

INSERT INTO tipo_telefone (descricao) VALUES
('Comercial'),
('Residencial'),
('Celular');

INSERT INTO cliente (razao_social, estado_id) VALUES
('Empresa A Ltda', (SELECT id FROM estado WHERE sigla = 'SP')),
('Empresa B S.A.', (SELECT id FROM estado WHERE sigla = 'SP')),
('Empresa C ME', (SELECT id FROM estado WHERE sigla = 'RJ'));

INSERT INTO telefone (cliente_id, tipo_telefone_id, numero) VALUES
(1, 1, '(11) 3333-4444'),  -- Comercial da Empresa A
(1, 3, '(11) 98888-7777'), -- Celular da Empresa A
(2, 1, '(11) 4444-5555'),  -- Comercial da Empresa B
(3, 1, '(21) 2222-3333');  -- Comercial da Empresa C