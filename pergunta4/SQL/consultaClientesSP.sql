SELECT 
    c.id AS codigo,
    c.razao_social,
    GROUP_CONCAT(
        CONCAT(tt.descricao, ': ', t.numero)
        SEPARATOR '; '
    ) AS telefones
FROM 
    cliente c
    INNER JOIN estado e ON c.estado_id = e.id
    LEFT JOIN telefone t ON c.id = t.cliente_id
    LEFT JOIN tipo_telefone tt ON t.tipo_telefone_id = tt.id
WHERE 
    e.sigla = 'SP'
GROUP BY 
    c.id, c.razao_social;