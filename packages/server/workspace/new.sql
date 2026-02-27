SELECT
    *
FROM
    orders o
    LEFT JOIN users u ON o.user_id = u.user_id

ORDER BY
    created_at DESC